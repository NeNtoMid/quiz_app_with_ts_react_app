import { useState } from 'react';

import { useAppSelector } from './reduxTypes';

import { changeQuestion, fetchQuiz } from './../store/actions/index';

import { useDispatch } from 'react-redux';

const useApp = () => {
	const dispatch = useDispatch();

	const questions = useAppSelector((state) => state.questions);

	const [loading, setLoading] = useState<boolean>(false);

	const handleStartAndFetchQuiz = async () => {
		setLoading(true);
		dispatch(fetchQuiz());
		setLoading(false);
	};

	const handleChangeQuestion = (
		id: number,
		answer: string,
		correctAnswer: string
	) => {
		if (questions.clicked) return;

		const userAnswerIsProper = answer === correctAnswer;

		dispatch(changeQuestion(id, userAnswerIsProper));
	};

	return {
		questions,
		loading,
		handleStartAndFetchQuiz,
		handleChangeQuestion,
	};
};

export default useApp;
