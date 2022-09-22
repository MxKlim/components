import React from "react";
import styles from "./input.module.scss";

export default function Input({ placeholder, value, onChange }) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onInput={(event) => {
        onChange(event.target.value);
      }}
    />
  );
}
