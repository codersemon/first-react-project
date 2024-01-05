// dependencies 
import { createBrowserRouter } from "react-router-dom";
import privateRouter from "./privateRouter";
import publicRouter from "./publicRouter";

// router config 
const router = createBrowserRouter([...privateRouter, ...publicRouter]);

// export router 
export default router;