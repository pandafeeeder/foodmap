import styled from "styled-components";

const StyledSeparator = styled.hr`
  height: 1px;
  border: none;
  margin: 0.33rem 0;
  padding: 0;
  background-color: ${(props) => props.theme.separator};
`;

export const Separator = () => <StyledSeparator />;
