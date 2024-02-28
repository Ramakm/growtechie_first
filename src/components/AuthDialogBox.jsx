import { useNavigate } from "react-router";
import { login } from "../utils/auth"

const AuthDialogBox = ({ setOpenDialogBox }) => {
    const navigate = useNavigate();

    function handleJoin(e) {
        e.stopPropagation();
        login();
        setOpenDialogBox(false);
    }

    return (
        <div className="fixed select-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--contrast-bg-color)] py-5 px-10 rounded-lg">
            <p className="text-lg font-semibold mb-6 text-[var(--bg-color)]">
                We're glad to have you here 😊
            </p>
            <div className="flex flex-col justify-center items-center gap-3">
                <JoinBtn
                    onClick={handleJoin}
                    text="Join as STUDENT"
                />
                <span className="text-[var(--bg-color)]">or</span>
                <JoinBtn
                    onClick={() => { navigate("/join-as-teacher") }}
                    text="Join as TEACHER"
                />
            </div>
            <p className="mt-7 text-sm text-[var(--bg-color)]">
                Already have an account? {" "}
                <button className="text-blue-400 underline hover:no-underline" onClick={handleJoin}>
                    SignIn
                </button>
            </p>
            <button
                className="absolute -top-2 -right-2 bg-blue-500 text-white p-3 py-1 aspect-square rounded-full cursor-pointer"
                onClick={() => setOpenDialogBox(false)}
            >
                X
            </button>
        </div>
    )
}

export default AuthDialogBox;


const JoinBtn = ({ onClick, text }) => (
    <button
        onClick={onClick}
        className="block bg-blue-500 rounded-md text-white p-2 w-full hover:scale-105 transition-all ease-in-out"
    >
        {text}
    </button>
)