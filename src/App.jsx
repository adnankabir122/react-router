import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About/About";
import FriendDetails from "./component/FriendDetails/FriendDetails";
import Home from "./component/Home/Home";
import Users from "./component/Users/Users";
import Main from "./Layout/Main";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main/>,
            children: [
                {path: "home",element: <Home />},
                {path: "products",element: <h1>Product Page</h1>},
                {
                    path: "users",
                    element: <Users/>,
                    loader: async () => {
                        return fetch(`https://jsonplaceholder.typicode.com/users`);
                    },
                },
                {
                    path: "/users/:friendId",
                    element:<FriendDetails/>,
                    loader: async ({ params }) => {
                        return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
                    },
                }
            ],
        },
        
        {path: "about", element: <About />},
        {path: "*", element: <h1>No Page Found</h1>},
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
