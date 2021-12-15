import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { reset } from "../Components/API.jsx";
import Feed from "./Feed.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Reset = styled.div`
  border: 1px solid #b7b2a4;
  border-radius: 10px;
  padding: 10px;
  width: 250px;
  height: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Image = styled.div``;
const TextBox = styled.div`
  margin-left: 5px;
  font-weight: bold;
`;

const Archive = () => {
  const [reload, setReload] = useState(false);

  const fetchReset = () => {
    reset().then((res) => setReload(!reload));
  };

  return (
    <Container>
      <Reset onClick={() => fetchReset()}>
        <img src="https://img.icons8.com/material-outlined/24/000000/box--v2.png" />
        <TextBox>Reset all</TextBox>
      </Reset>
      <Feed isFeed={false} reload={reload} />
    </Container>
  );
};

export default Archive;
