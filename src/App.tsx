import { useState, useRef } from 'react';
import { Idol, Lang } from './type';
import idolList from './idolList';
import Navbar from './components/Navbar';
import InputCard from './components/InputCard';
import Preview from './components/Preview';
import NameInputCard from './components/NameInputCard';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';
import { theme } from './theme';
import Konva from 'konva';

const App = () => {
  const [name, setName] = useState('');
  const [firstSelectedIdol, setFirstSelectedIdol] = useState<Idol | null>(null);
  const [secondSelectedIdol, setSecondSelectedIdol] = useState<Idol | null>(
    null
  );
  const [thirdSelectedIdol, setThirdSelectedIdol] = useState<Idol | null>(null);
  const [forthSelectedIdol, setForthSelectedIdol] = useState<Idol | null>(null);
  const [fifthSelectedIdol, setFifthSelectedIdol] = useState<Idol | null>(null);
  const [sixthSelectedIdol, setSixthSelectedIdol] = useState<Idol | null>(null);
  const [seventhSelectedIdol, setSeventhSelectedIdol] = useState<Idol | null>(
    null
  );
  const [language, setLanguage] = useState<Lang>(Lang.eng);

  const stageRef = useRef<Konva.Stage>(null);

  return (
    <div className="h-full w-full">
      <Navbar language={language} setLanguage={setLanguage} />
      {name === '' ? (
        <NameInputCard name={name} setName={setName} />
      ) : (
        <div className="grid grid-flow-row sm:grid-flow-col w-full p-5 justify-around sm:justify-evenly">
          <InputCard
            language={language}
            idolList={idolList}
            name={name}
            setName={setName}
            stageRef={stageRef}
            firstSelectedIdol={firstSelectedIdol}
            secondSelectedIdol={secondSelectedIdol}
            thirdSelectedIdol={thirdSelectedIdol}
            forthSelectedIdol={forthSelectedIdol}
            fifthSelectedIdol={fifthSelectedIdol}
            sixthSelectedIdol={sixthSelectedIdol}
            seventhSelectedIdol={seventhSelectedIdol}
            setFirstSelectedIdol={setFirstSelectedIdol}
            setSecondSelectedIdol={setSecondSelectedIdol}
            setThirdSelectedIdol={setThirdSelectedIdol}
            setForthSelectedIdol={setForthSelectedIdol}
            setFifthSelectedIdol={setFifthSelectedIdol}
            setSixthSelectedIdol={setSixthSelectedIdol}
            setSeventhSelectedIdol={setSeventhSelectedIdol}
          />
          <Preview
            stageRef={stageRef}
            name={name}
            language={language}
            firstSelectedIdol={firstSelectedIdol}
            secondSelectedIdol={secondSelectedIdol}
            thirdSelectedIdol={thirdSelectedIdol}
            forthSelectedIdol={forthSelectedIdol}
            fifthSelectedIdol={fifthSelectedIdol}
            sixthSelectedIdol={sixthSelectedIdol}
            seventhSelectedIdol={seventhSelectedIdol}
          />
        </div>
      )}
      <ScrollToTop
        smooth
        component={
          <button className="btn btn-square bg-primary">
            <FontAwesomeIcon
              icon={faArrowUpLong}
              style={{ color: theme.Secondary }}
            />
          </button>
        }
      />
    </div>
  );
};

export default App;
