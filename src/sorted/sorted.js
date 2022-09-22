function sortItem(sort, cb, arr) {
  switch (sort) {
    case "name":
      cb(() => {
        return [...arr].sort((a, b) => a[sort].localeCompare(b[sort]));
      });
      break;
    case "comments":
      cb(() => {
        return [...arr].sort((a, b) => (+a[sort] > +b[sort] ? 1 : -1)).reverse();
      });
      break;
    case "time":
      cb(() => {
        return [...arr].sort((a, b) => (parseInt(a[sort]) > parseInt(b[sort]) ? 1 : -1)).reverse();
      });
      break;
    case "components":
      cb(() => {
        return [...arr].sort((a, b) =>
          a.phase.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.component.length;
          }, 0) >
          b.phase.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.component.length;
          }, 0)
            ? 1
            : -1,
        );
      });
      break;
  }
}

export default sortItem;
