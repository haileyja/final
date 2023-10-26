import styled from "styled-components";

export const HeaderLayout = styled.div`
  width: 100vw;
  height: 48px;

  display: flex;
  flex-shrink: 0;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;

  background-color: #fff;

  font-family: Spoqa Han Sans Neo;
  border-bottom: 0.5px solid #dbdbdb;

  padding-left: 16px;
  padding-right: 12px;
`;

export const HeaderTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
export const HeaderContent = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const SearchImg = styled.img`
  margin-left: auto;
  cursor: pointer;
`;

export const ArrowLeftImg = styled.img`
  margin-right: 8px;
  cursor: pointer;
`;
export const KebabBtnImg = styled.img`
  margin-left: auto;
  cursor: pointer;
`;

export const SaveBtn = styled.button`
  background-color: #ffc7a7;
  border-radius: 32px;

  margin-left: auto;
  padding: 7px 32px;

  color: #fff;

  font-size: 14px;
  font-weight: 500;
  text-align: center;

  border: none;
`;
