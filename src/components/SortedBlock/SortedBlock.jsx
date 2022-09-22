import React from "react";
import Input from "../Input/Input";
import Select from "../Select";
import search from "../../sorted/search";
import sortItem from "../../sorted/sorted";
import { useState } from "react";

export default function SortedBlock({ data, cb }) {
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [changeData, setChangeData] = useState([...data]);
  const [findElement, setFindElement] = useState({});
  console.log(findElement);
  return (
    <div className='sort-block'>
      <Input
        placeholder={"Поиск..."}
        value={searchQuery}
        onChange={(value) => {
          setSearchQuery(value);
          const find = search(value, changeData, data, setChangeData);
          setFindElement({ ...find });
          cb(changeData);
        }}
      />
      <Select
        value={selectedSort}
        onChange={(sort) => {
          sortItem(sort, cb, changeData);
          setSelectedSort(sort);
        }}
        defaultValue={"Сортировка"}
        options={[
          { value: "comments", name: "По популярности" },
          { value: "name", name: "По имени" },
          { value: "time", name: "По времени" },
          { value: "components", name: "По кол. компонентов" },
        ]}
      />
      <p>{findElement.count ? `Найдено ${findElement.count} элементов` : ""}</p>
      <p>
        {findElement.count
          ? `Среденее содержание ${(findElement.cuentity / findElement.count).toFixed(
              2,
            )}% компонента`
          : ""}
      </p>
    </div>
  );
}
