import { RootState } from './../../config/redux-config';
import { ActionsType } from './actionsType';

import axios from './../../config/axios-config';

import { AxiosResponseInterface } from './../../shared/interfaces/questions.interface';

import { ThunkAction } from 'redux-thunk';

import { Action } from './../reducers/questions';

export const fetchQuiz = (): ThunkAction<void, RootState, unknown, Action> => {
	return async (dispatch) => {
		try {
			const { data } = await axios.get<AxiosResponseInterface>('');

			dispatch({
				type: ActionsType.FETCH_QUESTIONS_SUCCESS,
				payload: {
					data,
				},
			});
		} catch ({ message }) {
			console.log(message);
			dispatch({
				type: ActionsType.FETCH_QUESTIONS_FAIL,
				payload: { message },
			});
		}
	};
};

export const changeQuestionNumber = (
	id: number,
	userAnswerIsProper: boolean
): ThunkAction<void, RootState, unknown, Action> => {
	return async (dispatch) => {
		dispatch({
			type: ActionsType.CHANGE_QUESTION_NUMBER,
			payload: {
				id,
				userAnswerIsProper,
			},
		});

		setTimeout(() => {
			dispatch({
				type: ActionsType.CHANGE_QUESTION_VIEW,
				payload: {
					userAnswerIsProper,
				},
			});
		}, 2500);
	};
};
