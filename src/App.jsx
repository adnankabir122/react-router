import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
    const router = createBrowserRouter([
    {
      path: "/",
      element : <h1>This is default page </h1>
    },
    {
      path: "home",
      element: <h1>Home Page</h1>
    },
    {
      path: "about",
      element : <h1>About Page</h1>
    }
  ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
