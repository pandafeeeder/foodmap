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

const getBorderRadius = (hasNotes?: boolean) => {
  if (hasNotes) {
    return "4px 4px 0 0";
  }

  return "4px";
};

const Container = styled.div<EnjoyOrAvoidProps>`
  background-color: ${(props) => (props.avoid ? "#16050a" : "#05160d")};
  border: 1px solid ${(props) => (props.avoid ? "#af2c52" : "#2caf68")};
  color: ${(props) => (props.avoid ? "#ff4e82" : "#3aff95")};
  border-radius: ${(props) => getBorderRadius(props.hasNotes)};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: ${(props) =>
    getJustification(props.hasMeasurement, props.hasNotes)};
  padding: ${(props) => props.space};
  border-bottom: ${(props) => (props.hasNotes ? "none" : "")};
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
export const Measurement = styled.div<EnjoyOrAvoidProps>`
  font-weight: 500;
  font-size: 0.8rem;
  color: ${(props) => (props.avoid ? "#ff4e82" : "#3aff95")};
  border: 1px solid ${(props) => (props.avoid ? "#6f1a31" : "#2e6e48")};
  border-radius: 2px;
  background-color: ${(props) => (props.avoid ? "#410a19" : "#0a4123")};
  padding: 2px 4px;
  text-transform: uppercase;
  text-align: center;
`;
export const Notes = styled.div<EnjoyOrAvoidProps>`
  font-style: italic;
  font-size: 0.8rem;
  color: #ffd34b;
  background-color: #161206;
  border: 1px solid #b19536;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  text-align: center;
  padding: 2px 4px;
  line-height: 1.3rem;
  display: flex;
  justify-content: space-between;
`;

export const Result = ({ result, space = "0.5rem" }: ResultProps) => {
  const hasNotes = result.notes !== "";
  const hasMeasurement = result.measurement !== "";
  const emoji = result.emoji ? `${result.emoji} ` : "";

  return (
    <>
      <Container avoid={result.avoid} hasNotes={hasNotes} space={space}>
        <Title
          avoid={result.avoid}
          hasMeasurement={hasMeasurement}
          hasNotes={hasNotes}
        >
          <Name>
            {emoji}
            {result.name}
          </Name>
          {hasMeasurement && (
            <Measurement avoid={result.avoid}>{result.measurement}</Measurement>
          )}
        </Title>
      </Container>
      {hasNotes && (
        <Notes avoid={result.avoid}>
          <span>⚠️</span>
          <span>{result.notes}</span>
          <span>⚠️</span>
        </Notes>
      )}
    </>
  );
};
