import { Stage, Layer, Image, Text } from 'react-konva';
import { Idol, Lang } from '../type';
import useImage from 'use-image';

interface Props {
  selectedIdol: Idol | null;
  language: Lang;
}

const Canvas = ({ selectedIdol, language }: Props) => {
  let url;

  if (selectedIdol === null) {
    url =
      'https://github.com/Savy011/queendom-puzzle/blob/main/.github/images/members_images/placeholder.png';
  } else {
    url = selectedIdol.url;
  }
  const [idolImage] = useImage(url);
  const [bgImage] = useImage(language);

  const stageDetails = {
    width: 450,
    height: 450,
    x: 0,
    y: 0
  };
  const firstImageDetails = {
    originalDimensions: {
      width: 0,
      height: 0
    },
    renderDimensions: {
      width: 103.5,
      height: 103.5
    },
    position: {
      x: 173,
      y: 79
    }
  };
  const textDetails = {
    name: {
      value: 'Savy',
      id: 'user-name',
      dimensions: {
        width: 100,
        height: 50
      },
      position: {
        x: 50,
        y: 50
      }
    }
  };

  return (
    <Stage
      width={stageDetails.width}
      height={stageDetails.height}
      style={{ position: 'relative' }}
    >
      <Layer>
        <Image
          image={bgImage}
          width={stageDetails.width}
          height={stageDetails.height}
          x={0}
          y={0}
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 100 }}
        />

        <Image
          image={idolImage}
          width={firstImageDetails.renderDimensions.width}
          height={firstImageDetails.renderDimensions.height}
          x={firstImageDetails.position.x}
          y={firstImageDetails.position.y}
        />

        <Text
          text={textDetails.name.value}
          width={textDetails.name.dimensions.width}
          height={textDetails.name.dimensions.height}
          x={textDetails.name.position.x}
          y={textDetails.name.position.y}
        />
      </Layer>
    </Stage>
  );
};

export default Canvas;
