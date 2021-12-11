//SESSION STORAGE
export const setUsuarioSessionStorage = (token, usuario) => {
  sessionStorage.setItem("token", token);
  sessionStorage.setItem("usuario", usuario);
};

export const removeSessionStorage = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("usuario");
};

export const getTokenSessionStorage = () => {
  const token = sessionStorage.getItem("token");
  if (!token) return null;
  return token;
};

export const getUsuarioSessionStorage = () => {
  const usuario = sessionStorage.getItem("usuario");
  if (!usuario) return null;
  return JSON.parse(usuario);
};

//LOCAL STORAGE
export const setVentasLocalStorage = (venta) => {
  localStorage.setItem("venta", venta);
};

export const getVentasLocalStorage = () => {
  const venta = localStorage.getItem("venta");
  if (!venta) return null;
  return JSON.parse(venta);
};

export const removeLocalStorage = () => {
  localStorage.removeItem("venta");
};

//EXPORT
export default {
  // FUNCIONES PARA EL SESSION STORAGE
  setUsuarioSessionStorage,
  removeSessionStorage,
  getTokenSessionStorage,
  getUsuarioSessionStorage,
  //FUNCIONES PARA EL LOCAL STORAGE
  setVentasLocalStorage,
  getVentasLocalStorage,
  removeLocalStorage,
};
