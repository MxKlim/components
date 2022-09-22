import React from "react";
import styles from "./select.module.scss";

export default function Select({ options, defaultValue, value, onChange }) {
  return (
    <div className={styles.custom_select}>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option disabled value=''>
          {defaultValue}
        </option>
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
