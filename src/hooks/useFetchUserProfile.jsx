import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useFetchUserProfile = (uid) => {
  const [userProfile, setUserProfile] = useState(null);
  const [isFetchingProfile, setIsFetchingProfile] = useState(true);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .where("uid", "==", uid)
      .limit(1)
      .onSnapshot((snapshot) => {
        setIsFetchingProfile(false);
        setUserProfile(snapshot.docs[0]?.data());
      });

    return unsubscribe;
  }, []);

  return [userProfile, isFetchingProfile];
};

export default useFetchUserProfile;
