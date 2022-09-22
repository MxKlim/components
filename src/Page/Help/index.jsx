import React from "react";
import help from "../../data/spicialHelp";
import { useState } from "react";
import SortedBlock from "../../components/SortedBlock/SortedBlock";
import ListItem from "../../components/ListItem/ListItem";

export default function Help() {
  const [data, setData] = useState([...help]);
  return (
    <>
      <SortedBlock data={help} cb={setData} />
      <ListItem data={data} />
    </>
  );
}
