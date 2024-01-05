import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/404/404";
import Home from "../pages/home/Home";
import Layouts from "../components/layouts/Layouts";

// public routers 
const publicRouter = [
    {
        element: <Layouts />,
        children: [
            {
                path: '*',
                element: <NotFound />
            },
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            }
        ]
    }
];

// export public router 
export default publicRouter