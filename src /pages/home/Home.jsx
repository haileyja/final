import React from 'react';
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import Default from '../../components/home/Temp';
import * as S from './home.styled.js';

export default function Home() {
  return (
    <S.HomeLayout>
      <Header />
      <Default />
      <Footer />
    </S.HomeLayout>
  );
}
