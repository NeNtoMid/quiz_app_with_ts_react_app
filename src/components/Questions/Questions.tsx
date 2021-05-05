import React from 'react';

import * as Styles from './Questions.styles';

import Question from './Question/Question';

import { QuestionsStateInterface } from '../../shared/interfaces/questions.interface';

import Spinner from './../UI/Spinner/Spinner';

interface QuestionsProps {
	changeQuestion: (id: number, answer: string, correctAnswer: string) => void;
	questions: QuestionsStateInterface;
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
				totalQuestions={questions.totalQuestions}
			/>
		);
	}

	if (loading) {
		renderQuestion = <Spinner />;
	}
	return <Styles.Main>{renderQuestion}</Styles.Main>;
};

export default Questions;
