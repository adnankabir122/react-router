import { useLoaderData } from "react-router-dom";
import Friend from "../Friend/Friend";
const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Number of Users: {users.length}</h2>
            {
                users.map((value,index) => <Friend value={value} key={index}/> )
            }
        </div>
    );
};

export default Users;
