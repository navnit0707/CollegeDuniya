import React from "react";

function Header() {
  return (
    <div className="flex flex-row bg-blue-500 justify-between">
      <nav className="flex items-center ">
        <li className="text-white">Logo</li>
      </nav>
      <nav className="flex items-center">
        <li className="text-white">Syllabus</li>
        <li className="text-white">Notes</li>
        <li className="text-white">Tutorial</li>
        <li className="text-white">Contact us</li>
      </nav>
    </div>
  );
}

export default Header;
