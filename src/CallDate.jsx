import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: "Baloo Bhaijaan 2", cursive;
  font-size: 0.9em;
  letter-spacing: 2px;
  font-weight: 500;
  color: #b7b2a4;
`;

const CallDate = ({ date, detail }) => {
  const baseDate = new Date(date);
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthArray[baseDate.getMonth()];
  const day = baseDate.getDay();
  const year = baseDate.getFullYear();
  const hour = baseDate.getHours();
  const min = baseDate.getMinutes();

  return (
    <div>
      {detail ? (
        `${year} ${month} ${day} ${hour}:${min}`
      ) : (
        <Container>
          {month.toUpperCase()}, {day}, {year}
        </Container>
      )}
    </div>
  );
};

export default CallDate;
