import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #4c4c4c;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 35px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background-image: linear-gradient(to right, white, grey);
    border-left: 4px solid #ffc40c;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 35px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #4c4c4c;
  font-size: 18px;

  &:hover {
    background-image: linear-gradient(to right, white, grey);
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
