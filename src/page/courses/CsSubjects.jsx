import CourseBody from "../../components/course/CourseBody";

const data = {
  title: "Computer Science Subjects",
  subTitle: "Master the Theory Behind Programming",
  imageUrl:
    "https://us.123rf.com/450wm/ra2studio/ra2studio2104/ra2studio210405103/168030448-hand-touching-digital-button-modern-technology-concept.jpg?ver=6",
  detail:
    "Understanding Computer Science theory is what sets apart Great programmers from average ones. Programming theory is something that transcends a single programming language. It gives you skills and techniques you can apply to any programming language you touch. Learning the theory behind programming is just as important, if not more important than learning a singular programming language like Java or C++.",
  requirements: [
    "A Willingness to Learn New Topics!",
    `A computer with internet connection.`,
    "No Prior Experience or Knowledge is Needed!",
  ],
  description:
    "If you're looking to learn the theory that makes great programmers, you've come to the right place! This course is perfect for anyone interested in learning the fundamentals to Computer Science Theory. ",
  isDetailedSyllabus: false,
  syllabus: [
    "Compiler Design",
    "C-Programming & DS",
    "Computer Networks",
    "Operating System",
    "DataBase Management",
    "Algorithms",
    "Theory Of Computation",
    "Digital Logic",
    "Computer Organisation",
  ],
};

const CsSubjects = () => <CourseBody data={data} />;

export default CsSubjects;
