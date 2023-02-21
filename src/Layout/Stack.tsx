import styled from "@emotion/styled";
import { Children } from "react";
import flattenChildren from "react-keyed-flatten-children";
import { Space } from "./Space";

interface StackProps {
  children?: React.ReactNode;
  space?: Space;
}

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > :last-child {
    padding-bottom: 0;
  }
`;

const StackChild = styled.div<StackProps>`
  padding-bottom: ${(props) => props.space};
`;

export const Stack = ({ children, space = "1rem" }: StackProps) => {
  const stackItems = flattenChildren(children);

  return (
    <StyledStack>
      {Children.map(stackItems, (child) => (
        <StackChild space={space}>{child}</StackChild>
      ))}
    </StyledStack>
  );
};
