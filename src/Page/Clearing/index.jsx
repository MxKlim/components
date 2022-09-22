import React from "react";
import clearing from "../../data/clearing";
import ListItem from "../../components/ListItem/ListItem";
import { useState } from "react";
import SortedBlock from "../../components/SortedBlock/SortedBlock";

export default function Clearing() {
  const [data, setData] = useState([...clearing]);

  return (
    <>
      <SortedBlock data={clearing} cb={setData} />
      <ListItem data={data} />
    </>
  );
}
