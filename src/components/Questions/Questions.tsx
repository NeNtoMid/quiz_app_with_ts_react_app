import React from 'react';

import * as Styles from './QuestionsStyle';

import Question from './Question/Question';

import { StateInterface } from '../../shared/interfaces/questions.interface';

import Spinner from './../UI/Spinner/Spinner';

interface QuestionsProps {
	changeQuestion: (id: number, answer: string, correctAnswer: string) => void;
	questions: StateInterface;
	loading: boolean;
}

const Questions = ({ changeQuestion, questions, loading }: QuestionsProps) => {
	let renderQuestion = null;

	if (questions.data) {
		renderQuestion = (
			<Question
				changeQuestion={changeQuestion}
				question={questions.data[questions.questionNum]}
				questionNum={questions.questionNum + 1}
			/>
		);
	}

	if (loading) {
		renderQuestion = <Spinner />;
	}
	return <Styles.Main>{renderQuestion}</Styles.Main>;
};

export default Questions;
