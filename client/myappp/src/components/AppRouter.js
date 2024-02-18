import React, { useContext } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from "../utils/consts";
import { Context } from "../index";
import { getAll } from '../http/basketAPI';

const AppRouter = () => {
  const { user } = useContext(Context)
  const basketsData = getAll();
  console.log(basketsData)
  return (
    <Routes>
      {user.isAuth && authRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} exact />
      )}

      {publicRoutes.map(({ path, Component }) =>
        <Route key={path} path={path} element={<Component />} exact />
      )}
    </Routes>
  );
};

export default AppRouter;
