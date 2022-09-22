import React from "react";
import hands from "../../data/hands";
import { useState } from "react";
import SortedBlock from "../../components/SortedBlock/SortedBlock";
import ListItem from "../../components/ListItem/ListItem";

export default function Hands() {
  const [data, setData] = useState([...hands]);
  return (
    <>
      <SortedBlock data={hands} cb={setData} />
      <ListItem data={data} />
    </>
  );
}
