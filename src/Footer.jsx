import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import MapIcon from "@mui/icons-material/Map";
import MailIcon from "@mui/icons-material/Mail";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Description = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BABY</Logo>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur
          aspernatur a eligendi labore iusto ipsa omnis qui doloremque, non rem
          voluptas? Debitis et deleniti doloribus nam, accusantium id voluptates
          laboriosam.
        </Description>
        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="385999">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="385999">
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MapIcon style={{ marginRight: "10px" }} /> Kathmandu, Naxal
        </ContactItem>
        <ContactItem>
          <PhoneInTalkIcon style={{ marginRight: "10px" }} /> +977 9811158297
        </ContactItem>
        <ContactItem>
          <MailIcon style={{ marginRight: "10px" }} /> contact@baby.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
