import { Idol, Lang } from '../type';
import IdolSelector from './IdolSelector';

interface Props {
  language: Lang;
  firstSelectedIdol: Idol | null;
  setFirstSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  secondSelectedIdol: Idol | null;
  setSecondSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  thirdSelectedIdol: Idol | null;
  setThirdSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  forthSelectedIdol: Idol | null;
  setForthSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  fifthSelectedIdol: Idol | null;
  setFifthSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  sixthSelectedIdol: Idol | null;
  setSixthSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  seventhSelectedIdol: Idol | null;
  setSeventhSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  idolList: Idol[];
}

const IdolsSelection = (props: Props) => {
  return (
    <div>
      <div className="p-1" />
      <div className="flex flex-col">
        <IdolSelector
          language={props.language}
          selectedIdol={props.firstSelectedIdol}
          setSelectedIdol={props.setFirstSelectedIdol}
          selectNumber={1}
          idolList={props.idolList}
        />
        <div className="p-1" />
        <IdolSelector
          language={props.language}
          selectedIdol={props.secondSelectedIdol}
          setSelectedIdol={props.setSecondSelectedIdol}
          selectNumber={2}
          idolList={props.idolList}
        />
        <div className="p-1" />
        <IdolSelector
          language={props.language}
          selectedIdol={props.thirdSelectedIdol}
          setSelectedIdol={props.setThirdSelectedIdol}
          selectNumber={3}
          idolList={props.idolList}
        />
        <div className="p-1" />
        <IdolSelector
          language={props.language}
          selectedIdol={props.forthSelectedIdol}
          setSelectedIdol={props.setForthSelectedIdol}
          selectNumber={4}
          idolList={props.idolList}
        />
        <div className="p-1" />
        <IdolSelector
          language={props.language}
          selectedIdol={props.fifthSelectedIdol}
          setSelectedIdol={props.setFifthSelectedIdol}
          selectNumber={5}
          idolList={props.idolList}
        />
        <div className="p-1" />
        <IdolSelector
          language={props.language}
          selectedIdol={props.sixthSelectedIdol}
          setSelectedIdol={props.setSixthSelectedIdol}
          selectNumber={6}
          idolList={props.idolList}
        />
        <div className="p-1" />
        <IdolSelector
          language={props.language}
          selectedIdol={props.seventhSelectedIdol}
          setSelectedIdol={props.setSeventhSelectedIdol}
          selectNumber={7}
          idolList={props.idolList}
        />
        <div className="p-1" />
      </div>
    </div>
  );
};

export default IdolsSelection;
