import { call, put, takeEvery, delay } from 'redux-saga/effects';

import { AxiosResponseInterface } from '../../shared/interfaces/questions.interface';
import { ActionsType } from '../actions/actionsType';

import axios from './../../config/axios-config';

const fetchQuizData = async () => {
	return await axios.get<AxiosResponseInterface>('');
};

function* fetchQuiz() {
	try {
		const { data } = yield call(fetchQuizData);

		yield put({
			type: ActionsType.FETCH_QUESTIONS_SUCCESS,
			payload: {
				data,
			},
		});
	} catch ({ message }) {
		console.log(message);
		yield put({
			type: ActionsType.FETCH_QUESTIONS_FAIL,
			payload: { message },
		});
	}
}

function* changeQuestionNumber(action: any) {
	const {
		id,
		userAnswerIsProper,
	}: { id: number; userAnswerIsProper: string } = action.payload;

	yield put({
		type: ActionsType.CHANGE_QUESTION_NUMBER,
		payload: {
			id,
			userAnswerIsProper,
		},
	});

	yield delay(2500);

	yield put(changeQuestionView(userAnswerIsProper));
}

const changeQuestionView = (userAnswerIsProper: string) => ({
	type: ActionsType.CHANGE_QUESTION_VIEW,
	payload: {
		userAnswerIsProper,
	},
});

function* questionsSaga() {
	yield takeEvery(ActionsType.FETCH_QUESTIONS_REQUEST, fetchQuiz);
	yield takeEvery(ActionsType.CHANGE_QUESTION_REQUEST, changeQuestionNumber);
}

export default questionsSaga;
