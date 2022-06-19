import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../App.css";
function Gnb() {
    return (
        <Ul>
            <Li>
                <StyledNavLink to="/weather">Weather</StyledNavLink>
            </Li>
            <Li>
                <StyledNavLink to="/todo">Todo</StyledNavLink>
            </Li>
            <Li>
                <StyledNavLink to="/note">Note</StyledNavLink>
            </Li>
            <Li>
                <StyledNavLink to="/hobby">Hobby</StyledNavLink>
            </Li>
            <Li>
                <StyledNavLink to="/contact">Contact</StyledNavLink>
            </Li>
        </Ul>
    );
}

const Ul = styled.ul`
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 0;
`;

const Li = styled.li`
    display: inline-block;
    width: auto;
    line-height: 70px;
    margin: auto 15px 0px 15px;
`;
/* NavLink같이 기본적으로 제공하는 태그는 다음과 같이 정의해야함. styled(NavLink) */
const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;
`;

export default Gnb;
