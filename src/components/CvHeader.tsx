import React from "react";
import styled from "styled-components";

export interface CvHeaderProps {
  photoUrl: string;
  name: string;
  phoneNumber?: string;
  email: string;
  place?: string;
  birthDate?: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Photo = styled.img`
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
  margin-right: 1rem;
`;

const Right = styled.div`
  flex: 1;
  h1 {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-bottom: 1px solid #000000;
    padding: 0.5rem 0;
    margin: 0;
  }

  h1 small {
    font-variant: small-caps;
    font-size: 0.8em;
    color: #999999;
  }
`;

const InfoContainer = styled.div`
  padding: 0.5rem 0;
`;

function getEmailLink(email: string) {
  const link = `mailto:${email}`;
  return <a href={link}>{email}</a>;
}

export function CvHeader(props: CvHeaderProps) {
  return (
    <Container>
      <Photo src={props.photoUrl}></Photo>
      <Right>
        <h1>
          {props.name}
          <small>Curriculum Vitae</small>
        </h1>
        <InfoContainer>
          {props.place ? <div> 📌 {props.place}</div> : null}
          {props.phoneNumber ? <div>📞 {props.phoneNumber} </div> : null}
          {props.email ? <div> ✉️ {getEmailLink(props.email)}</div> : null}
        </InfoContainer>
      </Right>
    </Container>
  );
}
