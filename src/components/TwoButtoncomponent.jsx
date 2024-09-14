import React from 'react';
import { useNavigate } from 'react-router-dom';
const TwoButtonPage = () => {
    const navigate = useNavigate();
  return (
    <div className="flex h-screen w-1/2">
      <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-2xl font-bold transition-colors duration-300" onClick={() => navigate('/alumini')}>
        ALUMNI
      </button>
      <button className="flex-1 bg-green-500 hover:bg-green-600 text-white text-2xl font-bold transition-colors duration-300" onClick={() => navigate('/student')}>
        STUDENT
      </button>
    </div>
  );
};

export default TwoButtonPage;
