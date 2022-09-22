import React from "react";
import hands from "../../data/miloBomb";
import { useState } from "react";
import SortedBlock from "../../components/SortedBlock/SortedBlock";
import ListItem from "../../components/ListItem/ListItem";

export default function Milo() {
  const [data, setData] = useState([...hands]);
  return (
    <>
      <SortedBlock data={hands} cb={setData} />

      <ListItem data={data} />
    </>
  );
}
