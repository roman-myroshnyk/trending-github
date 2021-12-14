// react
import React, { useState } from "react";
// interfaces
import { IDateRage } from "../../../../const/dateRange";
// components
import PullDownHeader from "../PullDownHeader/PullDownHeader";
import PullDownMenuList from "../PullDownMenuList/PullDownMenuList";
import PullDownMenuItem from "../PullDownMenuItem/PullDownMenuItem";
// styles
import styles from "./PullDown.module.css";

interface IPullDown {
  title: string;
  modalTitle: string;
  selectedValue: string;
  items: IDateRage[];
}

const PullDown: React.FC<IPullDown> = ({
  title,
  modalTitle,
  selectedValue,
  items,
}) => {
  // modal open flag
  const [isOpen, setOpen] = useState(false);

  // modal toggle
  const toggleModal = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.pullDown} ${
          isOpen ? ` ${styles.pullDownIsOpen}` : ""
        }`}
        onClick={toggleModal}
      >
        {` ${title}: `}
        <span className={styles.pullDownSpan}> {selectedValue} </span>
      </div>
      {isOpen && (
        <div className={styles.modal}>
          <PullDownHeader title={modalTitle} closeModal={toggleModal} />
          <PullDownMenuList>
            {items.map((item) => (
              <PullDownMenuItem key={item.dateType} text={item.title} />
            ))}
          </PullDownMenuList>
        </div>
      )}
    </div>
  );
};

export default PullDown;
