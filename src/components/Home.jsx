import Box from "./Box.jsx";
import Styles from "./Home.module.css";
export default function Home() {
  return (
    <div className={Styles.container}>
      <div className={Styles.syllabus}>
        <Box
          header="B.Tech Syllabus"
          footer="clic ME"
          body="Click on below link to see branch wise syllabus of all semesters."
        />
        <Box header="first box" footer="first footer" body="first body" />
        <Box header="first box" footer="first footer" body="first body" />
        <Box header="first box" footer="first footer" body="first body" />
        <Box header="first box" footer="first footer" body="first body" />{" "}
        <Box header="first box" footer="first footer" body="first body" />
        <Box header="first box" footer="first footer" body="first body" />
      </div>
      <div className={Styles.question}>
        <Box header="first box" footer="first footer" body="first body" />
        <Box header="first box" footer="first footer" body="first body" />
        <Box header="first box" footer="first footer" body="first body" />
        <Box header="first box" footer="first footer" body="first body" />
        <Box header="first box" footer="first footer" body="first body" />
        <Box header="first box" footer="first footer" body="first body" />
        <Box header="first box" footer="first footer" body="first body" />
        <Box header="first box" footer="first footer" body="first body" />
        <Box header="first box" footer="first footer" body="first body" />
      </div>
      <div className={Styles.extrastuff}>
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
        />
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
        />
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
        />
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
        />
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
        />
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
        />
        <Box
          header="extra stuff"
          footer="extra stuff"
          body="body of extra stuff"
        />
      </div>
    </div>
  );
}
