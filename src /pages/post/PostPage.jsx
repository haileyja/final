import React from "react";
import Header from "../../components/common/Header/Header";
import PostDetail from "../../components/Post/PostDetail";
import Comment from "../../components/Post/comment/Comment";
import CommentWrite from "../../components/Post/comment/CommentWrite";
import * as S from "./PostPage.styled";

export default function PostPage() {
  return (
    <S.PostLayout>
      <Header />
      <PostDetail />
      <Comment />
      <CommentWrite />
    </S.PostLayout>
  );
}
