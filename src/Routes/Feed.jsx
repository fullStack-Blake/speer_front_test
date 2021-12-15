import React, { useState, useEffect } from "react";
import CallBox from "../Components/CallBox.jsx";
import styled, { css } from "styled-components";
import CallDate from "../Components/CallDate.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import { feeds } from "../Components/API.jsx";

const flexCentre = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div``;
const Calls = styled.div`
  ${flexCentre}
  width: 100%;
  flex-direction: column;
  row-gap: 15px;
  margin-bottom: 15px;
  a {
    ${flexCentre}
  }
`;
const DLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover,
  &:visited {
    all: unset;
    cursor: pointer;
  }
`;

//
const Feed = ({ isFeed = true, reload = true }) => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  // Group unarchived calls by date
  useEffect(() => {
    const fetchFeed = () => {
      feeds()
        .then((res) => res.data)
        // Feed only shows non-archived calls
        // If isFeed is false, return Archived calls
        .then((res) =>
          res.filter((res) => (isFeed ? !res.is_archived : res.is_archived))
        )
        .then((res) => {
          var ref = {};

          var newArray = res.reduce(function (arr1, o) {
            //  get date value
            var m = new Date(o.created_at).getDate();
            // check already defined in the reference array
            if (!(m in ref)) {
              // define if not defined
              ref[m] = arr1.length;
              // push an empty array
              arr1.push([]);
            }
            // push the object into the array
            arr1[ref[m]].push(o);
            // return array refernece
            return arr1;
            // set initial value as an empty array for result
          }, []);
          return newArray;
        })
        .then((res) => {
          setFeed(res);
          setLoading(false);
        });
    };

    fetchFeed();
  }, [reload]);

  return (
    <Container>
      {feed && !loading
        ? feed.map((res, idx) => (
            <Calls key={idx}>
              <CallDate date={res[0].created_at} />
              {res.map((res) => (
                <DLink to={`/detail/${res.id}`} key={res.id}>
                  <CallBox
                    call_type={res.call_type}
                    to={res.to}
                    from={res.from}
                    time={res.created_at}
                    bound={res.bound}
                  />
                </DLink>
              ))}
            </Calls>
          ))
        : null}
    </Container>
  );
};

export default Feed;
