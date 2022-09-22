import React from "react";
import dataCrems from "../../data/creamforbody";
import ListItem from "../../components/ListItem/ListItem";
import { useState } from "react";
import SortedBlock from "../../components/SortedBlock/SortedBlock";

export default function CremBody() {
  const [data, setData] = useState([...dataCrems]);
  return (
    <>
      <SortedBlock data={dataCrems} cb={setData} />
      <ListItem data={data} />
    </>
  );
}
