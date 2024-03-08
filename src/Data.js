import {
  // SideBar Icons
  UilEstate,
  // UilApps,
  UilNotebooks,
  UilSun,
  UilGraduationCap,
  UilChatBubbleUser,

  // Course Icons
  UilBolt,
  UilLocationPoint,
  UilLinkH,
  UilUniversity,

  // achivers
  UilUser,
} from "@iconscout/react-unicons";

import Mission from "./assets/mission1.png";
import Vision from "./assets/vision2.png";
import Success from "./assets/success1.png";

export const sidebarMenu = [
  {
    id: 1,
    icon: UilEstate,
    title: "Home",
    linkto: "/",
  },
  // {
  //   id: 2,
  //   icon: UilApps,
  //   title: "About",
  //   linkto: "/about",
  // },
  {
    id: 3,
    icon: UilNotebooks,
    title: "Courses",
    linkto: "/courses",
  },
  {
    id: 4,
    icon: UilSun,
    title: "HighLights",
    linkto: "/highlights",
  },
  {
    id: 5,
    icon: UilGraduationCap,
    title: "Achievers",
    linkto: "/achievers",
  },
  {
    id: 6,
    icon: UilChatBubbleUser,
    title: "Contact",
    linkto: "/contact",
  },
];

export const coursesData = [
  {
    icon: UilBolt,
    title: "UPSC",
    desc: "The Civil Services Examination is a national competitive examination in India conducted by the Union Public Service Commission.",
  },
  {
    icon: UilLocationPoint,
    title: "TNPSC",
    desc: "TNPSC conducts a wide range of examinations throughout the year for the recruitment of various posts under the state government.",
  },
  {
    icon: UilLinkH,
    title: "SI & PC",
    desc: "Police exams are conducted by different bodies of Government to recruit candidates for different posts in the Police Departments.",
  },
  {
    icon: UilUniversity,
    title: "BANK Exam",
    desc: "A large number of candidates appear for the competitive exams and aspire to join one of the prestigious banks.",
  },
];

export const highLightsData = [
  {
    src: Mission,
    title: "Our Mission See for yourself",
    desc: "To democratize IAS coaching by offering affordable and high-quality education, championing social justice through inclusive learning opportunities. Our commitment is to uplift the economically disadvantaged, promote equality, and actively contribute to women's empowerment, fostering a diverse and empowered cadre of civil servants dedicated to serving society.",
  },
  {
    src: Vision,
    title: "Our Vision Empowering Fututres",
    desc: "Empowering Futures, Nurturing Leaders. Our mission is to provide high-quality IAS coaching at an affordable cost, ensuring accessibility for all, with a strong emphasis on social justice. We are committed to helping the economically disadvantaged, promoting equality, and fostering women empowerment in pursuit of a more inclusive and diverse civil services community.",
  },
  {
    src: Success,
    title: "Learn to Lead",
    desc: "Sakhya IAS academy is established in the year 2021 under the guidance of Mr.T.Christu Raj IAS, with the intention of creating IAS officers from the poorest family to serve the society.",
  },
];

export const specilityData = [
  "Guidance by the current officials.",
  "Experienced faculties.",
  "Classes are in bilingual.",
  "Single fee until you are placed.",
  "Every week test with discussion.",
  "Free study hall.",
  "Attendance will be maintained.",
];

export const achieversData = [
  {
    src: UilUser,
    name: "SomeOne",
    post: "IAS",
    year: "2023",
  },
  {
    src: UilUser,
    name: "SomeOne",
    post: "IAS",
    year: "2023",
  },
  {
    src: UilUser,
    name: "SomeOne",
    post: "IAS",
    year: "2023",
  },
  {
    src: UilUser,
    name: "SomeOne",
    post: "IAS",
    year: "2023",
  },
  {
    src: UilUser,
    name: "SomeOne",
    post: "IAS",
    year: "2023",
  },
];
