import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
        <Link to="/setup">Select Game Mode</Link>
      <Outlet />
    </>
  )
};

export default Layout;