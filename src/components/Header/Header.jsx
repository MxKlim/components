import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  let activeStyle = {
    textDecoration: "none",
    color: "#c5c5ff",
  };

  const links = [
    ["/", "Крема для лица"],
    ["creamsBody", "Крема для телa"],
    ["clearing", "Очищение"],
    ["scrabs", "Скрабы"],
    ["mask", "Маски"],
    ["help", "Спец. Уход"],
    ["child", "Для детей"],
    ["hair", "Для волос"],
    ["hands", "Для рук"],
    ["lips", "Для губ"],
    ["stap", "Для ног"],
    ["summer", "от солнце"],
    ["milo", "Мыло/бомбочки"],
  ];
  return (
    <nav className='header'>
      <ul className='list_nav'>
        {links.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={item[0]} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                {item[1]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
