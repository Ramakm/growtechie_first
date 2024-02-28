import { useEffect } from "react";
import { db } from "../../firebase/config"
import { useState } from "react";
import TeacherCard from "./teacherCard";
import { FullScreenLoader } from "../loader/Loader";

const TeachersComponent = () => {
    const [teachers, setTeachers] = useState([]);
    const [fetchingTeachers, setFetchingTeachers] = useState(true);

    useEffect(() => {
       const teacherssss = []
        const unsubscribe = db
        .collection("teachers")
        .where("approved", "==", true)
        .onSnapshot(snapshot => {
            setFetchingTeachers(false);
            snapshot.docs.map(doc => teacherssss.push(doc.data()))
            setTeachers(teacherssss);
        })

        return unsubscribe;
    }, [])

    return (
        <div className="flex flex-col gap-5 mb-40">
            {teachers.map((teacher, idx) => <TeacherCard teacher={teacher} key={idx} />)}
            {fetchingTeachers && <FullScreenLoader />}
        </div>
    )
}


export default TeachersComponent;