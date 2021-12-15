import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const flexCentre = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  ${flexCentre}
  margin-right: 20px;

  padding: 2px;
  width: 140px;
  column-gap: 10px;
  /* border: 1px solid gray; */
  border-radius: 8px;
  color: white;
  background-color: #44707b;
  div {
    ${flexCentre}
    width: 55px;
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
