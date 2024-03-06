import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  CustomSelect,
  FilterWrapper,
  SelectBlock,
  SelectItem,
  SelectWrapper,
  StyledIcon,
} from "./Filter.styled";

const Filter = ({
  status,
  setStatus,
}: {
  status: string;
  setStatus: (string: string) => void;
}) => {
  const [statusHidden, setStatusHidden] = useState(true);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const targetElement = e.target as Element;

      if (
        !statusHidden &&
        targetElement &&
        !targetElement.closest("#select-wrapper")
      ) {
        setStatusHidden(true);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [statusHidden]);

  return (
    <FilterWrapper>
      <h2>Filter</h2>
      <SelectBlock
        id="select-wrapper"
        onClick={() => setStatusHidden((prev) => !prev)}
      >
        <CustomSelect>
          <p>{status || "Filter by"} </p>
          <StyledIcon
            className={`${statusHidden ? "up" : ""}`}
            icon={faAngleDown}
          />
        </CustomSelect>
        <SelectWrapper className={`${statusHidden ? "hidden" : ""}`}>
          <ul>
            <SelectItem
              onClick={() => {
                setStatus("All");
              }}
            >
              All
            </SelectItem>
            <SelectItem
              onClick={() => {
                setStatus("Completed");
              }}
            >
              Completed
            </SelectItem>
            <SelectItem
              onClick={() => {
                setStatus("Current");
              }}
            >
              Current
            </SelectItem>
          </ul>
        </SelectWrapper>
      </SelectBlock>
    </FilterWrapper>
  );
};

export default Filter;
