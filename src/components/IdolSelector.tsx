import { useEffect } from 'react';
import { Idol, Lang } from '../type';

interface Props {
  language: Lang;
  setSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  selectedIdol: Idol | null;
  selectNumber: number;
  idolList: Idol[];
}

const IdolSelector = ({
  language,
  selectedIdol,
  setSelectedIdol,
  selectNumber,
  idolList
}: Props) => {
  useEffect(() => {
    if (selectedIdol !== null) {
      const selectInput = document.getElementById(
        `select-input-${selectNumber}`
      ) as HTMLSelectElement;
      if (selectInput) {
        selectInput.value = selectedIdol.nameEng;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onIdolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    if (typeof event.target.value === 'string') {
      const value = event.target.value;
      const foundIdol = idolList.find((idol) => idol.nameEng === value);
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
        id={`select-input-${selectNumber}`}
        className="select select-bordered w-full select-primary bg-secondary text-quaternary"
        defaultValue="null"
        onChange={onIdolChange}
      >
        <option disabled value="null">
          {language === Lang.eng
            ? `Select ${selectNo(selectNumber)} Idol...`
            : `${selectNumber}번째 아이돌을 골라주세요`}
        </option>
        {idolList.map((idol) => (
          <option key={idol.nameEng} value={idol.nameEng}>
            {language === Lang.eng ? idol.nameEng : idol.nameKor}
          </option>
        ))}
      </select>
    </>
  );
};

export default IdolSelector;
