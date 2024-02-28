import Wrapper from "./wrapper";
import BookTrialForm from "../teachers/bookTrialForm";
import useAuth from "../../hooks/useAuth";
import AuthDialogBox from "../AuthDialogBox";

const BookTrialSection = ({ teacher }) => {
    const [user] = useAuth();

    return (
        <div className="w-[35%]">
            <Wrapper className="text-black !bg-slate-100">
                <h3 className="capitalize text-lg border-b-[1px] pb-3">
                    <span className="text-gradient font-bold text-xl">
                        Book a Free 1:1 Trial:{" "}
                    </span>
                    To Plan Your Learning Journey with {teacher.name}
                </h3>

                {user ? (
                    <BookTrialForm
                        teacher={teacher}
                        user={user}
                    />
                ) : (
                    <>
                        <AuthDialogBox setOpenDialogBox={() => {}}/>
                        <p className="mt-2">Please login to continue...</p>
                    </>
                )}
            </Wrapper>
        </div>
    )
}

export default BookTrialSection;