import React, { useState, useEffect } from "react";
import CallBox from "./CallBox.jsx";
import styled from "styled-components";
import CallDate from "./CallDate.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
import { feeds } from "./API.jsx";

const Container = styled.div``;
const Calls = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 15px;
  margin-bottom: 15px;
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

const Feed = ({ isFeed = true }) => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeed = () => {
      feeds()
        .then((res) => res.data)
        // Feed only shows non-archived calls
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
          console.log(res);
          setFeed(res);
          setLoading(false);
        });
    };

    fetchFeed();
  }, []);

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
