import { useNavigate } from "react-router";
import { auth } from "../../firebase/config"
import { useState, useEffect } from "react";
import AuthDialogBox from "../AuthDialogBox";

function TeacherCard() {
    const navigate = useNavigate();
    const [user, setUser] = useState(auth.currentUser);
    const [openDialogBox, setOpenDialogBox] = useState(false);
    const [openBookTrialWindow, setOpenBookTrialWindow] = useState(false);

    // create page for that teacher profile -------------------------------

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => setUser(authUser));
        return () => unsubscribe()
    }, []);

    function navigateToProfile() {
        navigate("/teachers/palakgoyal")
    }

    function handleCloseBookTrialWindow() {
        setOpenBookTrialWindow(false);
    }

    function handleBookTrial(e) {
        e.stopPropagation();
        if (user) {
            setOpenBookTrialWindow(true);
        } else {
            setOpenDialogBox(true);
        }
    }

    return (
        <div
            className="flex border-2 border-slate-500 p-5 gap-5 rounded-lg hover:shadow-lg"
        >
            <div className="w-[60%] flex flex-col gap-5">
                <div className="flex gap-5">
                    <div className="shrink-0 w-48 h-48">
                        <img
                            src="https://avatars.githubusercontent.com/u/116902573?v=4"
                            alt="Palak Goyal"
                            className="w-full h-full rounded-md"
                        />
                    </div>
                    <div className="flex flex-col">
                        <h3
                            className="font-bold capitalize text-2xl hover:underline cursor-pointer mb-3"
                            onClick={navigateToProfile}
                        >
                            Palak Goyal
                        </h3>
                        <p className="mb-1 text-[var(--light-gray)]">
                            Software Engineer at Tesla
                        </p>
                        <p className="text-sm mb-8 text-[var(--dark-gray)]">
                            5 years of teaching exprience
                        </p>
                        <p className="line-clamp-2 w-full text-xs">
                            Lorem ipsum, dolor sit amet tur adipisicing elit. Reprehenderit quidem culpa earum inventore quas, voluptatibus delectus. Architecto minus deserunt fugit eligendi officia excepturi laboriosam vel voluptate rerum ex ad maxime autem consectetur recusandae enim magnam ipsa, dolorem ab ut placeat.
                        </p>
                    </div>
                </div>
                <p className="text-[var(--light-gray)]">
                    <span className="font-semibold">Course: </span>
                    Python Programming and projects
                </p>
                <div className="flex gap-5 justify-between">
                    <p className="line-clamp-1 w-1/2 text-sm">
                        💼 <span className="font-semibold text-base">For: {" "}</span>
                        Beginner frontend dev Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, iste, dolorum enim laboriosam magni molestiae voluptatibus veniam voluptatum eum excepturi quae, odit libero error dolores corporis sint! Quo, mollitia illo?
                    </p>
                    <p className="">
                        🎯 2 demo classes
                    </p>
                </div>
            </div>
            <div className="w-[40%] flex flex-col pl-5 border-l-[1px] border-[var(--light-gray)] border-solid">
                <div className="flex flex-col gap-2 text-sm capitalize mb-7">
                    <p>
                        📞 2x Sessions Per Week
                    </p>
                    <p>
                        ☑️ Task Assignment and resources
                    </p>
                    <p>
                        ♾️ Unlimited chat during course
                    </p>
                </div>

                <p className="mb-1">
                    <span className="text-2xl">
                        ₹15000 {" "}
                    </span>
                    individual/month
                </p>
                <p>
                    <span className="text-2xl">
                        ₹10000 {" "}
                    </span>
                    group/month
                </p>

                <button
                    className="border-2 my-3 box-border border-[var(--light-gray)] py-2 hover:bg-white hover:text-black hover:font-semibold transition-all ease-in-out rounded-md"
                    onClick={navigateToProfile}
                >
                    View Profile
                </button>
                <button
                    className="bg-blue-600 py-2 rounded-md hover:scale-105 transition-all ease-in-out"
                    onClick={handleBookTrial}
                >
                    Book Trial
                </button>
            </div>
            {openDialogBox && <AuthDialogBox setOpenDialogBox={setOpenDialogBox} />}
            <BookTrialWindow user={user} teacher={""} open={openBookTrialWindow} handleClose={handleCloseBookTrialWindow} />
        </div>
    )
}

export default TeacherCard;