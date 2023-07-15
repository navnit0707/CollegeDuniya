import React from "react";

export default function Footer() {
  return (
    <div className="flex flex-row bg-blue-500 justify-between">
      <nav className="flex items-center">
        <li className="text-white">copyright logo @ navnit</li>
      </nav>
      <nav className="flex items-center">
        <li className="text-white">facebook</li>
        <li className="text-white">instagram</li>
        <li className="text-white">twitter</li>
        <li className="text-white">github</li>
        <li className="text-white">career</li>
        <li className="text-white">contact</li>
      </nav>
    </div>
  );
}
