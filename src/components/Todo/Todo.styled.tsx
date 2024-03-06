import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #8758ff;
  color: #fff;
  padding: 0.75rem 1rem;
  border-radius: 5px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Title = styled.p`
  user-select: none;
  cursor: pointer;

  &.incompleted {
    color: #fff;
  }

  &.completed {
    color: #c5aeff;
    text-decoration: line-through;
  }
`;
