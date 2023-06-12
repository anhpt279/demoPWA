import { Navigate } from "react-router-dom";
import { UserCtx } from "src/contexts/users/UserCtx";
import { useContext } from "react";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { usersData } = useContext(UserCtx);

  if (!usersData?.some((item: any) => item?.loggedIn)) {
    return <Navigate to="/onboarding" />;
  }
  return children;
};

export default RequireAuth;
