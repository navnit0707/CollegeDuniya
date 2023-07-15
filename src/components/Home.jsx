import Box from "./Box.jsx";

import data from "../../data.json";
import { Link } from "react-router-dom";
const stream = Object.keys(data.stream);
export default function Home() {
  console.log(data);
  return (
    <div className="flex flex-col flex-1 h-screen">
      <div className="grid grid-cols-2 gap-2 m-2 p-1 ">
        {stream.map((data) => {
          return (
            <Link to={`/syllabus/stream:${data}`}>
              <Box
                header={data}
                body="Click on below link to see branch wise syllabus of all semesters."
                footer="click me"></Box>
            </Link>
          );
        })}
      </div>
      <div className="grid grid-cols-5 gap-10 m-2 border-8 h-screen border-emerald-500">
        <Box
          header="first box"
          footer="first footer"
          body="first body"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="first box"
          footer="first footer"
          body="first body"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="first box"
          footer="first footer"
          body="first body"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="first box"
          footer="first footer"
          body="first body"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="first box"
          footer="first footer"
          body="first body"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="first box"
          footer="first footer"
          body="first body"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="first box"
          footer="first footer"
          body="first body"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="first box"
          footer="first footer"
          body="first body"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="first box"
          footer="first footer"
          body="first body"
          className="bg-lightgray p-10 border-gray border-1"
        />
      </div>
      <div className="grid grid-cols-5 gap-10 border-8 h-screen border-emerald-500">
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
          className="bg-lightgray p-10 border-gray border-1"
        />
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
          className="bg-lightgray p-10 border-gray border-1"
        />
      </div>
    </div>
  );
}
