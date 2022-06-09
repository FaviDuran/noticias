import { lazy } from "react";

//icons

//importaré todas las vistas que vaya a utilizar
const Noticias = lazy(() => import("./views/Noticias"));
const llevame = {

  title: "llévame",
  screens: [
    {
      name: "Noticias",
      url: "/Home/Noticias",
      component:Noticias,
  },
   
  ],
};

export const getRouter = () => {
      return llevame;
};