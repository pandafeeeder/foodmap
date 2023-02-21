import styled from "@emotion/styled";
import { Item } from "../data";
import { Space } from "../Layout/Space";
import { Stack } from "../Layout/Stack";

type EnjoyOrAvoidProps = Pick<Item, "avoid"> & {
  space?: Space;
};

const Container = styled.div<EnjoyOrAvoidProps>`
  background-color: ${(props) => (props.avoid ? "#16050a" : "#05160d")};
  border: 1px solid ${(props) => (props.avoid ? "#af2c52" : "#2caf68")};
  color: ${(props) => (props.avoid ? "#ff4e82" : "#3aff95")};
  border-radius: 4px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: ${(props) => props.space};
`;

interface ResultProps {
  result: Item;
  space?: Space;
}

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Name = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;
export const Measurement = styled.div<EnjoyOrAvoidProps>`
  font-weight: 500;
  font-size: 0.85rem;
  color: ${(props) => (props.avoid ? "#83213e" : "#21834e")};
`;
export const Notes = styled.div<EnjoyOrAvoidProps>`
  font-style: italic;
  font-size: 0.85rem;
  color: ${(props) => (props.avoid ? "#83213e" : "#21834e")};
`;

export const Result = ({ result, space = "0.75rem" }: ResultProps) => {
  const emoji = result.emoji ? `${result.emoji} ` : "";
  return (
    <Container avoid={result.avoid} space={space}>
      <Stack space="0.25rem">
        <Title>
          <Name>
            {emoji}
            {result.name}
          </Name>
          {result.measurement !== "" && (
            <Measurement avoid={result.avoid}>
              ⚖️ {result.measurement}
            </Measurement>
          )}
        </Title>
        {result.notes !== "" && (
          <Notes avoid={result.avoid}>⚠️ {result.notes}</Notes>
        )}
      </Stack>
    </Container>
  );
};
