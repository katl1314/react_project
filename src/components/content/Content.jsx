import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Weather from "./Weather";
import Todo from "./Todo";
import Note from "./Note";
import Hobby from "./Hobby";
import Contact from "./Contact";

function Content() {
    return (
        <WrapContent>
            <Routes>
                <Route path="/weather" element={<Weather />}></Route>
                <Route path="/todo" element={<Todo />}></Route>
                <Route path="/note" element={<Note />}></Route>
                <Route path="/hobby" element={<Hobby />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </WrapContent>
    );
}

// 스타일드 컴포넌트
const WrapContent = styled.div`
    min-width: 100%;
    height: 100%;
    display: inline-block;
    float: right;
    position: relative;
    top: 80px;
`;

export default Content;
