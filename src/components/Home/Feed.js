import React from "react";
import Posts from "./Posts";
import SharePost from "./SharePost";
import { posts } from "../../DummyData";

const Feed = () => {
  return (
    <div
      // style={{
      //   // height: "45rem",
      //   overflowY: "scroll",
      // }}
      className="col-span-2  w-full xl:px-10 md:px-1  hover:overflow-y-scroll h-screen"
    >
      <SharePost />
      {posts.map((post) => (
        <div key={post.id}>
          <Posts post={post} />
        </div>
      ))}
    </div>
  );
};

export default Feed;
