import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="flex items-center justify-center mt-10 mb-4 gap-2">
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <ellipse cx="10" cy="10" rx="9" ry="3.8" stroke="#61DAFB" strokeWidth="1.5"/>
            <ellipse cx="10" cy="10" rx="3.8" ry="9" stroke="#61DAFB" strokeWidth="1.5"/>
            <ellipse cx="10" cy="10" rx="9" ry="3.8" transform="rotate(60 10 10)" stroke="#61DAFB" strokeWidth="1.5"/>
            <ellipse cx="10" cy="10" rx="9" ry="3.8" transform="rotate(120 10 10)" stroke="#61DAFB" strokeWidth="1.5"/>
            <circle cx="10" cy="10" r="1.5" fill="#61DAFB"/>
          </g>
        </svg>
        <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-700 text-white text-sm font-semibold shadow-md">
          Made with ReactJs
        </span>
      </div>
    </div>
  );
};

export default AppLayout;
