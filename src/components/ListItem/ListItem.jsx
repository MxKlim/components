import React from "react";
import Cream from "../Crem";

export default function ListItem({ data }) {
  return (
    <section className='crems_section'>
      {data.length !== 0
        ? data.map((item, index) => {
            return <Cream data={item} key={index} />;
          })
        : "Записей не найдено"}
    </section>
  );
}
