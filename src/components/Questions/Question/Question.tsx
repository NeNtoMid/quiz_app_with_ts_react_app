import React from 'react';

import * as Styles from './Question.styles';

import { QuestionInterface } from '../../../shared/interfaces/questions.interface';

interface QuestionProps {
	changeQuestion: (id: number, answer: string, correctAnswer: string) => void;
	question: QuestionInterface;
	questionNum: number;
	totalQuestions: number;
}

const Question = ({
	changeQuestion,
	question,
	questionNum,
	totalQuestions,
}: QuestionProps) => {
	const questionAnswers = [...question.incorrect_answers];

	questionAnswers.splice(question.correctAnswerId, 0, question.correct_answer);
	return (
		<Styles.Article>
			<h3>
				Question: {questionNum} / {totalQuestions}
			</h3>
			<p dangerouslySetInnerHTML={{ __html: question.question }} />
			{questionAnswers.map((el, index) => {
				let userAnswer = undefined;

				if (question.user_answer) {
					userAnswer = true;
				} else if (question.user_answer === false) {
					userAnswer = false;
				}
				return (
					<Styles.Button
						onClick={() => changeQuestion(index, el, question.correct_answer)}
						key={el}
						correctAnswerIsSelected={userAnswer}
						correctAnswer={question.correct_answer}
						answer={el}
						chosen={question.chosen}
						index={index}
						value={el}
						dangerouslySetInnerHTML={{ __html: el }}
					/>
				);
			})}
		</Styles.Article>
	);
};

export default Question;
