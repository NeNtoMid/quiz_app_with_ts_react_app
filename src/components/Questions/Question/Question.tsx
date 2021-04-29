import React from 'react';

import * as Styles from './QuestionStyle';

const Question = () => {
	return (
		<Styles.Article>
			<h3>Question: 1/ 10</h3>
			<p>
				Which of the following movies was not based on a novel by Stephen King?
			</p>
			<button>Carrie</button>
			<button>Misery</button>
			<button>The Green Mile</button>
			<button>The Thing</button>
		</Styles.Article>
	);
};

export default Question;
