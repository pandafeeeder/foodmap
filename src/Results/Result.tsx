import styled from "styled-components";
import { Item } from "../data";
import { Space } from "../Layout/Space";

interface ResultProps {
  result: Item;
  space?: Space;
}

type EnjoyOrAvoidProps = Pick<Item, "avoid"> & {
  hasMeasurement?: boolean;
  hasNotes?: boolean;
  space?: Space;
};

const getJustification = (
  hasMeasurement?: boolean,
  hasNotes?: boolean
): string => {
  if (hasNotes || hasMeasurement) {
    return "space-between";
  }

  return "flex-start";
};

const Container = styled.div<EnjoyOrAvoidProps>`
  background-color: ${(props) => (props.avoid ? "#16050a" : "#05160d")};
  border: 1px solid ${(props) => (props.avoid ? "#af2c52" : "#2caf68")};
  color: ${(props) => (props.avoid ? "#ff4e82" : "#3aff95")};
  border-radius: 4px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: ${(props) =>
    getJustification(props.hasMeasurement, props.hasNotes)};
  padding: ${(props) => props.space};
`;

export const Title = styled.div<EnjoyOrAvoidProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Name = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
`;
export const Notes = styled.div<EnjoyOrAvoidProps>`
  font-style: italic;
  font-size: 0.8rem;
  color: ${(props) => (props.avoid ? "#83213e" : "#21834e")};
  min-width: 50px;
  text-align: center;
`;
export const Measurement = styled.div<EnjoyOrAvoidProps>`
  font-weight: 500;
  font-size: 0.8rem;
  color: ${(props) => (props.avoid ? "#ff4e82" : "#3aff95")};
  min-width: 50px;
  border: 1px solid ${(props) => (props.avoid ? "#6f1a31" : "#2e6e48")};
  border-radius: 2px;
  background-color: ${(props) => (props.avoid ? "#410a19" : "#0a4123")};
  padding: 2px;
  text-transform: uppercase;
  text-align: center;
`;

export const Result = ({ result, space = "0.5rem" }: ResultProps) => {
  const hasNotes = result.notes !== "";
  const hasMeasurement = result.measurement !== "";
  const emoji = result.emoji ? `${result.emoji} ` : "";

  return (
    <Container avoid={result.avoid} space={space}>
      <Title
        avoid={result.avoid}
        hasMeasurement={hasMeasurement}
        hasNotes={hasNotes}
      >
        <Name>
          {emoji}
          {result.name}
        </Name>
        {hasNotes && <Notes avoid={result.avoid}>{result.notes}</Notes>}
        {hasMeasurement && (
          <Measurement avoid={result.avoid}>{result.measurement}</Measurement>
        )}
      </Title>
    </Container>
  );
};
