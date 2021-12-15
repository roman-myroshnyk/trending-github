// react
import React, { useState } from "react";
// interfaces
import { ILanguage } from "../../../../const/languages";
import { ISpokenLanguage } from "../../../../const/spokenLanguages";
// components
import PullDownHeader from "../PullDownHeader/PullDownHeader";
import PullDownMenuList from "../PullDownMenuList/PullDownMenuList";
import PullDownClearItem from "../PullDownClearItem/PullDownClearItem";
import PullDownFilter from "../PullDownFilter/PullDownFilter";
import PullDownMenuItem from "../PullDownMenuItem/PullDownMenuItem";
// styles
import styles from "./PullDownWithSearchBar.module.css";

interface IPullDownWithSearchBar {
  title: string;
  modalTilte: string;
  selectedValue?: string;
  selectedTitle: string;
  handleSelect: (value?: string) => void;
  items: ILanguage[] | ISpokenLanguage[];
}
const PullDownWithSearchBar: React.FC<IPullDownWithSearchBar> = ({
  title,
  modalTilte,
  selectedValue,
  selectedTitle,
  handleSelect,
  items,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [searchString, setSearchString] = useState("");
  const toggleModal = () => {
    setOpen(!isOpen);
    setSearchString("");
  };
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.pullDown} ${
          isOpen ? ` ${styles.pullDownIsOpen}` : ""
        }`}
        onClick={toggleModal}
      >
        {`${title}: `}
        <span className={styles.pullDownSpan}> {selectedTitle} </span>
      </div>
      {isOpen && (
        <div className={styles.modal}>
          <PullDownHeader title={modalTilte} closeModal={toggleModal} />
          <div className={styles.filterWrapper}>
            <PullDownFilter
              searchString={searchString}
              setSearchString={setSearchString}
            />
          </div>
          <PullDownMenuList>
            <PullDownClearItem
              text="Clear language"
              clickHandler={() => {
                handleSelect();
                toggleModal();
              }}
            />
            {items.map((item) => {
              if (searchString === "") {
                return (
                  <PullDownMenuItem
                    key={item.code}
                    text={item.language}
                    clickHandler={() => {
                      handleSelect(item.code);
                      toggleModal();
                    }}
                    checked={item.code == selectedValue}
                  />
                );
              }
              if (
                searchString !== "" &&
                item.language.toLowerCase().includes(searchString)
              ) {
                return (
                  <PullDownMenuItem
                    key={item.code}
                    text={item.language}
                    clickHandler={() => {
                      handleSelect(item.code);
                      toggleModal();
                    }}
                    checked={item.code == selectedValue}
                  />
                );
              } else {
                return null;
              }
            })}
          </PullDownMenuList>
        </div>
      )}
    </div>
  );
};

export default PullDownWithSearchBar;
