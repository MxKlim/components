import React from "react";
import hands from "../../data/suntum";
import { useState } from "react";
import SortedBlock from "../../components/SortedBlock/SortedBlock";
import ListItem from "../../components/ListItem/ListItem";

export default function Summer() {
  const [data, setData] = useState([...hands]);
  return (
    <>
      <SortedBlock data={hands} cb={setData} />
      <ListItem data={data} />
    </>
  );
}
