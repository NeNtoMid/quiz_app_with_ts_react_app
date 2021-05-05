import React from 'react';

import * as Styles from './Question.styles';

import Answers from './Answers/Answers';

import { QuestionsStateInterface } from '../../shared/interfaces/questions.interface';

import Spinner from '../UI/Spinner/Spinner';

interface QuestionProps {
	changeQuestion: (id: number, answer: string, correctAnswer: string) => void;
	questions: QuestionsStateInterface;
	loading: boolean;
}

const Question = ({ changeQuestion, questions, loading }: QuestionProps) => {
	return (
		<Styles.Main>
			{loading && <Spinner />}
			{questions.data && (
				<Answers
					changeQuestion={changeQuestion}
					question={questions.data[questions.questionNum]}
					questionNum={questions.questionNum + 1}
					totalQuestions={questions.totalQuestions}
				/>
			)}
		</Styles.Main>
	);
};

export default Question;
