export interface QuestionInterface {
	category: string;
	type: string;
	difficulty: string;
	question: string;
	correct_answer: string;
	incorrect_answers: string[];
	user_answer?: boolean;
	chosen?: string;
	answers: string[];
}

export interface QuestionsStateInterface {
	data: QuestionInterface[] | undefined;
	error: boolean;
	questionNum: number;
	score: number;
	clicked: boolean;
	isStarted: boolean;
	totalQuestions: number;
}

export interface AxiosResponseInterface {
	response_code: number;
	results: QuestionInterface[];
}
