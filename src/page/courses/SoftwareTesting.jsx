import CourseBody from "../../components/course/CourseBody";

const data = {
  title: "Software Testing",
  subTitle: "Master Art of Software Testing",
  imageUrl:
    "https://optimworks.com/wp-content/uploads/2022/06/Software-Testing-1280x720-1.jpg",
  detail:
    "Course objective is to provide you with all required knowledge that you need in order to land your first software testing job whether it is a full-time or a freelancing job.",
  requirements: [
    `No prior knowledge about the field is required`,
    `Basic computer & mobile using skills (you need to be able to use them as an end user)`,
  ],
  description:
    "Everything you need to learn Software Testing, all combined in one resource.",
  isDetailedSyllabus: true,
  syllabus: [
    {
      title: "Manual Testing",
      topics: [
        "Introduction",
        "Verification and Validation",
        "Types of applications",
        "Probabilities Of getting an error in an application",
        "SDLC",
        "Waterfall",
        "Prototype",
        "Spiral",
        "Incremental",
        "V-model",
        "Advantage and Disadvantages of SDLC",
        "Principal of Testing",
        "STLC",
        "Difference between Test case, Use case & Scenario",
        "How to prepare Test plan and Strategy",
        "How to prepare a Test case template",
        "Diff. Between error, bug, defect & failure",
        "Test Case design techniques",
        "Bug life analysis",
        "How to prepare bug template?",
        "Bug tracking tool",
        "Type of tetsing",
        "Statis and Dynamic Tetsing",
        "Functional & Non functional Tetsing",
        "Black box & its type",
        "White box & its type",
        "System vs User Acceptance tetsing",
        "Entry & Exit Criteria",
        "Test Environment & Test Data Preparation",
        "Flow Graph notation",
        "Integration Tetsing",
        "Requirement tracability Matrix",
      ],
    },
    {
      title: "Automation Testing",
      topics: [
        "Java/Python Basics (Preferred by Student)",
        "Introduction to selenium",
        "Introduction to Automation Tetsing",
        "Introduction to webdriver",
        "Selenium Installation",
        "Webdriver Basics-1",
        "Webdriver Basics-2",
        "TestNG",
        "Webdriver framework",
        "Selenium grid",
        "DB Testing using webdriver",
        "BDD Framework using cucumber",
        "Project Execution",
        "Mobile App Test Automation using Appium",
        "Version Control Introduction",
        "Github",
        "JUnit",
        "Log4j",
        "Resume Preparation",
      ],
    },
  ],
};

const SoftwareTesting = () => <CourseBody data={data} />;

export default SoftwareTesting;
