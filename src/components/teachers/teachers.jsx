import { useEffect } from "react";
import { db } from "../../firebase/config"
import { useState } from "react";
import TeacherCard from "./teacherCard";
import { FullScreenLoader } from "../loader/Loader";


const sampleDataObj = [
    {
        "linkedin": "",
        "imageLink": "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
        "individualFee": "25000",
        "bio": "Trained teacher, and expert at coding, bringing my knowledge to the students and help them in getting their first job or transition to a new job.",
        "position": "Data analyst at Tesla",
        "groupFee": "15000",
        "email": "palakgoyal0304@gmail.com",
        "demoCount": "2",
        "experience": "10",
        "sessionCount": "3",
        "languages": "English",
        "courseName": "SQL",
        "approved": true,
        "ytLink": "",
        "instagram": "",
        "preRequisities": "No pre-requisities",
        "twitter": "",
        "name": "Mehul Mohan",
        "uid": "2guBYADd1DOvY2w9oilXc7BWLMI2",
        "phone": "22222 22222"
    },
    {
        "preRequisities": "Beginner in Python Programming",
        "groupFee": "10000",
        "email": "palakgoyal0304@gmail.com",
        "name": "Palakgoyal",
        "position": "Frontend Developer at Infosys",
        "bio": "Trained teacher, and expert at coding, bringing my knowledge to the students and help them in getting their first job or transition to a new job.",
        "linkedin": "",
        "approved": true,
        "individualFee": "16000",
        "experience": "3",
        "sessionCount": "2",
        "languages": "Hindi English",
        "uid": "1guBYADd1DOvY2w9oilXc7BWLMI2",
        "phone": "23432 23433",
        "imageLink": "https://avatars.githubusercontent.com/u/116902573?v=4",
        "courseName": "Python Programming",
        "twitter": "",
        "demoCount": "1",
        "ytLink": "",
        "instagram": ""
    }
]

const TeachersComponent = () => {
    // init state with empty array and true
    const [teachers, setTeachers] = useState(sampleDataObj);
    const [fetchingTeachers, setFetchingTeachers] = useState(false);

    // uncomment this and use real data

    // useEffect(() => {
    //    const teacherssss = []
    //     const unsubscribe = db
    //     .collection("teachers")
    //     .where("approved", "==", true)
    //     .onSnapshot(snapshot => {
    //         setFetchingTeachers(false);
    //         snapshot.docs.map(doc => teacherssss.push(doc.data()))
    //         setTeachers(teacherssss);
    //     })

    //     return unsubscribe;
    // }, [])

    return (
        <div className="flex flex-col gap-5 mb-40">
            {teachers.map((teacher, idx) => <TeacherCard teacher={teacher} key={idx} />)}
            {fetchingTeachers && <FullScreenLoader />}
        </div>
    )
}


export default TeachersComponent;