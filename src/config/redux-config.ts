import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import questionsReducer from './../store/reducers/questions';

import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
	questions: questionsReducer,
});

const composeEnhancers =
	process.env.NODE_ENV === 'development'
		? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;

export const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(reduxThunk))
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
