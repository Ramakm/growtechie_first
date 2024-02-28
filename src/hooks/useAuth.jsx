import { useEffect, useState } from "react";
import { auth } from "../firebase/config";

const useAuth = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => setUser(authUser));
        return () => unsubscribe()
    }, []);

    return [user];
}

export default useAuth;