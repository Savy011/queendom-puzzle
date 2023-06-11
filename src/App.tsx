import { useState } from 'react';
import { Idol, Lang } from './type';
import Canvas from './components/Canvas';
import IdolsSelection from './components/IdolsSelection';
import idolList from './idolList';

const App = () => {
  const [firstSelectedIdol, setFirstSelectedIdol] = useState<Idol | null>(null);
  const [secondSelectedIdol, setSecondSelectedIdol] = useState<Idol | null>(
    null
  );
  const [thirdSelectedIdol, setThirdSelectedIdol] = useState<Idol | null>(null);
  const [forthSelectedIdol, setForthSelectedIdol] = useState<Idol | null>(null);
  const [fifthSelectedIdol, setFifthSelectedIdol] = useState<Idol | null>(null);
  const [sixthSelectedIdol, setSixthSelectedIdol] = useState<Idol | null>(null);
  const [name, setName] = useState('');
  const [seventhSelectedIdol, setSeventhSelectedIdol] = useState<Idol | null>(
    null
  );
  const [language, setLanguage] = useState<Lang>(Lang.eng);

  return (
    <div className="bg-tertiary h-full">
      <div className="navbar bg-secondary">
        <div className="flex-1 text-3xl font-bold text-primary">
          {language === Lang.eng ? (
            <p className="font-abenda align-middle">Queendom Puzzle</p>
          ) : (
            <p className="font-han">퀸덤 퍼즐</p>
          )}
        </div>
        <div className="join flex-none">
          <button
            className="btn btn-accent px-4 join-item tooltip tooltip-bottom tooltip-accent"
            data-tip="English"
            onClick={(e) => setLanguage(Lang.eng)}
          >
            ENG
          </button>
          <button

            className="btn btn-accent px-4 join-item tooltip tooltip-bottom tooltip-accent"
            data-tip="Korean"
            onClick={(e) => setLanguage(Lang.kor)}
          >
            KOR
          </button>
        </div>
      </div>
      <div className="flex flex-row w-full p-5">
        <div className="card bg-secondary p-4 shadow-md shadow-primary w-1/5">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name Here"
            className="input input-bordered input-primary"
          />
          <IdolsSelection
            language={language}
            idolList={idolList}
            firstSelectedIdol={firstSelectedIdol}
            setFirstSelectedIdol={setFirstSelectedIdol}
            secondSelectedIdol={secondSelectedIdol}
            setSecondSelectedIdol={setSecondSelectedIdol}
            thirdSelectedIdol={thirdSelectedIdol}
            setThirdSelectedIdol={setThirdSelectedIdol}
            forthSelectedIdol={forthSelectedIdol}
            setForthSelectedIdol={setForthSelectedIdol}
            fifthSelectedIdol={fifthSelectedIdol}
            setFifthSelectedIdol={setFifthSelectedIdol}
            sixthSelectedIdol={sixthSelectedIdol}
            setSixthSelectedIdol={setSixthSelectedIdol}
            seventhSelectedIdol={seventhSelectedIdol}
            setSeventhSelectedIdol={setSeventhSelectedIdol}
          />
        </div>
        <div className="flex justify-end p-6 mx-4 border-textPrimary bg-secondary border-8 rounded-3xl">
          <Canvas
            name={name}
            firstSelectedIdol={firstSelectedIdol}
            secondSelectedIdol={secondSelectedIdol}
            thirdSelectedIdol={thirdSelectedIdol}
            forthSelectedIdol={forthSelectedIdol}
            fifthSelectedIdol={fifthSelectedIdol}
            sixthSelectedIdol={sixthSelectedIdol}
            seventhSelectedIdol={seventhSelectedIdol}
            language={language}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
