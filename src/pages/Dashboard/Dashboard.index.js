import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { setAnimateAnimation, setExitAnimation, setInitialAnimation, setTransitionAnimation, setVisible } from "../../StateManagement/sidebarSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user, sidebar } = useSelector((state) => state);
  useEffect(() => {
    dispatch(setInitialAnimation({ x: 900, opacity: 0 }));
    dispatch(setTransitionAnimation({ duration: 1, ease: "easeInOut" }));
    dispatch(setAnimateAnimation({ x: 0, opacity: 1 }));
    dispatch(setExitAnimation({ x: 900, opacity: 0 }));
  }, [dispatch]);
  return (
    <div className="w-full h-screen flex justify-center items-center relative">
      <button onClick={() => dispatch(setVisible(true))} className="btn btn-primary">
        Profile
      </button>
      <AnimatePresence>
        {sidebar.visible && (
          <motion.div
            initial={sidebar.animation.initial}
            transition={sidebar.animation.transition}
            animate={sidebar.animation.animate}
            exit={sidebar.animation.exit}
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
