import { coursesData } from "../../Data";
import Head from "../Head/Head";
import "./Courses.css";
// import { coursesData } from "../../Data";
import { UilUniversity } from "@iconscout/react-unicons";

const Courses = ({ title }) => {
  return (
    <div className="mainPage">
      <Head title={title} />
      <div className="container">
        <div className="coursesPage">
          {coursesData.map((course, index) => {
            return (
              <div className="courseCard" key={index}>
                <div className="courseIcon">
                  <course.icon width={150} height={150} />
                  <div className="courseTitle">{course.title}</div>
                </div>
                <div className="cardOverlay">
                  <div className="content">
                    <p>{course.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
