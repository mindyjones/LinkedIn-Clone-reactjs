import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";

const HeaderOption = ({ Icon, title, avatar }) => {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption_icon' />}
      {avatar && <Avatar className='headerOption_avatar' src={avatar} />}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  );
};

export default HeaderOption;
