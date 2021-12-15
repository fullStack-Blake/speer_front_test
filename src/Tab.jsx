import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 20px;
  display: flex;
  padding: 2px;
  width: 110px;
  justify-content: center;
  column-gap: 3px;
  /* border: 1px solid gray; */
  border-radius: 8px;
  color: white;
  background-color: #44707b;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 30px;
    text-align: center;
    /* border: 1px solid #54494B; */
    border-radius: 10px;
    &:hover {
      background-color: #7bb0a3;
      color: white;
      cursor: pointer;
    }
  }
`;
const Archive = styled.div``;
const Feed = styled.div``;
const TLink = styled(Link)`
  all: unset;
`;

const Tab = () => {
  return (
    <Container>
      <TLink to="/">
        <Feed>Feed</Feed>
      </TLink>
      <TLink to="/archive">
        <Archive>Archive</Archive>
      </TLink>
    </Container>
  );
};

export default Tab;
