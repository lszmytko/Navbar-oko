import React from "react";
import { HiSearch } from "react-icons/hi";

interface Iprops1 {
    children: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}

const Navbar = ({children} : Iprops1) => {
  return (
    <div className="Navbar">
      <div className="Navbar_left">
        <img src="/logo-okopress.jpg" alt="" />
        <span>Wydarzenia</span>
        <span>kontakt</span>
        <span>wesprzyj nas</span>
      </div>
      <div className="Navbar_right">
        <div className="Navbar_right_children">
            {children}
        </div>
        <span>
          <HiSearch className="icon"/>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
