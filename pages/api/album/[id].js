import path from "path";
import { promises as fs } from "fs";
import { formatFileTree } from "../../../utils/formatFileTree";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "json");
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/FileTree.json",
    "utf8"
  );

  const parseObj = JSON.parse(fileContents);
  const mapped = formatFileTree(parseObj.data, "");

  function findById(array, id) {
    for (const item of array) {
      if (item[item.id].id === id) return item;
      if (item[item.id].children?.length) {
        const innerResult = findById(item[item.id].children, id);
        if (innerResult) return innerResult;
      }
    }
  }

  const albumByID = findById(mapped, req.query.id);
  //Return the content of the data file in json format
  res.status(200).json(albumByID);
}
