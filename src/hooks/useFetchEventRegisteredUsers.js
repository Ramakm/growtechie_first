import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

function useFetchEventRegisteredUsers() {
    const [regsiteredUsers, setRegisteredUsers] = useState([]);
  
    useEffect(() => {
      getRegisteredUsers();
    }, []);
  
    async function getRegisteredUsers() {
      const docRef = doc(db, "registrations", "weekly-session-all-joiners");
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        setRegisteredUsers(docSnap.data().joinersEmail);
      }
    }
  
    return regsiteredUsers;
  }
  
export default useFetchEventRegisteredUsers;