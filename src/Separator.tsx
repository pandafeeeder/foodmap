import styled from "styled-components";

const StyledSeparator = styled.hr`
  height: 1px;
  border: none;
  margin: 0;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Separator = () => <StyledSeparator />;
