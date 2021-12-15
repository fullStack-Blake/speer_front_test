import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { feeds } from "./API.jsx";

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
const Icon = styled.div`
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;
const Phone = styled.div`
  margin-top: -50px;
  background-color: white;
  border-radius: 50%;
  border: 2px solid #9fd6d2;
  padding: 7px;
  &:hover {
    cursor: pointer;
  }
`;
const Span = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  background-color: red;
  color: white;
  font-weight: bold;
  font-size: 0.8em;
  width: 20px;
  height: 15px;
  text-align: center;
  border-radius: 6px;
  margin-right: -8px;
  margin-top: -5px;
`;

const Footer = () => {
  const [missedCall, setMissedCall] = useState(0);
  const [loading, setLoading] = useState(true);

  // Count missed calls
  useEffect(() => {
    const countMissed = () => {
      feeds()
        .then((res) => res.data)
        .then((res) => {
          const addNum = res.filter((res) => res.call_type == "missed").length;
          setMissedCall(addNum);
          setLoading(false);
        });
    };

    countMissed();
  }, [missedCall]);

  return (
    <Container>
      <Icon>
        {missedCall && missedCall > 0 && !loading ? (
          <Span>{missedCall}</Span>
        ) : null}
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
