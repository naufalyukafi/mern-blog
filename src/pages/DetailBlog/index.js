import React from "react";
import { RegisterBg } from "../../assets";
import "./detailBlog.scss";
const DetailBlog = () => {
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto
        tempora corporis, laboriosam sed velit sapiente! Quibusdam illo quae
        molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci iusto tempora corporis, laboriosam sed velit sapiente!
        Quibusdam illo quae molestias. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci iusto
        tempora corporis, laboriosam sed velit sapiente! Quibusdam illo quae
        molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Adipisci iusto tempora corporis, laboriosam sed velit sapiente!
        Quibusdam illo quae molestias.
      </p>
    </div>
  );
};

export default DetailBlog;
