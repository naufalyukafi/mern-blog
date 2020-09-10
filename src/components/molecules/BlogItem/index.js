import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogItem.scss";
const BlogItem = () => {
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date post</p>
        <p classNAme="body">
          Lorem ipsum dolor simate sdawe hanya weusd, Lorem ipsum dolor simate
          sdawe hanya weusd{" "}
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
