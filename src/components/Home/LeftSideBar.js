import React from "react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SportsVolleyballIcon from "@mui/icons-material/SportsVolleyball";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Link } from "react-router-dom";
import messengerImage from "../../images/messenger.png";
import profileImage from "../../images/usama.jpg";

////

const LeftSideBar = () => {
  return (
    <div
      style={{
        height: "45rem",
        overflowY: "scroll",
      }}
    >
      <div className="sidebarwrapper pt-2 ">
        <ul className="sideBarList  leading-10 pl-4 list-inside text-lg ">
          <Link to="/Profile">
            <li className="sideBarItem py-2 flex items-center">
              {" "}
              <img
                className="h-14 w-14 rounded-full object-cover border-2 border-sky-400"
                src={profileImage}
                alt="no poster"
              />
              <span className="pl-5 text-2xl font-semibold">Usama Samad</span>
            </li>
          </Link>
          <li className="sideBarItem py-1.5 flex items-center">
            <img
              className="h-12 w-12 rounded-full object-cover"
              src={messengerImage}
              alt="no poster"
            />
            <span className="pl-7 text-xl font-semibold">Messenger</span>
          </li>
          <li className="sideBarItem py-1.5 flex items-center">
            <RssFeedIcon style={{ fontSize: "3rem" }} />
            <span className="pl-7 text-xl font-semibold">Feed</span>
          </li>
          <li className="sideBarItem py-1.5 flex items-center">
            <ChatIcon style={{ fontSize: "3rem" }} />
            <span className="pl-7 text-xl font-semibold">Chats</span>
          </li>
          <li className="sideBarItem py-1.5 flex items-center">
            <OndemandVideoIcon style={{ fontSize: "3rem" }} />
            <span className="pl-7 text-xl font-semibold">Watch Videos</span>
          </li>
          <li className="sideBarItem py-1.5 flex items-center">
            <Diversity3Icon style={{ fontSize: "3rem" }} />
            <span className="pl-7 text-xl font-semibold">Friends</span>
          </li>
          <li className="sideBarItem py-1.5 flex items-center">
            <StarBorderPurple500Icon style={{ fontSize: "3rem" }} />
            <span className="pl-7 text-xl font-semibold">BookMarks</span>
          </li>
          <li className="sideBarItem py-1.5 flex items-center">
            <ContactSupportIcon style={{ fontSize: "3rem" }} />
            <span className="pl-7 text-xl font-semibold">Questions</span>
          </li>
          <li className="sideBarItem py-1.5 flex items-center">
            <WorkOutlineIcon style={{ fontSize: "3rem" }} />
            <span className="pl-7 text-xl font-semibold">Jobs</span>
          </li>
          <li className="sideBarItem py-1.5 flex items-center">
            <EmojiEventsIcon style={{ fontSize: "3rem" }} />
            <span className="pl-7 text-xl font-semibold">Events</span>
          </li>
          <li className="sideBarItem py-1.5 flex items-center">
            <SportsVolleyballIcon style={{ fontSize: "3rem" }} />
            <span className="pl-7 text-xl font-semibold">Play Games</span>
          </li>
          <li className="sideBarItem py-1.5 flex items-center">
            <LocalGroceryStoreOutlinedIcon style={{ fontSize: "3rem" }} />
            <span className="pl-7 text-xl font-semibold">Market</span>
          </li>
          <li className="sideBarItem py-1.5 flex items-center">
            <SportsVolleyballIcon style={{ fontSize: "3rem" }} />
            <span className="pl-7 text-xl font-semibold">Play Games</span>
          </li>
          <li className="sideBarItem py-1.5 flex items-center">
            <SportsVolleyballIcon style={{ fontSize: "3rem" }} />
            <span className="pl-7 text-xl font-semibold">Play Games</span>
          </li>
        </ul>
        <hr />
        <div className="button flex items-center justify-center my-3 ">
          <button className="py-1 px-5  bg-sky-400 text-white text-lg font-semibold rounded-md mb-3">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;