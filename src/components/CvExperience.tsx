import React from "react";
import styled from "styled-components";

export interface CvExperienceProps {
  start: string;
  end: string;
  company?: string;
  place?: string;
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
`;

const Side = styled.div`
  flex: 0 20rem;
`;

const Content = styled.div`
  flex: 1;
`;

export function CvExperience(props: CvExperienceProps) {
  return (
    <Container>
      <Side>
        <p>
          📅 {props.start} &ndash; {props.end}
        </p>
        {props.company ? <p>🏢 {props.company}</p> : null}
        {props.place ? <p>📌 {props.place}</p> : null}
      </Side>
      <Content>{props.children}</Content>
    </Container>
  );
}
