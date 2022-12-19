import path from "path";
import { promises as fs } from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import { formatFileTree } from "../../utils/formatFileTree";

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
  const mapped = formatFileTree(parseObj.data);

  //Return the content of the data file in json format
  res.status(200).json(mapped);
}
