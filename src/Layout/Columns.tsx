import styled from "styled-components";
import { Space } from "./Space";

interface ColumnsProps {
  children?: React.ReactNode;
  space?: Space;
}

const StyledColumns = styled.div<ColumnsProps>`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -${(props) => props.space};
  overflow-wrap: break-word;
`;

export const Columns = ({ children, space = "1rem" }: ColumnsProps) => (
  <StyledColumns space={space}>{children}</StyledColumns>
);
