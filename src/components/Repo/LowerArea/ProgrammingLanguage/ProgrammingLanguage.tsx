// react
import React from "react";
// styles
import styles from "./ProgrammingLanguage.module.css";

interface IProgrammingLanguage {
  language: string;
}

const ProgrammingLanguage: React.FC<IProgrammingLanguage> = ({ language }) => {
  return (
    <span className={styles.programmingLanguage}>
      <span>{language}</span>
    </span>
  );
};

export default ProgrammingLanguage;
