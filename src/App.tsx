import { useEffect, useState, useRef } from 'react';
import Konva from 'konva';
import {
  addDoc,
  doc,
  getCountFromServer,
  getDocs,
  onSnapshot,
  runTransaction,
  setDoc
} from 'firebase/firestore';
import { Idol, Lang, ParsedData, userData } from './type';
import idolList from './idolList';
import Navbar from './components/Navbar';
import InputCard from './components/InputCard';
import Preview from './components/Preview';
import NameInputCard from './components/NameInputCard';
import AlertModal from './components/Alert';
import ScrollButton from './components/ScrollButton';
import Footer from './components/Footer';
import {
  firestore,
  getHash,
  searchQuery,
  usersRef,
  visitorsRef
} from './services/firestore';

const App = () => {
  const [name, setName] = useState('');
  const [visitors, setVisitors] = useState<number | null>(null);
  const [users, setUsers] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
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
    const getVisitors = async () => {
      onSnapshot(visitorsRef, (doc) => {
        if (doc.exists()) {
          setVisitors(doc.data().totalPageVisits);
        } else {
          console.log('No Such Document');
        }
      });
    };

    const getUsers = async () => {
      const snapshot = await getCountFromServer(usersRef);
      setUsers(snapshot.data().count);
    };

    const getData = async () => {
      let userToUpdate: string;
      await runTransaction(firestore, async (transaction) => {
        const visitorDoc = await transaction.get(visitorsRef);
        if (visitorDoc.exists()) {
          const hashedAddress = await getHash();

          const querySnapshot = await getDocs(searchQuery(hashedAddress));
          let queryResult: Array<userData> = [];
          querySnapshot.forEach((doc) => {
            userToUpdate = doc.id;
            queryResult.push(doc.data() as userData);
          });

          if (queryResult.length === 0) {
            const newAddress = {
              userAddress: hashedAddress,
              firstVisitedAt: new Date(),
              lastVisitedAt: new Date()
            };
            const newVisitorCount: number =
              visitorDoc.data().totalPageVisits + 1;

            await addDoc(usersRef, newAddress);

            transaction.update(visitorsRef, {
              totalPageVisits: newVisitorCount
            });
          } else {
            await setDoc(
              doc(firestore, `counters/visitors/users/${userToUpdate}`),
              { lastVisitedAt: new Date() },
              { merge: true }
            );
            const newVisitorCount: number =
              visitorDoc.data().totalPageVisits + 1;
            transaction.update(visitorsRef, {
              totalPageVisits: newVisitorCount
            });
          }
        } else {
          console.error('error occurred while fetching visitor count');
        }
      });
    };

    try {
      getData();
      getVisitors();
      getUsers();
    } catch (e) {
      console.log(e);
    }

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
    <div className="h-full w-screen font-pretendard">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        visitors={visitors}
        users={users}
      />
      {name === '' ? (
        <NameInputCard language={language} name={name} setName={setName} />
      ) : (
        <div className="grid grid-flow-row mt-6 mb-8 md:grid-flow-col w-screen px-5 justify-around md:justify-around sm:justify-evenly">
          <InputCard
            showLabels={showLabels}
            setShowLabels={setShowLabels}
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
            showLabels={showLabels}
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
