import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiHome, BiSearch } from 'react-icons/bi';
import { MdLocalMovies } from 'react-icons/md';
import { TbDeviceTv } from 'react-icons/tb';
import s from './Navigation.module.css';

const Navigation = () => {
  let activeStyle = {
    transition: 'all 1s',
    color: '#fff',
    border: '2px solid #fff',
  };

  return (
    <div>
            <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={s.navLink}
        to="/"
      >
        <BiHome className={s.icon} />
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={`${s.navLink} d-inline-block`}
        to="/movies"
      >
        <MdLocalMovies className={s.icon} />
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={s.navLink}
        to="/series"
      >
        <TbDeviceTv className={s.icon} />
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={s.navLink}
        to="/search"
      >
        <BiSearch className={s.icon} />
      </NavLink>

    </div>
  );
};

export default Navigation;
