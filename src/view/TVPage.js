import React from 'react';
import TopMovie from '../components/TopMovie/TopMovie';
import { getTVPopular } from '../services/api';

const TVPage = () => {
  return (
    <div className="margin-body">
      <TopMovie api={getTVPopular}>Найкращі серіали</TopMovie>
    </div>
  );
};

export default TVPage;
