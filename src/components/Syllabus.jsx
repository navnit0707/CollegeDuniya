import React from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";

export default function Syllabus() {
  const { name } = useParams();
  return (
    <div className="flex flex-col flex-1 h-screen">
      <Header />
      {name}
    </div>
  );
}
