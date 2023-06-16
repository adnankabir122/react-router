import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                About
            </NavLink>
            <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Products
            </NavLink>
            <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Users
            </NavLink>
        </div>
    );
};

export default Header;
