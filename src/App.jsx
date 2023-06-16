import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import Main from "./Layout/Main";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>,
            children: [
                {path: "home",element: <Home />},
                {path: "products",element: <h1>Product Page</h1>},
            ],
        },
        
        {path: "about", element: <About />},
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
