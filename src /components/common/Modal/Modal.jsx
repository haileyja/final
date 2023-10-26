import React from "react";
import * as S from "./Modal.styled";
import deco from "../../../assets/images/chat/modal-design.png";
import { useNavigate } from "react-router-dom";

const Modal = ({ isOpen, onClose, pathname }) => {
  const navigate = useNavigate();

  if (!isOpen) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderContent = () => {
    switch (pathname) {
      case "/write":
        return (
          <>
            <S.P>수정</S.P>
            <S.P>삭제</S.P>
          </>
        );
      case "/profile":
        return (
          <>
            <S.P>수정</S.P>
            <S.P>삭제</S.P>
          </>
        );
      case "/chat":
        return (
          <>
            <S.P
              onClick={() => {
                navigate("/home");
                onClose();
              }}
            >
              채팅방 나가기
            </S.P>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <S.Backdrop onClick={handleBackdropClick}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        {renderContent()}
        <S.Img src={deco} alt="Decoration" />
      </S.Modal>
    </S.Backdrop>
  );
};

export default Modal;
