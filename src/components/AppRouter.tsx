import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/routes';
import MyLoader from './UI/Loader/MyLoader';
import { AuthContext } from '../content/context';

const AppRouter: React.FC = () => {

  const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <MyLoader/>
    }

  return (
    isAuth?
    <Routes>
       {privateRoutes.map(route =>
                    <Route
                        element={<route.component/>}
                        path={route.path}
                        key={route.path}
                    />
                )}
      </Routes>
      :
      <Routes>
       {publicRoutes.map(route =>
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