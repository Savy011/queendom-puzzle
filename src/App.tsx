import { useState } from 'react';
import { Idol, Lang } from './type';
import IdolSelector from './components/IdolSelector';
import Canvas from './components/Canvas';

const App = () => {
  const [selectedIdol, setSelectedIdol] = useState<Idol | null>(null);
  const [language, setLanguage] = useState<Lang>(Lang.eng);

  return (
    <div>
      <div className="navbar">
        <div className="flex-1 font-abenda text-2xl font-bold">
          <p>Queendom Puzzle</p>
        </div>
        <div className="join flex-none">
          <button
            className="btn btn-square join-item tooltip tooltip-bottom"
            data-tip="English"
            onClick={(e) => setLanguage(Lang.eng)}
          >
            ENG
          </button>
          <button
            className="btn btn-square join-item tooltip tooltip-bottom"
            data-tip="Korean"
            onClick={(e) => setLanguage(Lang.kor)}
          >
            KOR
          </button>
        </div>
      </div>
      <div className="flex flex-row w-full p-5">
        <div className="card px-4 shadow-xl">
          <IdolSelector
            selectedIdol={selectedIdol}
            setSelectedIdol={setSelectedIdol}
            selectNumber={4}
          />
        </div>
        <div className="p-3 flex justify-end">
          <Canvas selectedIdol={selectedIdol} language={language} />
        </div>
      </div>
    </div>
  );
};

export default App;
