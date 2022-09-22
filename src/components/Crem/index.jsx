import React from "react";
import { useState } from "react";
import styles from "./cream.module.scss";
export default function Cream(props) {
  const [openCard, setOpenCard] = useState(false);
  const { data } = props;
  return (
    <div className={openCard ? [styles.card, styles.card_active].join(" ") : styles.card}>
      <button
        className={openCard ? [styles.btn, styles.btn_active].join(" ") : styles.btn}
        onClick={() => {
          setOpenCard(!openCard);
        }}>
        {openCard ? "Close" : "Open"}
      </button>
      <h2 className={styles.name}>{data.name}</h2>
      <p>
        <b>Интерес {data.comments}</b>
      </p>
      <p>
        <b>
          Компоненты{" "}
          {data.phase.reduce((previousValue, currentValue, index) => {
            return previousValue + currentValue.component.length;
          }, 0)}
        </b>
      </p>
      <p>
        Время приготовления{" "}
        <time>
          <b>{data.time}</b>
        </time>
      </p>
      <ul className={styles.list_phase}>
        {data.phase.map((item) => {
          return (
            <li className={styles.phase_item}>
              <h5>{item.name}</h5>
              <table>
                {item.component.map((comp) => {
                  {
                    return (
                      <tr>
                        <td>{comp[0]}</td>
                        <td>{comp[1].replace(".", ",")}</td>
                      </tr>
                    );
                  }
                })}
              </table>
            </li>
          );
        })}
      </ul>
      <ol className={styles.list_technology}>
        <h5>Приготовление</h5>
        {data.technology.map((item) => {
          return <li className={styles.technology_item}>{item}</li>;
        })}
      </ol>
    </div>
  );
}
