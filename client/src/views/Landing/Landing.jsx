import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <>
            <h1>Landing Page</h1>
            <Link to="/home">
                <button>Go Home</button>
            </Link>
        </>
    )
};

export default Landing;