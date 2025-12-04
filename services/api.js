// ----------------------------
// 🔧 Construir Query Params
// ----------------------------
function buildQuery(params) {
  const query = new URLSearchParams();

  if (params.page) query.append("page", params.page);
  if (params.limit) query.append("limit", params.limit);
  if (params.category) query.append("category", params.category);
  if (params.query) query.append("query", params.query);
  if (params.sort) query.append("sort", params.sort);

  return query.toString();
}

// ----------------------------
// 🔹 Obtener productos (paginado + filtros)
// ----------------------------
export async function obtenerProductos({
  page = 1,
  limit = 6,
  category = null,
  query = null,
  sort = null
} = {}) {
  const qs = buildQuery({ page, limit, category, query, sort });

  const res = await fetch(`/api/products?${qs}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Error al obtener productos");

  return res.json();
}

// ----------------------------
// 🔹 Obtener producto por ID
// ----------------------------
export async function obtenerProductoPorId(id) {
  const res = await fetch(`/api/products?id=${id}`, {
    cache: "no-store"
  });

  if (!res.ok) throw new Error("Producto no encontrado");

  return res.json();
}



export{obtenerProductos,obtenerProductoPorId}