// 去除Json字符串属性的引号
export function removeJsonStringPropQuot(jsonString) {
  // 单引号转双引号
  jsonString = jsonString.replaceAll("'", '"');
  // 去除多余的逗号
  jsonString = jsonString.replace(/,\W+\}/g, (word) => word.replaceAll(',', ''));

  return jsonString.replace(/"\w+":/g, (word) => word.replaceAll('"', ''));
}
export function addJsonStringPropQuot(jsonString) {
  jsonString = jsonString.replaceAll("'", '"');
  // 去除多余的逗号
  jsonString = jsonString.replace(/,\W+\}/g, (word) => word.replaceAll(',', ''));
  return jsonString.replace(/\w+:/g, (word) => {
    const key = word.replace(':', '');
    return `"${key}":`;
  });
}

// Json对象属性排序
export function jsonSort(jsonObj) {
  const arr = [];
  let result;
  // 数组不需要重新排序
  if (Array.isArray(jsonObj)) {
    result = [];
    jsonObj.forEach((item) => {
      if (item instanceof Object) item = jsonSort(item);
      result.push(item);
    });
  } else {
    // Object对象进行排序
    Object.keys(jsonObj).forEach((key) => arr.push(key));

    // for (const key in jsonObj) {
    //   arr.push(key);
    // }
    arr.sort();
    result = {};
    arr.forEach((key) => {
      let item = jsonObj[key];
      if (item instanceof Object) item = jsonSort(item);
      result[key] = item;
    });
  }
  return result;
}

// 展开
export function expandJsonString(jsonString) {
  return jsonString.replaceAll(',', ',\n').replaceAll('}', '\n}');
}
// 压缩
export function compressJsonString(jsonString) {
  return JSON.stringify(JSON.parse(jsonString));
}
