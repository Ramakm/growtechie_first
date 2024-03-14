import { useNavigate } from "react-router";
import { useState } from "react";
import BookTrialModal from "./bookTrialModal";
import Avatar from "@mui/material/Avatar";

function TeacherCard({ teacher }) {
  const navigate = useNavigate();
  const [openBookTrialModal, setOpenBookTrialModal] = useState(false);

  function navigateToProfile() {
    navigate(`/teachers/${teacher.uid}`);
  }

  function handleBookTrial(e) {
    e.stopPropagation();
    setOpenBookTrialModal(true);
  }

  return (
    <div className="radial-shiny-gray-gradient white-box-shadow flex hover:scale-[1.01] transition-all ease-in-out p-5 gap-5 rounded-lg">
      <div className="w-[60%] flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="shrink-0 w-48 h-48 overflow-hidden">
            <Avatar
              alt="Remy Sharp"
              src={teacher.imageLink}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "6px",
                objectPosition: "center",
                aspectRatio: "initial",
              }}
            />
          </div>
          <div className="flex flex-col">
            <h3
              className="font-bold capitalize text-2xl hover:underline cursor-pointer mb-3"
              onClick={navigateToProfile}
            >
              {teacher.name}
            </h3>
            <p className="mb-1 text-[var(--light-gray)]">{teacher.position}</p>
            <p className="text-sm mb-8 text-[var(--dark-gray)]">
              {teacher.experience} years of teaching exprience
            </p>
            <p className="line-clamp-2 w-full text-xs">{teacher.bio}</p>
          </div>
        </div>
        <p className="text-[var(--light-gray)]">
          <span className="font-semibold">Course: </span>
          {teacher.courseName}
        </p>
        <div className="flex gap-5 justify-between">
          <p className="line-clamp-1 w-1/2 text-sm">
            💼 <span className="font-semibold text-base">For: </span>
            {teacher.preRequisities}
          </p>
          <p className="">🎯 {teacher.demoCount} demo classes</p>
        </div>
      </div>
      <div className="w-[40%] flex flex-col pl-5 border-l-[1px] border-[var(--light-gray)] border-solid">
        <div className="flex flex-col gap-2 text-sm capitalize mb-7">
          <p>📞 {teacher.sessionCount}x Sessions Per Week</p>
          <p>☑️ Task Assignment and resources</p>
          <p>♾️ Unlimited chat during course</p>
        </div>

        <p className="mb-1">
          <span className="text-2xl">₹{teacher.individualFee} </span>
          individual/month
        </p>
        <p>
          <span className="text-2xl">₹{teacher.groupFee} </span>
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
      <BookTrialModal
        teacher={teacher}
        open={openBookTrialModal}
        handleClose={() => setOpenBookTrialModal(false)}
      />
    </div>
  );
}

export default TeacherCard;
