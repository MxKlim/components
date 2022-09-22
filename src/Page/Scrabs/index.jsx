import React from "react";
import scrabs from "../../data/scrabs";
import { useState } from "react";
import SortedBlock from "../../components/SortedBlock/SortedBlock";
import ListItem from "../../components/ListItem/ListItem";

export default function Scrabs() {
  const [data, setData] = useState([...scrabs]);
  return (
    <>
      <SortedBlock data={scrabs} cb={setData} />
      <ListItem data={data} />
    </>
  );
}
