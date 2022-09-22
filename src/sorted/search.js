function search(value, arr, prevArr, cb) {
  if (value) {
    const newArr = arr.filter((item) =>
      item.phase
        .reduce((previousValue, currentValue) => {
          return previousValue + currentValue.component;
        }, "")
        .toLowerCase()
        .includes(value.toLowerCase()),
    );
    cb([...newArr]);
    const countComponents = newArr
      .map((i) => {
        return getString(i, value);
      })
      .map((item) => item.filter((it) => !!it))
      .reduce((prev, current) => +prev + +current, 0)
      .toFixed(2);

    return { count: newArr.length, cuentity: countComponents };
  } else {
    cb([...prevArr]);
  }
}

function getString(item, value) {
  return item.phase
    .map((item) =>
      item.component.map((component) =>
        component[0].toLowerCase().includes(value.toLowerCase())
          ? +component[1].replace("%", "")
          : 0,
      ),
    )
    .flat();
}
export default search;
