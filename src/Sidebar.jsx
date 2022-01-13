import React from 'react';
import { Link } from 'react-router-dom';
// TODO : React Router DOM의 Link 컴포넌트를 import 합니다.

const Sidebar = ({ onHashClick }) => {
  const handleHashClick = () => {
    onHashClick("")
  }
  return (
    <section className="sidebar">
      <Link to="/" onClick={handleHashClick}><i className="far fa-comment-dots"></i></Link>
      <Link to="/about"><i className="far fa-question-circle"></i></Link>
      <Link to="/mypage"><i className="far fa-user"></i></Link>
    </section>
  );
};

export default Sidebar;
