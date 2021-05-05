import React from 'react';

import * as Styles from './Answers.styles';

import { QuestionInterface } from '../../../shared/interfaces/questions.interface';

interface AnswersProps {
	changeQuestion: (id: number, answer: string, correctAnswer: string) => void;
	question: QuestionInterface;
	questionNum: number;
	totalQuestions: number;
}

const Answers = ({
	changeQuestion,
	question,
	questionNum,
	totalQuestions,
}: AnswersProps) => (
	<Styles.Article>
		<h3>
			Question: {questionNum} / {totalQuestions}
		</h3>
		<p dangerouslySetInnerHTML={{ __html: question.question }} />
		{question.answers.map((el, index) => (
			<Styles.Button
				onClick={() => changeQuestion(index, el, question.correct_answer)}
				key={el}
				correctAnswerIsSelected={question.user_answer}
				correctAnswer={question.correct_answer}
				answer={el}
				chosen={question.chosen}
				index={index}
				value={el}
				dangerouslySetInnerHTML={{ __html: el }}
			/>
		))}
	</Styles.Article>
);

export default Answers;
