import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
    const { id, name, email, website } = props.value;

    const friendStyle = {
        border: "1px solid grey",
        padding: "20px",
        marginBottom: "20px",
    };

    const navigate  = useNavigate();
    const handleNavigate=()=>{
        navigate(`/users/${id}`)
    }

    return (
        <section style={friendStyle}>
            <h4>Name: {name}</h4>
            <h4>Id: <Link to={`/users/${id}`}>{id}</Link></h4>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
            <button onClick={handleNavigate}>Show Details</button>
        </section>
    );
};

export default Friend;
