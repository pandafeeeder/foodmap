import { ReactNode } from "react";
import styled from "styled-components";

interface CategoryHeadingProps {
  children: ReactNode;
}

const Heading = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const CategoryHeading = ({ children }: CategoryHeadingProps) => (
  <Heading>{children}</Heading>
);
