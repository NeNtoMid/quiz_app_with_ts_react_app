export interface QuestionInterface {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
	user_answer?: boolean;
	chosen?: string;
	correctAnswerId: number;
}

export interface StateInterface {
	data: QuestionInterface[] | undefined;
	error: boolean;
	questionNum: number;
	score: number;
	clicked: boolean;
	loading: boolean;
}
