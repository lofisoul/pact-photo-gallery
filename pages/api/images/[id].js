import path from 'path';
import {promises as fs} from 'fs';

export default async function handler(req, res) {
	//Find the absolute path of the json directory
	const jsonDirectory = path.join(process.cwd(), 'json');
	//Read the json data file data.json
	const fileContents = await fs.readFile(
		jsonDirectory + '/ContentObjects.json',
		'utf8',
	);

	const parseObj = JSON.parse(fileContents);
	const result = parseObj.data.results;

	console.log(req.query);

	const image = result.find(img => img.id === req.query.id);

	console.log('IMAAGE' + image);

	//Return the content of the data file in json format
	res.status(200).json(image);
}
