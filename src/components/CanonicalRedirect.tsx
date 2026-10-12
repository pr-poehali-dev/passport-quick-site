import { Navigate, useLocation } from 'react-router-dom';

const CanonicalRedirect = () => {
  const { pathname, search, hash } = useLocation();
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '').toLowerCase() : pathname;

  if (clean !== pathname) {
    return <Navigate to={`${clean || '/'}${search}${hash}`} replace />;
  }
  return null;
};

export default CanonicalRedirect;
