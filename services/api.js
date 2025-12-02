async function obtenerProductos() {
   const res = await fetch("/api/products");
  return res.json();
}
async function obtenerProductoPorId(id) {
  const res = await fetch(`/api/products?id=${id}`);
  console.log("Que trae obtenerProductoPorUd", res.json)
  return res.json();
}


export{obtenerProductos,obtenerProductoPorId}