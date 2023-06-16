import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About/About";
import Home from "./component/Home/Home";

const App = () => {
    const router = createBrowserRouter([
    {
      path: "/",
      element : <h1>This is default page </h1>
    },
    {
      path: "home",
      element: <Home/>
    },
    {
      path: "about",
      element : <About/>
    }
  ]);

    return (
        <>
            
            <RouterProvider router={router} />
        </>
    );
};

export default App;
