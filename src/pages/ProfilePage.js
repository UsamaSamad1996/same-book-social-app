import React from "react";
import Topbar from "../components/Topbar";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ProfileFeed from "../components/Profile/ProfileFeed";
import ProfileIntroBar from "../components/Profile/ProfileIntroBar";

////

const ProfilePage = () => {
  return (
    <div className="profilePage  bg-gray-100">
      {" "}
      <div className="topbar">
        <Topbar className="w-full" />
      </div>
      <div className="coverPicture flex justify-center items-center ">
        <img
          style={{
            width: "70.5rem",
            height: "31rem",
            // border: "1px solid #3bc6fc",
            borderRadius: "1rem",
            objectFit: "cover",
          }}
          src={require("../images/camel.avif")}
          alt="no poster"
        />
        <button className="p-3  bg-white text-black font-bold rounded-md ml-[-200px] mt-[400px]">
          <PermMediaIcon /> Edit Cover Photo
        </button>
      </div>
      <div className="1 flex justify-center ">
        <div className="2 flex  w-4/6  border-b-2 border-stone-300 md:flex-wrap md:justify-center lg:flex-wrap lg:justify-center bg-white ml-6 rounded-2xl">
          <div className="profileimageflex-auto">
            <img
              className=" w-64 h-64 rounded-full border-8 border-white object-cover mt-[-70px] ml-[50px] "
              src={require("../images/usama.jpg")}
              alt="no poster"
            />
          </div>
          <div className="title flex-auto flex flex-col justify-center xl:justify-start xl:pt-8 items-end md:items-center lg:items-center  ">
            <h1 className="text-black text-4xl font-bold  ">
              Usama Abdul Samad{" "}
            </h1>
            <p className="text-black text-xl font-semibold pt-2 ">
              172 friends
            </p>
          </div>
          <div className="buttons flex-auto  flex justify-evenly items-end  p-5 ">
            <button className="p-3  bg-blue-500 text-white font-bold rounded-md text-lg flex items-center">
              Add to Story <AddCircleOutlineOutlinedIcon className="pl-2" />
            </button>
            <button className="p-3  bg-blue-500 text-white font-bold rounded-md text-lg flex items-center">
              Edit Profile <PermMediaIcon className="pl-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="profileBody flex  justify-center">
        <div className="gridContainer grid grid-cols-3 grid-flow-col w-4/6 relative top-5  ml-7 rounded-2xl">
          <ProfileIntroBar />
          <ProfileFeed />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
