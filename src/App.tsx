import { useEffect, useState, useRef } from 'react';
import Konva from 'konva';
import { Idol, Lang, ParsedData } from './type';
import idolList from './idolList';
import Navbar from './components/Navbar';
import InputCard from './components/InputCard';
import Preview from './components/Preview';
import NameInputCard from './components/NameInputCard';
import AlertModal from './components/Alert';
import ScrollButton from './components/ScrollButton';
import Footer from './components/Footer';

const App = () => {
  const [name, setName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
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

  useEffect(() => {
    const previousData = localStorage.getItem('qdm-pzl');
    if (previousData !== null) {
      const parsedData: ParsedData = JSON.parse(previousData);
      setLanguage(parsedData.language);
      setIsOpen(true);
    }
  }, []);

  const saveToLocalStorage = () =>
    window.localStorage.setItem(
      'qdm-pzl',
      JSON.stringify({
        name,
        language,
        first: firstSelectedIdol,
        second: secondSelectedIdol,
        third: thirdSelectedIdol,
        forth: forthSelectedIdol,
        fifth: fifthSelectedIdol,
        sixth: sixthSelectedIdol,
        seventh: seventhSelectedIdol
      })
    );

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="h-full w-screen">
      <Navbar language={language} setLanguage={setLanguage} />
      {name === '' ? (
        <NameInputCard language={language} name={name} setName={setName} />
      ) : (
        <div className="grid grid-flow-row mt-6 mb-8 md:grid-flow-col w-screen px-5 justify-around sm:justify-evenly">
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
            saveData={saveToLocalStorage}
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
      <ScrollButton />
      <AlertModal
        isOpen={isOpen}
        language={language}
        openModal={openModal}
        closeModal={closeModal}
        setName={setName}
        setFirstSelectedIdol={setFirstSelectedIdol}
        setSecondSelectedIdol={setSecondSelectedIdol}
        setThirdSelectedIdol={setThirdSelectedIdol}
        setForthSelectedIdol={setForthSelectedIdol}
        setFifthSelectedIdol={setFifthSelectedIdol}
        setSixthSelectedIdol={setSixthSelectedIdol}
        setSeventhSelectedIdol={setSeventhSelectedIdol}
      />
      <Footer />
    </div>
  );
};

export default App;
