import Wrapper from "./wrapper";
import BookTrialForm from "../teachers/bookTrialForm";

const BookTrialSection = ({ teacher }) => {

  return (
    <div className="w-[35%]">
      <Wrapper className="text-black !bg-slate-100">
        <h3 className="capitalize text-lg border-b-[1px] pb-3">
          <span className="text-gradient font-bold text-xl">
            Book a Free 1:1 Trial:{" "}
          </span>
          To Plan Your Learning Journey with {teacher.name}
        </h3>

        <BookTrialForm teacher={teacher}/>
      </Wrapper>
    </div>
  );
};

export default BookTrialSection;
