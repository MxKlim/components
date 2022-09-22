import React from "react";
import stap from "../../data/leg";
import { useState } from "react";
import SortedBlock from "../../components/SortedBlock/SortedBlock";
import ListItem from "../../components/ListItem/ListItem";

export default function Stap() {
  const [data, setData] = useState([...stap]);
  return (
    <>
      <SortedBlock data={stap} cb={setData} />
      <ListItem data={data} />
    </>
  );
}
