export async function GET(req) {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTM4oVPbMWohlP_FQIESliNyBp0YzgWHlzTwCcVuBLfE5-5XcfnbZ-CjUK3ay6-pARRvalBczf_NoP5/pub?gid=0&single=true&output=csv";

  const response = await fetch(csvUrl);
  const csvText = await response.text();

  const rows = csvText.split("\n").map((row) => row.split(","));
  const headers = rows[0];

  const products = rows.slice(1).map((row) => {
    const item = {};
    headers.forEach((h, i) => {
      item[h.trim()] = row[i]?.trim();
    });

    item.images = item.images?.split(";").map((i) => i.trim());
    item.features = item.features?.split(";").map((i) => i.trim());
    item.id = Number(item.id);

    return item;
  });

  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get("id");
  const categoryParam = searchParams.get("category");
  const queryParam = searchParams.get("query");

  // ------------------------------
  // FUNCIONES PARA BÚSQUEDA DIFUSA
  // ------------------------------

  function normalize(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // quita acentos
  }

  function levenshtein(a, b) {
    const matrix = [];

    const alen = a.length;
    const blen = b.length;

    for (let i = 0; i <= alen; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= blen; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= alen; i++) {
      for (let j = 1; j <= blen; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;

        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // eliminar
          matrix[i][j - 1] + 1, // insertar
          matrix[i - 1][j - 1] + cost // sustituir
        );
      }
    }

    return matrix[alen][blen];
  }

  function fuzzyMatch(text, search) {
    const a = normalize(text);
    const b = normalize(search);

    const dist = levenshtein(a, b);

    return dist <= Math.max(2, b.length * 0.4); 
    // permite hasta 40% de error
  }

  // -------------------------
  // 1️⃣ Buscar por ID
  // -------------------------
  if (idParam) {
    const product = products.find((p) => p.id === Number(idParam));
    return Response.json(product || null);
  }

  // -------------------------
  // 2️⃣ Buscar por categoría EXACTA
  // -------------------------
  if (categoryParam) {
    const filtrados = products.filter(
      (p) =>
        normalize(p.category) === normalize(categoryParam)
    );

    return Response.json(filtrados);
  }

  // -------------------------
  // 3️⃣ BÚSQUEDA DIFUSA (query)
  // -------------------------
  if (queryParam) {
    const q = normalize(queryParam);

    const filtrados = products.filter((p) => {
      const name = p.name ? normalize(p.name) : "";
      const category = p.category ? normalize(p.category) : "";

      return (
        name.includes(q) ||
        category.includes(q) ||
        fuzzyMatch(name, q) ||
        fuzzyMatch(category, q)
      );
    });

    return Response.json(filtrados);
  }

  // -------------------------
  // 4️⃣ Devolver todo
  // -------------------------
  return Response.json(products);
}
