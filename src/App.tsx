import { useState } from 'react';
import idolList from './idolList';
import { Idol } from './type';

const App = () => {
	const [selectedIdol, setSelectedIdol] = useState<Idol | null>(null)

	const onIdolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		event.preventDefault();
		if (typeof event.target.value === "string") {
			const value = event.target.value;
			const foundIdol = idolList.find(idol => idol.name === value)
			if (foundIdol) {
				setSelectedIdol(foundIdol);
			}
		}
	};

	return (
		<div>
			<header>
				<p>Queendom Puzzle</p>
			</header>
			<select defaultValue='null' onChange={onIdolChange}>
				<option disabled value='null'>Select Idol...</option>
				{idolList.map(idol => (
					<option key={idol.name} value={idol.name}>{idol.name}</option>
				))}
			</select>
			<div>
				Selected Idol: {selectedIdol?.name}
				<img src={selectedIdol?.url} alt={selectedIdol?.url} />
			</div>
		</div>
	);
}

export default App;
