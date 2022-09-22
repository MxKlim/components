import React from "react";
import ListItem from "../../components/ListItem/ListItem";
import dataCrems from "../../data/creams";
import SortedBlock from "../../components/SortedBlock/SortedBlock";
import { useState } from "react";

export default function CreamFace() {
  const [data, setData] = useState([...dataCrems]);
  return (
    <>
      <SortedBlock data={dataCrems} cb={setData} />
      <ListItem data={data} />
    </>
  );
}
