import { useEffect } from "react";
import { db } from "../../firebase/config"
import { useState } from "react";
import TeacherCard from "./teacherCard";


const sampleDataObj = [
    {
        "sessionCount": "3",
        "approved": true,
        "ytLink": "",
        "email": "palakgoyal0304@gmail.com",
        "position": "Data analyst at Tesla",
        "groupFee": "15000",
        "demoCount": "2",
        "imageLink": "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
        "phone": "22222 22222",
        "preRequisities": "No pre-requisities",
        "instagram": "",
        "individualFee": "25000",
        "uid": "1guBYADd1DOvY2w9oilXc7BWLMI2",
        "languages": "English",
        "experience": "10",
        "twitter": "",
        "courseName": "SQL",
        "name": "Mehul Mohan",
        "linkedin": ""
    }
]

// Fix course-name
// Where is bio?

const TeachersComponent = () => {
    const [teachers, setTeachers] = useState([]);
    const [fetchingTeachers, setFetchingTeachers] = useState(true);

    // useEffect(() => {
    //     const unsubscribe = db
    //     .collection("teachers")
    //     .where("approved", "==", true)
    //     .onSnapshot(snapshot => {
    //         setFetchingTeachers(false);
    //         snapshot.docs.map(doc => {
    //             setTeachers(prev => [...prev, doc.data()]);
    //         })
    //     })

    //     return unsubscribe;
    // }, [])

    return (
        <div>
            {sampleDataObj.map(teacher => <TeacherCard teacher={teacher} />)}
        </div>
    )
}


export default TeachersComponent;