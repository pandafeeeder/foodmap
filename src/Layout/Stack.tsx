import { Children } from "react";
import flattenChildren from "react-keyed-flatten-children";
import styled from "styled-components";
import { Space } from "./Space";

interface StackProps {
  children?: React.ReactNode;
  padLastChild?: boolean;
  space?: Space;
}

const StyledStack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > :last-child {
    padding-bottom: ${(props) => (props.padLastChild ? props.space : 0)};
  }
`;

const StackChild = styled.div<StackProps>`
  padding-bottom: ${(props) => props.space};
`;

export const Stack = ({
  children,
  padLastChild,
  space = "1rem",
}: StackProps) => {
  const stackItems = flattenChildren(children);

  return (
    <StyledStack padLastChild={padLastChild}>
      {Children.map(stackItems, (child) => (
        <StackChild space={space}>{child}</StackChild>
      ))}
    </StyledStack>
  );
};
