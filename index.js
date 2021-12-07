const inquirer = require('inquirer');

const rollDie = sides => {
	console.log(Math.floor(Math.random() * (sides - 1) + 1));
	diePrompt();
};

const diePrompt = () => {
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'dice',
				message: 'Select die:',
				choices: ['d6', 'd8', 'd10', 'd20', new inquirer.Separator(), 'Exit']
			}
		])
		.then(answers => {
			switch (answers.dice) {
				case 'd6':
					rollDie(6);
					break;
				case 'd8':
					rollDie(8);
					break;
				case 'd10':
					rollDie(10);
					break;
				case 'd20':
					rollDie(20);
					break;
				case 'Exit':
					console.log('Thanks for rolling!');
					break;
				default:
					console.log('Error');
			}
		});
};

diePrompt();
