import idolList from '../idolList';
import { Idol } from '../type';

interface Props {
  setSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  selectedIdol: Idol | null;
  selectNumber: number;
}

const IdolSelector = ({
  selectedIdol,
  setSelectedIdol,
  selectNumber
}: Props) => {
  const onIdolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    if (typeof event.target.value === 'string') {
      const value = event.target.value;
      const foundIdol = idolList.find((idol) => idol.name === value);
      if (foundIdol) {
        setSelectedIdol(foundIdol);
      }
    }
  };

  const selectNo = (number: number) => {
    if (number === 1) {
      return '1st';
    } else if (number === 2) {
      return '2nd';
    } else if (number === 3) {
      return '3rd';
    } else {
      return number + 'th';
    }
  };

  return (
    <>
      <select
        className="select select-bordered w-48"
        defaultValue="null"
        onChange={onIdolChange}
      >
        <option disabled value="null">
          Select {selectNo(selectNumber)} Idol...
        </option>
        {idolList.map((idol) => (
          <option key={idol.name} value={idol.name}>
            {idol.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default IdolSelector;
