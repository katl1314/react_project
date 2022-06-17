import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../App.css";
function SubMenu() {
    return (
        <Ul>
            <Li className="submenu_li">
                <NavLink style={{ "text-decoration": "none" }} to="/">
                    Home
                </NavLink>
            </Li>
            <Li className="submenu_li">
                <NavLink style={{ "text-decoration": "none" }} to="/about">
                    About
                </NavLink>
            </Li>
            <Li className="submenu_li">
                <NavLink style={{ "text-decoration": "none" }} to="/note">
                    Note
                </NavLink>
            </Li>
            <Li className="submenu_li">
                <NavLink style={{ "text-decoration": "none" }} to="/hobby">
                    Hobby
                </NavLink>
            </Li>
            <Li className="submenu_li">
                <NavLink style={{ "text-decoration": "none" }} to="/contact">
                    Contact
                </NavLink>
            </Li>
        </Ul>
    );
}

const Ul = styled.ul`
    position: absolute;
    top: 0px;
    right: 0px;
`;

const Li = styled.li`
    display: inline-block;
    width: 50px;
    line-height: 70px;
    margin: auto 15px 0px 15px;
`;

export default SubMenu;
