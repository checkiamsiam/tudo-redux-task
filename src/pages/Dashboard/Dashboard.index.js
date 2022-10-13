import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setVisible } from "../../StateManagement/sidebarSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, sidebar } = useSelector((state) => state);
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <button onClick={() => dispatch(setVisible(true))} className="btn btn-primary">
        Profile
      </button>
      <div className={`absolute md:w-2/3 w-1/2 h-full bg-secondary right-0 ${sidebar.visible ? "block" : "hidden"}`}>
        <div className="flex justify-end pt-5 pr-5">
          <button onClick={() => dispatch(setVisible(false))} className="btn btn-primary">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
