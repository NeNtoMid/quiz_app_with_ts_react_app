import { ActionsType } from './actionsType';

export const fetchQuiz = () => {
	return { type: ActionsType.FETCH_QUESTIONS_REQUEST };
};

export const changeQuestionNumber = (
	id: number,
	userAnswerIsProper: boolean
) => {
	return {
		type: ActionsType.CHANGE_QUESTION_REQUEST,
		payload: {
			id,
			userAnswerIsProper,
		},
	};
};
