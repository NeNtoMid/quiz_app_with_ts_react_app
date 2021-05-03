import { useState, useCallback } from 'react';

import axios from './../config/axios-config';

import {
	QuestionInterface,
	StateInterface,
} from '../shared/interfaces/app.interface';

interface AxiosResponseInterface {
	response_code: number;
	results: QuestionInterface[];
}

const useApp = () => {
	const [questions, setQuestions] = useState<StateInterface>({
		data: undefined,
		error: false,
		questionNum: 0,
		score: 0,
		clicked: false,
		loading: false,
		isStarted: false,
	});

	const [loading, setLoading] = useState<boolean>(false);

	const handleStartAndFetchQuiz = async () => {
		try {
			const { data } = await axios.get<AxiosResponseInterface>('');

			setLoading(true);

			let err = false;

			if (data.response_code !== 0) {
				err = true;
			}

			setQuestions((prevState) => ({
				...prevState,
				data: data.results.map((el) => ({
					...el,
					correctAnswerId: Math.floor(Math.random() * 3),
				})),
				score: 0,
				questionNum: 0,
				error: err,
			}));
		} catch ({ message }) {
			console.log(message);
		} finally {
			setQuestions((prevState) => ({ ...prevState, isStarted: true }));
			setLoading(false);
		}
	};

	const handleChangeQuestionNum = useCallback(
		(id: number, answer: string, correctAnswer: string) => {
			if (questions.clicked) return;

			let userAnswerIsProper: boolean = false;

			if (answer === correctAnswer) {
				userAnswerIsProper = true;
			}

			setQuestions((prevState) => ({
				...prevState,

				data: prevState.data?.map((el, index) => {
					if (index === prevState.questionNum) {
						el.user_answer = userAnswerIsProper;
						el.chosen = id.toString();
					}

					return { ...el };
				}),
				clicked: true,
			}));
			setTimeout(() => {
				setQuestions((prevState) => ({
					...prevState,
					questionNum:
						prevState.questionNum < 9
							? prevState.questionNum + 1
							: prevState.questionNum,
					score: userAnswerIsProper ? prevState.score + 1 : prevState.score,
					isStarted: prevState.questionNum === 9 ? false : true,
					clicked: false,
				}));
			}, 3000);

			if (questions.questionNum === 9) {
				setQuestions((prevState) => ({
					...prevState,
					isStarted: false,
				}));
			}
		},
		[questions.questionNum, questions.clicked]
	);

	return {
		questions,
		loading,
		handleStartAndFetchQuiz,
		handleChangeQuestionNum,
	};
};

export default useApp;
