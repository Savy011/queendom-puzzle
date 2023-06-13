import Konva from 'konva';
import { Idol, Lang } from '../type';
import IdolsSelection from './IdolsSelection';
import DownloadButton from './Download';

interface Props {
  language: Lang;
  idolList: Idol[];
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  firstSelectedIdol: Idol | null;
  secondSelectedIdol: Idol | null;
  thirdSelectedIdol: Idol | null;
  forthSelectedIdol: Idol | null;
  fifthSelectedIdol: Idol | null;
  sixthSelectedIdol: Idol | null;
  seventhSelectedIdol: Idol | null;
  setFirstSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  setSecondSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  setThirdSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  setForthSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  setFifthSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  setSixthSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  setSeventhSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  stageRef: React.RefObject<Konva.Stage>;
  saveData: () => void;
}

const InputCard = (props: Props) => {
  return (
    <>
      <div className="card bg-secondary sm:mx-3 p-2 md:p-4 mb-16 md:mb-0 w-full min-w-fit max-w[512px] h-fit md:min-w-[512px] md:max-w-[512px] align-middle shadow-md shadow-primary">
        <IdolsSelection
          language={props.language}
          idolList={props.idolList}
          firstSelectedIdol={props.firstSelectedIdol}
          secondSelectedIdol={props.secondSelectedIdol}
          thirdSelectedIdol={props.thirdSelectedIdol}
          forthSelectedIdol={props.forthSelectedIdol}
          fifthSelectedIdol={props.fifthSelectedIdol}
          sixthSelectedIdol={props.sixthSelectedIdol}
          seventhSelectedIdol={props.seventhSelectedIdol}
          setFirstSelectedIdol={props.setFirstSelectedIdol}
          setSecondSelectedIdol={props.setSecondSelectedIdol}
          setThirdSelectedIdol={props.setThirdSelectedIdol}
          setForthSelectedIdol={props.setForthSelectedIdol}
          setFifthSelectedIdol={props.setFifthSelectedIdol}
          setSixthSelectedIdol={props.setSixthSelectedIdol}
          setSeventhSelectedIdol={props.setSeventhSelectedIdol}
        />
        <DownloadButton
          language={props.language}
          stageRef={props.stageRef}
          saveData={props.saveData}
        />
      </div>
    </>
  );
};

export default InputCard;
