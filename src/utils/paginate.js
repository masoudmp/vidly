import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items) // it will return a lodash object and then we can chain all methods
    .slice(startIndex)
    .take(pageSize)
    .value(); // convert lodash object to regular array
}
