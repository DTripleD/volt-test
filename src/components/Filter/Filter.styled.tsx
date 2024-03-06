import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SelectItem = styled.li`
  color: #fff;
  cursor: pointer;
  padding: 10px;

  &:hover,
  &:focus {
    color: #dfd8d8;
    background-color: #1a1a40;
  }
`;

export const SelectWrapper = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  background-color: #8758ff;
  border-radius: 4px;
  border: 1px solid #1a1a40;

  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  width: 100%;

  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
`;

export const CustomSelect = styled.div`
  display: flex;
  border: 1px solid #8758ff;
  padding: 0.5rem 1rem;

  color: #ffffff4d;
  border-radius: 4px;
  line-height: normal;
  font-weight: 400;
  font-size: 13.3333px;
  align-items: center;
  justify-content: space-between;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;

  &.show_icon.up {
    transform: rotate(0deg);
  }
`;

export const SelectBlock = styled.div`
  position: relative;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
