import { useEffect, useState } from "react";
import { auth } from "../firebase/config";

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => setUser(authUser));
        return () => unsubscribe()
    }, []);

    // Todo: remove this array syntax and return only user(fix everywhere)
    return [user];
}

export default useAuth;