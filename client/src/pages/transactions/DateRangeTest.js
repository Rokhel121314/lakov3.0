import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import "../transactions/date.css";
import useClickOutSide from "../../hooks/useClickOutSide";
import { addDays } from "date-fns";
import { useDispatch } from "react-redux";
import { filterByDate } from "../../redux/transactionSlice";
import { TbFilter } from "react-icons/tb";

function DateRangeTest() {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  const { isOpen, toggleIsOpen, ref } = useClickOutSide();

  const dispatch = useDispatch();

  return (
    <div className="search-input-container">
      <input
        name="filter-by-date"
        type="search"
        value={`${format(range[0].startDate, "MM/dd/yy")} to ${format(
          range[0].endDate,
          "MM/dd/yy"
        )} `}
        readOnly
        className="search-input"
        onClick={toggleIsOpen}
      />
      <button
        className="search-button"
        onClick={() => {
          dispatch(filterByDate(range));
        }}>
        <TbFilter />
      </button>
      <div className="calendar-container" ref={ref}>
        {!isOpen ? (
          ""
        ) : (
          <DateRange
            onChange={(item) => {
              setRange([item.selection]);
            }}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendar-element"
          />
        )}
      </div>
    </div>
  );
}

export default DateRangeTest;
