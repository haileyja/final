import React from "react";
import * as S from "./WritePage.styled";
import Header from "../../components/common/Header/Header";
import Write from "../../components/write/Write";

export default function WritePage() {
  return (
    <S.WritePageLayout>
      <Header />
      <Write />
    </S.WritePageLayout>
  );
}
