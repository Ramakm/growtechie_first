import { useEffect, useState } from "react";
import CourseHeader from "../components/course/courseHeader";
import {
    ProfileSection,
    BookTrialSection,
} from "../components/teacherProfile";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { FullScreenLoader } from "../components/loader/Loader";

const TeacherProfile = () => {
    // Set init data to be an empty object and fetching teacher to true
    // check what will happen if the teacher didn't exist
    const [teacher, setTeacher] = useState(sampleTeacher);
    const [fetchingTeacher, setFetchingTeacher] = useState(false);
    const params = useParams();
    let teacherId = params.id;

    useEffect(() => {
        // const unsubscribe = db
        //     .collection("teachers")
        //     .where("uid", "==", teacherId)
        //     .limit(1)
        //     .onSnapshot(snapshot => {
        //         setFetchingTeacher(false);
        //         setTeacher(snapshot.docs[0].data())
        //     })

        // return unsubscribe;
    }, [])

    return (
        <div className="text-white">
            <CourseHeader />
            <div className="mt-24 max-w-[1200px] flex gap-9 justify-between mx-auto">
                <ProfileSection teacher={teacher} />
                <BookTrialSection teacher={teacher} />
            </div>
            {fetchingTeacher && <FullScreenLoader />}
        </div>
    )
}

export default TeacherProfile


const sampleTeacher = {
    "instagram": "",
    "groupFee": "10000",
    "ytLink": "",
    "preRequisities": "Beginner in Python Programming",
    "name": "Palak Goyal",
    "imageLink": "https://avatars.githubusercontent.com/u/116902573?v=4",
    "uid": "1guBYADd1DOvY2w9oilXc7BWLMI2",
    "bio": "Trained teacher, and expert at coding, bringing my knowledge to the students and help them in getting their first job or transition to a new job.",
    "linkedin": "",
    "phone": "23432 23433",
    "courseName": "Python Programming",
    "email": "palakgoyal0304@gmail.com",
    "experience": "3",
    "sessionCount": "2",
    "languages": "Hindi English",
    "individualFee": "16000",
    "approved": true,
    "twitter": "",
    "demoCount": "1",
    "position": "Frontend Developer at Infosys"
}