import Wrapper from "./wrapper";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const ProfileSection = ({ teacher }) => {
  return (
    <div className="flex flex-col gap-8">
      <Wrapper className="!p-0">
        <div className="linear-purple-green-gradient rounded-t-lg relative h-52 w-full mb-[88px]">
          <img
            src={teacher.imageLink}
            alt={teacher.name}
            className="w-48 h-48 top-1/2 left-6 absolute rounded-3xl border-4 border-white"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold">{teacher.name}</h2>
          <p className="font-light">{teacher.position}</p>
          <p className="mt-3 font-light">
            I will teach you:{" "}
            <span className="text-lg font-normal">{teacher.courseName}</span>
          </p>
          <div className="flex gap-4 mt-2">
            {teacher.instagram.length > 1 && (
              <a href={teacher.instagram}>
                <InstagramIcon />
              </a>
            )}
            {teacher.ytLink.length > 1 && (
              <a href={teacher.ytLink}>
                <YouTubeIcon />
              </a>
            )}
            {teacher.twitter.length > 1 && (
              <a href={teacher.twitter}>
                <XIcon />
              </a>
            )}
            {teacher.linkedin.length > 1 && (
              <a href={teacher.linkedin}>
                <LinkedInIcon />
              </a>
            )}
          </div>
        </div>
      </Wrapper>
      <Wrapper className="flex flex-col gap-4">
        <h3 className="uppercase text-2xl font-bold mb-2">PERKS</h3>
        <p className="font-light">
          <span className="font-normal text-2xl">🎓{teacher.experience}</span>{" "}
          years of Experience
        </p>
        <p className="font-light">
          <span className="font-normal text-xl">🎯 {teacher.demoCount}</span>{" "}
          FREE Demo Class
        </p>
        <p className="font-light capitalize">
          <span className="font-normal text-xl">
            💼 {teacher.sessionCount}x
          </span>{" "}
          sessions per week
        </p>
        <p className="font-light capitalize">
          <span className="font-normal text-xl">💬 Languages:</span>{" "}
          {teacher.languages}
        </p>
      </Wrapper>
      <Wrapper>
        <h3 className="uppercase text-2xl font-bold mb-2">About</h3>
        <p className="font-light text-[var(--contrast-bg-color)]">
          {teacher.bio}
        </p>
      </Wrapper>
      <Wrapper>
        <h3 className="uppercase text-2xl font-bold mb-2">PAY ME</h3>
        <div className="mb-2">
          <p className="font-light">
            <span className="font-normal text-xl">
              👤 ₹{teacher.individualFee}
            </span>{" "}
            INDIVIDUAL FEE
          </p>
        </div>
        <div>
          <p className="font-light">
            <span className="font-normal text-xl">👥 ₹{teacher.groupFee}</span>{" "}
            GROUP FEE
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProfileSection;
