import styled from "styled-components";
import { Item } from "./data";
import { Space } from "./Layout/Space";

interface ResultProps {
  result: Item;
  space?: Space;
}

type EnjoyOrAvoidProps = {
  enjoyAvoid: "enjoy" | "avoid";
  hasNotes?: boolean;
  space?: Space;
};

const getBorderRadius = (hasNotes?: boolean) => {
  if (hasNotes) {
    return "4px 4px 0 0";
  }

  return "4px";
};

const Container = styled.div<EnjoyOrAvoidProps>`
  background-color: ${(props) => props.theme[props.enjoyAvoid].background};
  border: 1px solid ${(props) => props.theme[props.enjoyAvoid].border};
  color: ${(props) => props.theme[props.enjoyAvoid].border};
  border-radius: ${(props) => getBorderRadius(props.hasNotes)};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
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
  color: ${(props) => props.theme[props.enjoyAvoid].measurement.color};
  border: 1px solid
    ${(props) => props.theme[props.enjoyAvoid].measurement.border};
  border-radius: 2px;
  background-color: ${(props) =>
    props.theme[props.enjoyAvoid].measurement.background};
  padding: 2px 4px;
  text-transform: uppercase;
  text-align: center;
`;
export const Notes = styled.div<EnjoyOrAvoidProps>`
  font-style: italic;
  font-size: 0.8rem;
  color: ${(props) => props.theme.notes.color};
  background-color: ${(props) => props.theme.notes.background};
  border: 1px solid ${(props) => props.theme.notes.border};
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
  const enjoyAvoid = result.avoid ? "avoid" : "enjoy";

  return (
    <>
      <Container enjoyAvoid={enjoyAvoid} hasNotes={hasNotes} space={space}>
        <Title enjoyAvoid={enjoyAvoid} hasNotes={hasNotes}>
          <Name>
            {emoji}
            {result.name}
          </Name>
          {hasMeasurement && (
            <Measurement enjoyAvoid={enjoyAvoid}>
              {result.measurement}
            </Measurement>
          )}
        </Title>
      </Container>
      {hasNotes && (
        <Notes enjoyAvoid={enjoyAvoid}>
          <span>⚠️</span>
          <span>{result.notes}</span>
          <span>⚠️</span>
        </Notes>
      )}
    </>
  );
};
