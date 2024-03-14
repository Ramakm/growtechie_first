import CourseBody from "../../components/course/CourseBody";

const data = {
  title: "Data analyst",
  subTitle: "Complete Data Analyst Bootcamp",
  imageUrl:
    "https://images.yourstory.com/cs/2/96eabe90392211eb93f18319e8c07a74/DATAANALYTICS-1686234812978.png",
  detail:
    "The course provides the complete preparation you need to become a data analyst",
  requirements: [
    "No prior experience is required. We will start from the very basics",
  ],
  description:
    "Our goal is to provide you with complete preparation. And this course will turn you into a job-ready data analyst.",
  isDetailedSyllabus: true,
  syllabus: [
    {
      title: "Module 1: Business Analytics with Excel",
      topics: [
        "Introduction to Business Analytics",
        "Conditional Formatting and Important Functions",
        "Analyzing Data with Pivot Tables",
        "Dashboarding",
        "Business Analytics with Excel",
        "Data Analysis Using Statistics",
        "Power BI",
      ],
    },
    {
      title: "Module 2: SQL",
      topics: [
        "Fundamental SQL Statements",
        "Restore and Back-up",
        "Selection Commands: Filtering",
        "Selection Commands: Ordering Alias",
        "Aggregate Commands Group By Commands",
        "Conditional Statement",
        "Joins",
        "Subqueries",
        "Views and Index",
        "String Functions",
        "Mathematical Functions",
        "Date and Time Functions",
        "Pattern (String) Matching",
        "User Access Control Functions",
      ],
    },
    {
      title: "Module 3: Programming Foundation and Data Analytics with Python",
      topics: [
        "Introduction to Programming",
        "Programming Environment Setup",
        "OOPs Concepts",
        "Programming Fundamentals of Python",
        "File Handling, Exception Handling, and Package Handling",
        "Course Introduction",
        "Data Analytics Overview",
        "Statistical Computing",
        "Mathematical Computing Using NumPy",
        "Data Manipulation with Pandas",
        "Data Visualization with Python",
        "Intro to Model Building",
      ],
    },
    {
      title: "Module 4: Tableau Training",
      topics: [
        "Getting Started with Tableau",
        "Core Tableau in Topics",
        "Creating Charts in Tableau",
        "Working with Metadata",
        "Filters in Tableau",
        "Applying Analytics to the Worksheet",
        "Dashboards in Tableau",
        "Modifications to Data Connections",
        "Introduction to Level of Details in Tableau (LODS)",
      ],
    },
    {
      title: "Module 5: Data Visualization Using Power BI",
      topics: [],
    },
    {
      title: "Module 6: Data Analytics Capstone",
      topics: [],
    },
  ],
};

const DataAnalytics = () => <CourseBody data={data} />;

export default DataAnalytics;
