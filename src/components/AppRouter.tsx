import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes } from '../router/routes';

const AppRouter: React.FC = () => {


  return (
    <Routes>
       {privateRoutes.map(route =>
                    <Route
                        element={<route.component/>}
                        path={route.path}
                        key={route.path}
                    />
                )}
      </Routes>
  );
};

export default AppRouter;