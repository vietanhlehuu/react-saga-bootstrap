import { RoutePath } from "constants/constants";
import Login from "components/features/login/Login";
import Admin from "components/features/admin/Admin";

export const appRoutes = {
  getRoutes: () => [
    {
      path: RoutePath.login,
      component: Login,
      exact: true,
    },
    {
      path: RoutePath.admin,
      component: Admin,
      exact: true,
    },
  ],
};
