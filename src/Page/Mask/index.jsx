import React from "react";
import mask from "../../data/masks";
import { useState } from "react";
import SortedBlock from "../../components/SortedBlock/SortedBlock";
import ListItem from "../../components/ListItem/ListItem";

export default function Mask() {
  const [data, setData] = useState([...mask]);

  return (
    <>
      <SortedBlock data={mask} cb={setData} />
      <ListItem data={data} />
    </>
  );
}
