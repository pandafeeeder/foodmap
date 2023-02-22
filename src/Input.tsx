import styled from "styled-components";

interface InputProps {
  fullWidth?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

const StyledInput = styled.input<InputProps>`
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1rem;
  padding: 0.5rem;
  border: 2px solid gray;
  background-color: darkgray;
  color: black;
  transition: background-color 0.1s ease 0s, box-shadow 0.1s ease 0s,
    border-color 0.1s ease 0s;
  width: ${(props) => (props.fullWidth ? "100%" : "unset")};
  border-radius: 2px;

  :focus-within,
  :focus {
    background-color: white;
    border-color: #855cc7;
    outline: none;
  }
`;

export const Input = ({
  fullWidth,
  onChange,
  onKeyUp,
  placeholder,
  value,
}: InputProps) => {
  return (
    <StyledInput
      fullWidth={fullWidth}
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      type={"text"}
      value={value}
    />
  );
};
