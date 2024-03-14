import CourseHeader from "./courseHeader";
import CourseHero from "./coursehero";
import CourseheroMobile from "./courseheromobile";
import CourseDetail from "./coursedetail";
import CourseBenefits from "./coursebenefits";
import CourseRequriement from "./courserequirements";
import CourseDescription from "./coursedescription";
import CourseFooter from "./coursefooter";
import CourseDetailedSyllabus from "./CourseDetailedSyllabus";
import CourseOutlineSyllabus from "./CourseOutlineSyllabus";
import ScrollTop from "../../hooks/scrollTop";

const CourseBody = ({ data }) => {
  const {
    title,
    subTitle,
    imageUrl,
    detail,
    syllabus,
    isDetailedSyllabus,
    requirements,
    description,
  } = data;

  ScrollTop();

  return (
    <div className="min-h-screen font-sans">
      <CourseHeader />

      <CourseHero
        title={title}
        subtitle={subTitle}
        imagelink={imageUrl}
      />

      <CourseheroMobile imageurl={imageUrl} courseName={title} />

      {detail && <CourseDetail details={detail} />}

      <CourseBenefits />

      {data.syllabus &&
        (isDetailedSyllabus ? (
          <CourseDetailedSyllabus syllabus={syllabus} />
        ) : (
          <CourseOutlineSyllabus syllabus={syllabus} />
        ))}

      {requirements && <CourseRequriement requirement={requirements} />}

      {description && <CourseDescription description={description} />}

      <CourseFooter />
    </div>
  );
};

export default CourseBody;
