import { ReactNode } from "react";
import styled from "styled-components";

interface CategoryHeadingProps {
  children: ReactNode;
}

const Heading = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 600;
  justify-content: space-between;
  line-height: 1.2rem;
`;

export const CategoryHeading = ({ children }: CategoryHeadingProps) => (
  <Heading>{children}</Heading>
);
