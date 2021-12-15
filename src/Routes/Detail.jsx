import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { feedDetail, archiveFeed } from "../API.jsx";
import CallDate from "../CallDate.jsx";
import Category from "../Category.jsx";

const Container = styled.div`
  font-family: "Baloo Bhaijaan 2", cursive;
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
`;

const Photo = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  color: white;
  font-size: 3em;
  align-items: center;
  justify-content: center;
  background-color: #587471;
  border-radius: 50%;
  margin-bottom: 20px;
  img {
    background: white;
  }
`;
const UserInfo = styled.div``;
const Button = styled.button`
  font-family: "Baloo Bhaijaan 2", cursive;
  border: none;
  border-radius: 6px;
  background-color: #44707b;
  color: white;
  margin-top: 20px;
  &:hover {
    cursor: pointer;
  }
`;

const Detail = () => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [archived, setArchived] = useState(null);

  const { id } = useParams();

  // User can toggle when click button
  const toggleArchive = (id, archived) => {
    archiveFeed(id, !archived);
    setArchived(!archived);
  };

  useEffect(() => {
    const fetchDetail = () => {
      feedDetail(id)
        .then((res) => res.data)
        .then((res) => {
          setDetail(res);
          setArchived(res.is_archived == true);
          setLoading(false);
        });
    };
    fetchDetail();
  }, [archived]);

  return (
    <Container>
      {detail && !loading ? (
        <DetailBox>
          <UserInfo>
            {/* If call from name, display first character. Otherwise Icon */}
            {isNaN(detail.from.slice(0, 1)) ? (
              <Photo>{detail.from.slice(0, 1)}</Photo>
            ) : (
              <Photo>
                <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/60/000000/external-human-shopping-prettycons-lineal-prettycons.png" />
              </Photo>
            )}
          </UserInfo>
          <Category name={"from"} info={detail.from} />
          <Category name={"to"} info={detail.to} />
          <Category name={"direction"} info={detail.direction} />
          <Category name={"via"} info={detail.via} />
          <Category
            name={"time"}
            info={<CallDate date={detail.created_at} detail={true} />}
          />

          <Category name={"duration"} info={`${detail.duration} mins`} />

          <Button onClick={() => toggleArchive(id, archived)}>{`${
            detail.is_archived ? "Archived" : "Not Archived"
          }`}</Button>
        </DetailBox>
      ) : null}
    </Container>
  );
};

export default Detail;
