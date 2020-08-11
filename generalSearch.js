export function generalSearch(searchString, data, parent) {
  if (typeof data === "object" && data !== null) {
    for (const key of Object.keys(data)) {
      const obj = data[key];
      const result = generalSearch(searchString, obj, data);
      if (result !== null) return result;
    }
  }

  if (typeof data === "string" && data.includes(searchString)) {
    return parent;
  } else {
    return null;
  }
}
