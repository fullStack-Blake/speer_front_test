import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 70%;
  height: 40px;
  background-color: #b7b2a4;
  border-radius: 15px;
  align-items: center;
  margin-bottom: 10px;
  color: white;
`;
const Name = styled.div`
  width: 80px;
  text-align: right;
`;
const Info = styled.div`
  margin-left: 20px;
  min-width: 150px;
  color: black;
`;

const Category = ({ name, info }) => {
  if (!name) name = "Unknown";
  if (!info) info = "Unknown";
  console.log(info);
  return (
    <Container>
      <Name>{name}</Name>
      <Info>{info}</Info>
    </Container>
  );
};

export default Category;
