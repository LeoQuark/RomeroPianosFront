import { API_URL } from "./api-data.js";
import axios from "axios";

export const agregarProducto = async (datos, producto) => {
  console.log(datos);
  const post = await axios.post(`${API_URL}/${producto}/create`, datos);
  console.log(post);
  if (post.status != 200) return "error";
  return post.data.msg;
};

export const actualizarPorId = async (datos, producto, id) => {
  const put = await axios.put(`${API_URL}/${producto}/update/${id}`, datos);
  if (put.status != 200) return "error";
  return put.data.msg;
};

export const obtenerTodos = async (producto) => {
  const get = await axios.get(`${API_URL}/${producto}/getAll`);
  // console.log(get);
  if (get.status != 200) return "error";
  return get.data.data;
};

export const eliminarPorId = async (producto, id) => {
  const eliminar = await axios.delete(`${API_URL}/${producto}/delete/${id}`);
  console.log(eliminar);
  if (eliminar.status != 200) return "error";
  return eliminar.data.msg;
};

export default {
  agregarProducto,
  obtenerTodos,
  actualizarPorId,
  eliminarPorId,
};
