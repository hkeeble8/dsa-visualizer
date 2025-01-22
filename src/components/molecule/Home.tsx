import React from "react";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <ul>
            <li>
                <NavLink to="/data-structures/linked-list">Linked List</NavLink>
            </li>
            <li>
                <NavLink to="/data-structures/doubly-linked-list">Doubly Linked List</NavLink>
            </li>
        </ul>
    )
}

export default Home;
