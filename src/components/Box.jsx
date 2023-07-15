import { useParams, Navigate, Link } from "react-router-dom";

function Box({ header, body, footer }) {
  return (
    <div className="flex flex-col justify-between h-full bg-white border-4 border-black">
      <header className="flex-1 flex justify-center">
        <span className="bg-gradient-to-br from-blue-500 via-green-400 to-yellow-300 bg-clip-text text-transparent font-extrabold text-3xl">
          {header}
        </span>
      </header>

      <body className="flex-1">{body}</body>
      <footer className="flex-1">Click me</footer>
    </div>
  );
}

export default Box;
