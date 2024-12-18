import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../../components/Header/Nav";
import ReadyToConnect from "../../../components/ready_to_connect/ReadyToConnect";
import Footer from "../../../components/Footer/Footer";
import postImg from "../../../assets/images/post-img.png";
import arrowRight from "../../../assets/images/icons/arrow-right.png";

import "./news.css";

const News = () => {
  const post = {
    title:
      "Irrigation Systems in Africa: Driving Agricultural Growth and Food Security",
    body: "Irrigation is rapidly emerging as a cornerstone for agricultural transformation across Africa, as the continent grapples with erratic rainfall and the pressures of food security. With over 60% of Africa's population relying on agriculture for livelihood, innovative irrigation systems are key to unlocking the potential of the sector.\nCountries like Egypt, Kenya, and Ethiopia are spearheading large-scale irrigation projects, leveraging river basins and advanced drip irrigation technologies to boost crop yields. However, over 80% of farmland across the continent still relies on rain-fed agriculture, exposing millions of farmers to climate shocks.\nOrganizations and governments are investing in affordable, small-scale irrigation technologies, particularly for smallholder farmers. Solar-powered pumps, community-managed water systems, and smart irrigation models are providing sustainable solutions tailored to Africa's unique challenges.\nExperts believe expanding irrigation coverage, alongside supportive policies and financing, can revolutionize agriculture, enhance food production, and create resilience against climate change. As irrigation technologies become more accessible, Africa edges closer to achieving its agricultural potential and ensuring food security for its growing population.",
    date: "December 26, 2024",
  };

  const paragraphs = post.body
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "");

  return (
    <div className="news_container">
      <Nav />
      <section className="news_section_post_content">
        <div className="post_img">
          <img src={postImg} alt="" />
          <h3 className="img_label">Agriculture in Africa</h3>
        </div>
        <div className="post_title">
          <h1>{post.title}</h1>
        </div>
        <div className="post_content">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <h3>{post.date}</h3>
        </div>
      </section>

      <section className="related_content">
        <h1>Related Contents</h1>
        <div className="related_content_items">
          <div className="related_item">
            <div className="item_img">
              <img src={postImg} alt="" />
              <h3 className="post_label">Agriculture in Africa</h3>
            </div>
            <div className="item_content">
              <p>{post.date}</p>
              <h2>{post.title}</h2>
              {paragraphs.slice(0, 2).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <Link to="/">
                Read more <img className="arrow" src={arrowRight} alt="" />
              </Link>
            </div>
          </div>
          <div className="related_item">
            <div className="item_img">
              <img src={postImg} alt="" />
              <h3 className="post_label">Agriculture in Africa</h3>
            </div>
            <div className="item_content">
              <p>{post.date}</p>
              <h2>{post.title}</h2>
              {paragraphs.slice(0, 2).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <Link to="/">
                Read more <img className="arrow" src={arrowRight} alt="" />
              </Link>
            </div>
          </div>
          <div className="related_item">
            <div className="item_img">
              <img src={postImg} alt="" />
              <h3 className="post_label">Agriculture in Africa</h3>
            </div>
            <div className="item_content">
              <p>{post.date}</p>
              <h2>{post.title}</h2>
              {paragraphs.slice(0, 2).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <Link to="/">
                Read more <img className="arrow" src={arrowRight} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ready_section">
        <ReadyToConnect />
      </section>
      <section className="footer_section">
        <Footer />
      </section>
    </div>
  );
};

export default News;
