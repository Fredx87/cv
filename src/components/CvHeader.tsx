/** @jsx jsx */
import { Avatar, Box, Flex, jsx, Styled } from "theme-ui";

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
  return <Styled.a href={link}>{email}</Styled.a>;
}

export function CvHeader(props: CvHeaderProps) {
  return (
    <Flex sx={{ mb: 3, alignItems: "center" }}>
      <Avatar src={props.photoUrl} sx={{ mr: 3 }}></Avatar>
      <Box sx={{ flex: 1 }}>
        <Styled.h1
          sx={{
            pt: 2,
            pb: 1,
            my: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            borderBottom: "1px solid #999"
          }}
        >
          {props.name}{" "}
          <small
            sx={{ fontSize: 3, fontVariant: "small-caps", color: "muted" }}
          >
            Curriculum Vitae
          </small>
        </Styled.h1>
        <Box sx={{ mt: 1 }}>
          {props.place ? <div> 📌 {props.place}</div> : null}
          {props.phoneNumber ? <div>📞 {props.phoneNumber} </div> : null}
          {props.email ? <div> ✉️ {getEmailLink(props.email)}</div> : null}
        </Box>
      </Box>
    </Flex>
  );
}
