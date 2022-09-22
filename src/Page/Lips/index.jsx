import React from "react";
import lips from "../../data/scrumLips";
import { useState } from "react";
import SortedBlock from "../../components/SortedBlock/SortedBlock";
import ListItem from "../../components/ListItem/ListItem";

export default function Lips() {
  const [data, setData] = useState([...lips]);
  return (
    <>
      <SortedBlock data={lips} cb={setData} />
      <ListItem data={data} />
    </>
  );
}
