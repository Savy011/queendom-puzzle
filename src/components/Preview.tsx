import { Idol, Lang } from '../type';
import Canvas from './Canvas';
import Konva from 'konva';

interface Props {
  language: Lang;
  name: string;
  firstSelectedIdol: Idol | null;
  secondSelectedIdol: Idol | null;
  thirdSelectedIdol: Idol | null;
  forthSelectedIdol: Idol | null;
  fifthSelectedIdol: Idol | null;
  sixthSelectedIdol: Idol | null;
  seventhSelectedIdol: Idol | null;
  stageRef: React.RefObject<Konva.Stage>;
}

const Preview = (props: Props) => {
  return (
    <div className="canvas-parent overflow-hidden flex mt-0 md:my-auto p-3 md:p-6 min-w-full aspect-square md:max-w-[450px] max-w-screen border-textPrimary bg-secondary border-8 rounded-3xl">
      <Canvas
        name={props.name}
        stageRef={props.stageRef}
        firstSelectedIdol={props.firstSelectedIdol}
        secondSelectedIdol={props.secondSelectedIdol}
        thirdSelectedIdol={props.thirdSelectedIdol}
        forthSelectedIdol={props.forthSelectedIdol}
        fifthSelectedIdol={props.fifthSelectedIdol}
        sixthSelectedIdol={props.sixthSelectedIdol}
        seventhSelectedIdol={props.seventhSelectedIdol}
        language={props.language}
      />
    </div>
  );
};

export default Preview;
