/** @jsx jsx */
import { Avatar, Box, Flex, jsx, Styled } from "theme-ui";

export interface CvHeaderProps {
  photoUrl: string;
  name: string;
}

export const CvHeader: React.FC<CvHeaderProps> = props => (
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
        <small sx={{ fontSize: 3, fontVariant: "small-caps", color: "muted" }}>
          Curriculum Vitae
        </small>
      </Styled.h1>
      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "space-between",
          "& > ul": { listStyleType: "none", ml: 0 },
          "& > ul > li": { my: 0 }
        }}
      >
        {props.children}
      </Box>
    </Box>
  </Flex>
);
