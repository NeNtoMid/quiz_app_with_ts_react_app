import axios from 'axios';

export const url: string =
	'https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple';

const instance = axios.create({
	baseURL: url,
});

export default instance;
