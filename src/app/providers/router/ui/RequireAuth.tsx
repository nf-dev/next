import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: ReactNode;
}

const RequireAuth = ({ children }: RequireAuthProps) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    if (!auth) {
        return (
            <Navigate to={RoutePath.main} state={{ from: location }} replace />
        );
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
};

export { RequireAuth };
