import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
    const friend = useLoaderData();

    return (
        <div>
            <h1>Friend Detail Page</h1>
            <h4>Name: {friend.name}</h4>
            <h4>Id: {friend.id}</h4>
            <p>Username :{friend.email}</p>
            <p>Address :{friend.address.city}</p>
            <p>Phone :{friend.phone}</p>
        </div>
    );
};

export default FriendDetails;
