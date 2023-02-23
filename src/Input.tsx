import styled from "styled-components";

interface InputProps {
  fullWidth?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

const StyledInput = styled.input<InputProps>`
  background-color: ${(props) => props.theme.search.background};
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.search.border};
  box-sizing: border-box;
  color: ${(props) => props.theme.search.color};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
  padding: 0.5rem;
  transition: background-color 0.1s ease 0s, box-shadow 0.1s ease 0s,
    border-color 0.1s ease 0s;
  width: ${(props) => (props.fullWidth ? "100%" : "unset")};

  ::placeholder {
    color: ${(props) => props.theme.search.placeholder};
  }

  :focus-within,
  :focus {
    background-color: ${(props) => props.theme.search.focus.background};
    border-color: ${(props) => props.theme.search.focus.border};
    color: ${(props) => props.theme.search.focus.color};
    outline: none;

    ::placeholder {
      color: ${(props) => props.theme.search.focus.placeholder};
    }
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
