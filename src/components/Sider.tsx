/** @jsx jsx */
import { Box, jsx } from "theme-ui";

export const Sider: React.FC = props => (
  <Box
    sx={{
      flex: "0 28%",
      mr: 3,
      "& > ul": { listStyleType: "none", ml: 0 },
      "& > ul > li": { mb: 1 }
    }}
  >
    {props.children}
  </Box>
);
