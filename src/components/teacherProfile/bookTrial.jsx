import Wrapper from "./wrapper";
import BookTrialForm from "../teachers/bookTrialForm";

const BookTrial = ({teacher}) => {
  return (
    <Wrapper className="text-black !bg-slate-100 my-10">
      <h2 className="text-2xl">🆓 Book a free trial session now! 🆓</h2>
      <BookTrialForm teacher={teacher} />
    </Wrapper>
  );
};

export default BookTrial;