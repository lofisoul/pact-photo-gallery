import path from 'path';
import {promises as fs} from 'fs';
import type {NextApiRequest, NextApiResponse} from 'next';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	//Find the absolute path of the json directory
	const jsonDirectory = path.join(process.cwd(), 'json');
	//Read the json data file data.json
	const fileContents = await fs.readFile(
		jsonDirectory + '/ContentObjects.json',
		'utf8',
	);

	const parseObj = JSON.parse(fileContents);
	const result = parseObj.data.results;
	console.log(parseObj);
	console.log(result);
	console.log(req.query);

	const gallery = result.filter(item =>
		item.keyword.some(
			word => word.toLowerCase() === req.query.keyword.toLowerCase(),
		),
	);

	//Return the content of the data file in json format
	res.status(200).json(gallery);
}
