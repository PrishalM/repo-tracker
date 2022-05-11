import React from "react";

import { Outlet, NavLink, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate(-1);
  };

  return (
    <>
      {" "}
      <header>
        <h1>Repo tracker</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <a onClick={handleBackBtn}>Back</a>
        </nav>
      </header>
      <Outlet />
      <footer>Footer items</footer>
    </>
  );
};

export default Layout;
