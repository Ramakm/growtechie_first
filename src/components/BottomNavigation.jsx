import { useState } from "react";
// import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SchoolIcon from "@mui/icons-material/School";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { useNavigate } from "react-router";

export default function BottomNav() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  function scrollToElement(target) {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(target)
      console.log(element, "element")
      element?.scrollIntoView({ behavior: "smooth" });
    }, 1000)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999999] upper-white-box-shadow">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ backgroundColor: "#2c2c2c" }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => scrollToElement("hero")}
          sx={{ color: "#d0d5d7" }}
        />
        <BottomNavigationAction
          label="Teachers"
          icon={<LocalLibraryIcon />}
          onClick={() => navigate("/teachers")}
          sx={{ color: "#d0d5d7" }}
        />
        <BottomNavigationAction
          label="Courses"
          icon={<SchoolIcon />}
          onClick={() => scrollToElement("courses")}
          sx={{ color: "#d0d5d7" }}
        />
        <BottomNavigationAction
          label="Gallery"
          icon={<CollectionsBookmarkIcon />}
          onClick={() => navigate("/gallery")}
          sx={{ color: "#d0d5d7" }}
        />
      </BottomNavigation>
    </div>
  );
}