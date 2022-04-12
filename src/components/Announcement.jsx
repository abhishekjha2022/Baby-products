import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #f4c2c2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Home Delivery Over Rs.5000</Container>;
};

export default Announcement;
