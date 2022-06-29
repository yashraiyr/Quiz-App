import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which of the following is a linear data structure?',
			answerOptions: [
				{ answerText: 'Array', isCorrect: true },
				{ answerText: 'AVL Trees', isCorrect: false },
				{ answerText: 'Binary Trees', isCorrect: false },
				{ answerText: 'Graphs', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is not the type of queue?',
			answerOptions: [
				{ answerText: 'Priority queue', isCorrect: false },
				{ answerText: 'Single Ended Queue', isCorrect: true },
				{ answerText: 'Circular queue', isCorrect: false },
				{ answerText: 'Ordinary queue', isCorrect: false },
			],
		},
		{
			questionText: 'What data structure is used for depth first traversal of a graph?',
			answerOptions: [
				{ answerText: 'Stack', isCorrect: true },
				{ answerText: 'Queue', isCorrect: false },
				{ answerText: 'List', isCorrect: false },
				{ answerText: 'None Of The Above', isCorrect: false },
			],
		},
		{
			questionText: 'Index of arrays in C programming langauge starts from',
			answerOptions: [
				{ answerText: 'Undefined', isCorrect: false },
				{ answerText: 'Either 0 or 1', isCorrect: false },
				{ answerText: '1', isCorrect: false },
				{ answerText: '0', isCorrect: true },
			],
		},
    {
			questionText: 'Which is the most appropriate data structure for reversing a word?',
			answerOptions: [
				{ answerText: 'Queue', isCorrect: false },
				{ answerText: 'Stack', isCorrect: true },
				{ answerText: 'Tree', isCorrect: false },
				{ answerText: 'Graph', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					Your final score is {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question - {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}