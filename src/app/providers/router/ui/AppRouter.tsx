import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path, authOnly }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {authOnly ? (
                                    <RequireAuth>{element}</RequireAuth>
                                ) : (
                                    element
                                )}
                            </div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};

export default AppRouter;
