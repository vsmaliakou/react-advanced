import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouterComponent: React.FC = () => {
  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    isAuth
      ?
      <Routes>
        {privateRoutes.map(route =>
          <Route key={route.path} path={route.path} element={route.element} />
        )}
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route key={route.path} {...route} />
        )}
      </Routes>
  );
};

export const AppRouter = AppRouterComponent;
