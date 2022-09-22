import React from "react";
import child from "../../data/children";
import ListItem from "../../components/ListItem/ListItem";
import { useState } from "react";

import SortedBlock from "../../components/SortedBlock/SortedBlock";

export default function Child() {
  const [data, setData] = useState([...child]);
  return (
    <>
      <SortedBlock data={child} cb={setData} />
      <ListItem data={data} />
    </>
  );
}
