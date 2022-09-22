import React from "react";
import { useState } from "react";
import hair from "../../data/hair";
import SortedBlock from "../../components/SortedBlock/SortedBlock";
import ListItem from "../../components/ListItem/ListItem";

export default function Hair() {
  const [data, setData] = useState([...hair]);

  return (
    <>
      <SortedBlock data={hair} cb={setData} />
      <ListItem data={data} />
    </>
  );
}
