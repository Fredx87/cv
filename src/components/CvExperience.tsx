import React from "react";
import styled from "styled-components";

export interface CvExperienceCommonProps {
  start: string;
  end: string;
  children: React.ReactNode;
}

export interface CvWorkExperienceProps extends CvExperienceCommonProps {
  type: "work";
  company: string;
  place: string;
}

export interface CvUniversityExperienceProps extends CvExperienceCommonProps {
  type: "university";
  university: string;
  finalMark: string;
}

export type CvExperienceProps =
  | CvWorkExperienceProps
  | CvUniversityExperienceProps;

const Container = styled.div`
  display: flex;
`;

const Side = styled.div`
  flex: 0 20rem;
  margin-right: 2rem;
`;

const Content = styled.div`
  flex: 1;
`;

export function CvExperience(props: CvExperienceProps) {
  function getSideContent(): JSX.Element {
    switch (props.type) {
      case "work": {
        return (
          <>
            <p>🏢 {props.company}</p>
            <p>📌 {props.place}</p>
          </>
        );
      }
      case "university": {
        return (
          <>
            <p>🎓 {props.university}</p>
            <p>📜 Final mark: {props.finalMark}</p>
          </>
        );
      }
    }
  }

  return (
    <Container>
      <Side>
        <p>
          📅 {props.start} &ndash; {props.end}
        </p>
        {getSideContent()}
      </Side>
      <Content>{props.children}</Content>
    </Container>
  );
}
