/** @jsx jsx */
import { Avatar, Box, Flex, jsx } from "theme-ui";

export interface CvHeaderProps {
  photoUrl: string;
  name: string;
  phoneNumber?: string;
  email: string;
  place?: string;
  birthDate?: string;
}

function getEmailLink(email: string) {
  const link = `mailto:${email}`;
  return <a href={link}>{email}</a>;
}

export function CvHeader(props: CvHeaderProps) {
  return (
    <Flex>
      <Avatar src={props.photoUrl}></Avatar>
      <Box sx={{ flex: 1 }}>
        <h1>
          {props.name}
          <small>Curriculum Vitae</small>
        </h1>
        <Box>
          {props.place ? <div> 📌 {props.place}</div> : null}
          {props.phoneNumber ? <div>📞 {props.phoneNumber} </div> : null}
          {props.email ? <div> ✉️ {getEmailLink(props.email)}</div> : null}
        </Box>
      </Box>
    </Flex>
  );
}
