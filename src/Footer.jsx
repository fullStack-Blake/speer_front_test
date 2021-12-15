import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50px;
  width: 100%;
  border-top: 1px solid #b7b2a4;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Icon = styled.div``;
const Phone = styled.div`
  margin-top: -50px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid #9fd6d2;
  padding: 7px;
`;
const Footer = () => {
  return (
    <Container>
      <Icon>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/phone--v1.png" />
      </Icon>
      <Icon>
        <img src="https://img.icons8.com/ios/30/000000/men-age-group-4.png" />
      </Icon>
      <Phone>
        <img src="https://img.icons8.com/color-glass/50/000000/number-pad.png" />
      </Phone>
      <Icon>
        <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/30/000000/external-setting-basic-ui-elements-flatart-icons-outline-flatarticons.png" />
      </Icon>
      <Icon>
        <img src="https://img.icons8.com/ios-glyphs/30/000000/record.png" />
      </Icon>
    </Container>
  );
};

export default Footer;
