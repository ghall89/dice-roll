const inquirer = require('inquirer');

const rollDie = (sides, amount) => {
	for (let i = 0; i < amount; i++) {
		console.log(Math.floor(Math.random() * (sides - 1) + 1));
	}
	diePrompt();
};

const diePrompt = () => {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'dice',
				message: 'Select die:',
				choices: ['d6', 'd8', 'd10', 'd20']
			},
			{
				type: 'number',
				name: 'num',
				message: 'How many dice?',
				default: 1
			}
		])
		.then(answers => {
			switch (answers.dice) {
				case 'd6':
					rollDie(6, answers.num);
					break;
				case 'd8':
					rollDie(8, answers.num);
					break;
				case 'd10':
					rollDie(10, answers.num);
					break;
				case 'd20':
					rollDie(20, answers.num);
					break;
				default:
					console.log('Error');
			}
		});
};

diePrompt();
