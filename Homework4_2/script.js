let sports = [
	['skier', '⛷'],
	['snowboarder', '🏂'],
	['apple', '🍎'],
	['hockey', '🏒'],
	['ice skate', '⛸'],
	['swimmer', '🏊'],
	['surfer', '🏄‍'],
	['watermelon', '🍉'],
	['lemon', '🍋'],
	['rowboat', '🚣'],
	['bicyclist', '🚴‍'],
];


let winterSports = sports.slice(0, 5);
let summerSports = sports.slice(5, 12);

let fruit = [...winterSports.splice(2, 1), ...summerSports.splice(2, 2)];


function view(array, tittle) {
	console.log(`****${tittle}****`);
	for (let i = 0; i < array.length; i++) {
		console.log(array[i].join(': '));
	}
}

view(winterSports, "Winter Sports");
view(summerSports, "Summer Sports");
view(fruit, "Fruits");

