import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { feedDetail, archiveFeed } from "./API.jsx";
import CallDate from "./CallDate.jsx";

const Container = styled.div``;
const DetailBox = styled.div``;
const Type = styled.div``;
const Date = styled.div``;
const Direction = styled.div``;
const Duration = styled.div``;
const From = styled.div``;
const To = styled.div``;
const Archived = styled.div``;
const Via = styled.div``;
const Photo = styled.div`
  width: 100px;
  height: 100px;
  background-color: grey;
  border-radius: 50%;
`;
const UserInfo = styled.div``;
const Button = styled.button``;

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
          console.log(res);
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
            <Photo />
            <From>{detail.from}</From>
            <To>{detail.to}</To>
          </UserInfo>
          <Direction>{detail.direction}</Direction>
          <Via>{detail.via}</Via>
          <CallDate date={detail.created_at} detail={true} />
          <Duration>{`${detail.duration} mins`}</Duration>
          <Button onClick={() => toggleArchive(id, archived)}>{`${
            detail.is_archived ? "Archived" : "Not Archived"
          }`}</Button>
        </DetailBox>
      ) : null}
    </Container>
  );
};

export default Detail;
