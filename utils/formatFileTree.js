export function formatFileTree(parseObj, url) {
  const mapped = Object.entries(parseObj).map(([key, value]) => {
    let objUrl = !url ? `${value.id}` : `${url}/${value.id}`;
    const nextUrl = `album/[id]`;
    const noSpaceKey = key.replace(/\W+/g, "");
    return Object.assign(
      value.size !== 0 && !value.children
        ? {
            id: noSpaceKey,
            name: key,
            [noSpaceKey]: value,
            url: objUrl,
            nextUrl: nextUrl,
          }
        : {
            id: noSpaceKey,
            name: key,
            [noSpaceKey]: {
              ...value,
              children: formatFileTree(value.children, objUrl),
            },
            url: objUrl,
            nextUrl: nextUrl,
          }
    );
  });

  return mapped;
}

export function mapFolderChildren(obj) {
  const mapped = Object.entries(obj).map((item) => {
    const newObj = {};
    const noSpace = item[0].replace(/\s/g, "");
    newObj.id = noSpace;
    newObj.name = item[0];
    newObj[noSpace] = item[1];
    return newObj;
  });

  return mapped;
}
