import produce from 'immer';

import { ActionsType } from './../actions/actionsType';

import {
	AxiosResponseInterface,
	QuestionsStateInterface,
} from './../../shared/interfaces/questions.interface';

type Actions =
	| {
			type: ActionsType.FETCH_QUESTIONS_SUCCESS;
			payload: { data: AxiosResponseInterface };
	  }
	| {
			type: ActionsType.CHANGE_QUESTION_NUMBER;
			payload: { id: number; userAnswerIsProper: boolean };
	  }
	| {
			type: ActionsType.CHANGE_QUESTION_VIEW;
			payload: { userAnswerIsProper: boolean };
	  };

const fetchQuestionsSuccess = (
	draft: QuestionsStateInterface,
	actionPayload: { data: AxiosResponseInterface }
) => {
	draft.data = actionPayload.data.results.map((el) => ({
		...el,
		answers: [...el.incorrect_answers, el.correct_answer].sort(
			() => Math.random() - 0.5
		),
	}));

	draft.totalQuestions = actionPayload.data.results.length;
	draft.error = actionPayload.data.response_code !== 0;

	draft.score = 0;
	draft.questionNum = 0;
	draft.isStarted = true;
	draft.clicked = false;
};

const changeQuestionNumber = (
	draft: QuestionsStateInterface,
	actionPayload: { id: number; userAnswerIsProper: boolean }
) => {
	draft.data = draft.data?.map((el, index) => {
		if (index === draft.questionNum) {
			el.user_answer = actionPayload.userAnswerIsProper;
			el.chosen = actionPayload.id.toString();
		}
		return { ...el };
	});

	draft.clicked = true;
	draft.isStarted = draft.questionNum === 9 ? false : true;
};

const changeQuestionView = (
	draft: QuestionsStateInterface,
	actionPayload: { userAnswerIsProper: boolean }
) => {
	draft.questionNum =
		draft.questionNum < 9 ? draft.questionNum + 1 : draft.questionNum;

	draft.score = actionPayload.userAnswerIsProper
		? draft.score + 1
		: draft.score;
	draft.clicked = false;
};

const initialState = {
	data: undefined,
	error: false,
	questionNum: 0,
	score: 0,
	clicked: false,
	isStarted: false,
	totalQuestions: 0,
};

const questionsReducer = (state = initialState, action: Actions) => {
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
		}
	});
};

export default questionsReducer;
