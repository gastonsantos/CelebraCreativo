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

  // Filtrar por id si existe
  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get("id");

  if (idParam) {
    const product = products.find((p) => p.id === Number(idParam));
    return Response.json(product || null); // devuelve un solo producto o null
  }

  // Si no hay id, devuelve todos
  return Response.json(products);
}
