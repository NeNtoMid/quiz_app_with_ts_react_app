import produce from 'immer';

import { ActionsType } from './../actions/actionsType';

import {
	AxiosResponseInterface,
	QuestionsStateInterface,
} from './../../shared/interfaces/questions.interface';

interface Payload {
	data?: AxiosResponseInterface;
	message?: string;
	id?: number;
	userAnswerIsProper?: boolean;
}

export interface Action {
	type: ActionsType;
	payload?: Payload;
}

const initialState = {
	data: undefined,
	error: false,
	questionNum: 0,
	score: 0,
	clicked: false,
	isStarted: false,
	totalQuestions: 0,
};

const fetchQuestionsSuccess = (
	draft: QuestionsStateInterface,
	actionPayload: Payload | undefined
) => {
	let err = false;
	if (actionPayload && actionPayload.data) {
		err = actionPayload.data.response_code !== 0;

		draft.data = actionPayload.data.results.map((el) => ({
			...el,
			correctAnswerId: Math.floor(Math.random() * 3),
		}));

		draft.totalQuestions = actionPayload.data.results.length;
	}

	draft.error = err;

	draft.score = 0;
	draft.questionNum = 0;
	draft.isStarted = true;
	draft.clicked = false;
};

const changeQuestionNumber = (
	draft: QuestionsStateInterface,
	actionPayload: Payload | undefined
) => {
	if (actionPayload && actionPayload.userAnswerIsProper !== undefined) {
		draft.data = draft.data?.map((el, index) => {
			if (index === draft.questionNum) {
				el.user_answer = actionPayload.userAnswerIsProper;
				el.chosen = actionPayload.id?.toString();
			}
			return { ...el };
		});

		draft.clicked = true;
		draft.isStarted = draft.questionNum === 9 ? false : true;
	}
};

const changeQuestionView = (
	draft: QuestionsStateInterface,
	actionPayload: Payload | undefined
) => {
	draft.questionNum =
		draft.questionNum < 9 ? draft.questionNum + 1 : draft.questionNum;

	draft.score = actionPayload?.userAnswerIsProper
		? draft.score + 1
		: draft.score;
	draft.clicked = false;
};

const questionsReducer = (
	state: QuestionsStateInterface = initialState,
	action: Action
) => {
	return produce(state, (draft) => {
		switch (action.type) {
			case ActionsType.FETCH_QUESTIONS_SUCCESS:
				fetchQuestionsSuccess(draft, action.payload);

				break;

			case ActionsType.CHANGE_QUESTION_NUMBER:
				changeQuestionNumber(draft, action.payload);
				break;

			case ActionsType.CHANGE_QUESTION_VIEW:
				changeQuestionView(draft, action.payload);
				break;

			default:
				break;
		}
	});
};

export default questionsReducer;
