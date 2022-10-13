import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { setVisible } from "../../StateManagement/sidebarSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, sidebar } = useSelector((state) => state);
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <button onClick={() => dispatch(setVisible(true))} className="btn btn-primary">
        Profile
      </button>
      <AnimatePresence>
        {sidebar.visible && (
          <motion.div
            initial={{ x: 900, opacity: 0 }}
            transition={{ duration: 1 , ease: "easeInOut" }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 900, opacity: 0 }}
            className={`absolute md:w-2/3 w-1/2 h-full bg-secondary right-0 `}
          >
            <div className="flex justify-end pt-5 pr-5">
              <button onClick={() => dispatch(setVisible(false))} className="btn btn-primary">
                X
              </button>
            </div>

            <div className="mt-20 flex justify-center">
              <div className="text-xl">
                <h1 className="text-2xl text-black">User data from react-toolkit state</h1>
                <p>Email : {user.data.email}</p>
                <p>password : {user.data.password}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
