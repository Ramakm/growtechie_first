import CourseBody from "../../components/course/CourseBody";

const data = {
    title: "Web Development",
    subTitle: "Beginner to Master",
    imageUrl:
    'https://5.imimg.com/data5/SELLER/Default/2022/12/YU/EL/RU/182187902/software-development-500x500.jpg',
    detail:
      "Welcome to the Software Development (Full Stack) course online for beginners, designed to help you kickstart your programming journey. This comprehensive course offers essential topics like Frontend, Backend & Frameworks. You'll gain the knowledge and confidence to start working on live projects, which will be discussed during this course. To get the full course details, book a demo session with us for free.",
    requirements: [
      "A computer with internet access",
      "Basic understanding of programming concepts (not mandatory)",
    ],
    description:
      "Become a fullstack web developer (and be job ready) by taking this ONE course, even if you've never coded before. Our experts will teach you to get fully prepare for any interviews",
    isDetailedSyllabus: false,
    syllabus: [
      "Module 1: Webdev Fundamentals",
      "Module 2: Understanding How Web Works? Glimpses of request/response cycle",
      "Module 3: Code Editor- VS Code",
      "Module 4: HTML - For Benginers",
      "Module 5: HTML - Intermediate Level",
      "Module 6: CSS - Beginners Guide To Website Building",
      "Module 7: CSS - Intermediate Levvel CSS",
      "Module 8: CSS - Responsive Web Design",
      "Module 9: Guide To Javascript For Beginners",
      "Module 10: Bootstrap 5 For Beginners",
      "Module 11: Jquery For Beginners",
      "Module 12: React.js For Beginners",
      "Module 13: Intermediate Level React Using Functional Components",
      "Module 15: Commandline For Beginners",
      "Module 16: Git & Github For All",
      "Module 17: Intermediate Git & Modern Dev Workflow",
      "Module 18: Python- For Beginners",
      "Module 19: Python- For Intermediate",
      "Module 20: Python- For Advanced Level",
      "Module 21: Database Learnign session",
      "Module 22: Framework As Per Learners Choice",
      "Module 23: DevOps With Docker & Docker Compose",
      "Module 24: How To Get Job Calls and Resume Making For Software Dev Jobs",

    ],
  };
  
  const WebDevelopment = () => <CourseBody data={data} />;
  
  export default WebDevelopment;