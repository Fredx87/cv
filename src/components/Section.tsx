/** @jsx jsx */
import { Flex, jsx } from "theme-ui";

export const Section: React.FC = props => (
  <Flex sx={{ mb: 4, "& > div:last-child": { flex: 1 } }}>
    {props.children}
  </Flex>
);
