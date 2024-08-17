import { Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Basic Layout</h1>
      {<Outlet />}
    </>
  );
};

export default BasicLayout;
