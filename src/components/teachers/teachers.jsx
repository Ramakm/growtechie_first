import { useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config"
import { useState } from "react";

const TeachersComponent = () => {
    const [teachers, setTeachers] = useState([]);
    const [fetchingTeachers, setFetchingTeachers] = useState(true);

    useEffect(() => {
        const unsubscribe = db
        .collection("teachers")
        .where("approved", "==", true)
        .onSnapshot(snapshot => {
            setFetchingTeachers(false);
            setTeachers([...snapshot.docs])
        })

        return unsubscribe;
        // const q = query(collection(db, "teachers"), where("approved", "==", true));

        // const querySnapshot = await getDocs(q);
        // querySnapshot.forEach((doc) => {
        //     // doc.data() is never undefined for query doc snapshots
        //     console.log(doc.id, " => ", doc.data());
        //     setTeachers(prev => [...prev, doc.data()]);
        // });

        // setFetchingTeachers(false);
    }, [])

    console.log(teachers, "teachers");

    return (
        <div></div>
    )
}


export default TeachersComponent;