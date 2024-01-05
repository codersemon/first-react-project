import Layouts from "../components/layouts/Layouts";
import Admin from "../pages/admin/Admin";
import Category from "../pages/admin/pages/category/Category";
import Dashboard from "../pages/admin/pages/dashboard/Dashboard";
import Posts from "../pages/admin/pages/posts/Posts";
import Roles from "../pages/admin/pages/roles/Roles";
import Users from "../pages/admin/pages/users/Users";

// private routers 
const privateRouter = [
    {
        element: <Layouts />,
        children: [
            {
                path: '/admin',
                element: <Admin />,
                children: [
                    {
                        path: 'dashboard',
                        element: <Dashboard />
                    },
                    {
                        path: 'posts',
                        element: <Posts />
                    },
                    {
                        path: 'category',
                        element: <Category />
                    },
                    {
                        path: 'users',
                        element: <Users />
                    },
                    {
                        path: 'roles',
                        element: <Roles />
                    }
                ]
            }
        ]
    }
];

// export private routers 
export default privateRouter;