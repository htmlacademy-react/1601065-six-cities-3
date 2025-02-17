import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const.ts';
import { PrivateRouteProps } from '../types/type.ts';

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { authorizationStatus, children } = props;
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.Login} />
  );
}
export default PrivateRoute;
