import React from "react";
import styled from "styled-components";
import router from "next/router";
import { useSelector } from "react-redux";
import Tag from "../Tag";

const EventPost = (props) => {
  const isloaded = useSelector((state) => state.event.loaded);
  return (
    <CardBox
      onClick={() => {
        router.push(`event/detail/${props._id}`);
      }}
    >
      <LeftBox src={props.postImg} />
      <RightBox>
        <PostTitle>{props.postTitle}</PostTitle>
        {props.postTag.map((tag, idx) => (
          <Tag key={idx} value={"#" + tag}></Tag>
        ))}
        <Like>
          <Heart src="/fullheart.png" />
          <LikeCnt>{isloaded && <>{props.likeCnt}</>}</LikeCnt>
        </Like>
      </RightBox>
    </CardBox>
  );
};

const PostTitle = styled.div`
  font-size: 16px;
`;

const CardBox = styled.div`
  border: 1px solid #e5e5e5;
  margin: 15px auto;
  display: flex;
  width: 100%;
  height: 100px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #e5e5e5;
  box-sizing: border-box;
`;

// 기본 사진 or 사진 받아오기
const LeftBox = styled.div`
  width: 30%;
  height: 100px;
  border-radius: 10px 0 0 10px;
  /* background-color: green; */
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
`;

// 제목, 태그, 좋아요 받아오기
const RightBox = styled.div`
  padding: 10px;
  box-sizing: border-box;
  width: 70%;
  height: 100px;
  border-radius: 0 10px 10px 0;
`;

const Like = styled.div`
  display: flex;
`;

const Heart = styled.img`
  display: block;
  text-align: right;
  width: 15px;
  height: 13px;
  margin-top: 10px;
  margin-left: 190px;
`;

const LikeCnt = styled.span`
  margin-top: 9px;
  margin-left: 7px;
  font-size: 10px;
  color: red;
`;

export default EventPost;
