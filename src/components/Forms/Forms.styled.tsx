import styled from "@emotion/styled";

export const TodoInput = styled.input`
  outline: none;
  background: none;
  border: 1px solid #8758ff;
  padding: 0.5rem 1rem;

  width: 300px;
  color: #fff;

  &::placeholder {
    color: #ffffff4d;
  }
`;

export const TodoBtn = styled.button`
  background: #8758ff;
  color: #fff;
  border: none;
  padding: 0.55rem;
  cursor: pointer;
`;
