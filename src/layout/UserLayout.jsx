import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">User Layout</h1>
      {<Outlet />}
    </>
  );
};

export default UserLayout;
