import { lazy } from "react";
//importaré todas las vistas que vaya a utilizar
const Noticias = lazy(() => import("./views/Noticias"));
const listaMenu = {

  title: "ListaMenú",
  screens: [
    {
      name: "Noticias",
      url: "/Home/Noticias",
      component: Noticias,
    },

  ],
};

export const getRouter = () => {
  return listaMenu;
};