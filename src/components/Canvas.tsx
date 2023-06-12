import { Stage, Layer, Image, Text } from 'react-konva';
import { Idol, Lang } from '../type';
import useImage from 'use-image';
import { theme } from '../theme';
import Konva from 'konva';

interface Props {
  name: string;
  firstSelectedIdol: Idol | null;
  secondSelectedIdol: Idol | null;
  thirdSelectedIdol: Idol | null;
  forthSelectedIdol: Idol | null;
  fifthSelectedIdol: Idol | null;
  sixthSelectedIdol: Idol | null;
  seventhSelectedIdol: Idol | null;
  language: Lang;
  stageRef: React.RefObject<Konva.Stage>;
}

const placeholderUrl =
  'https://raw.githubusercontent.com/Savy011/queendom-puzzle/main/.github/images/members_images/placeholder.png';

const Canvas = ({
  name,
  firstSelectedIdol,
  secondSelectedIdol,
  thirdSelectedIdol,
  forthSelectedIdol,
  fifthSelectedIdol,
  sixthSelectedIdol,
  seventhSelectedIdol,
  stageRef,
  language
}: Props) => {
  let firstUrl;
  let secondUrl;
  let thirdUrl;
  let forthUrl;
  let fifthUrl;
  let sixthUrl;
  let seventhUrl;

  if (firstSelectedIdol === null) {
    firstUrl = placeholderUrl;
  } else {
    firstUrl = firstSelectedIdol.url;
  }

  if (secondSelectedIdol === null) {
    secondUrl = placeholderUrl;
  } else {
    secondUrl = secondSelectedIdol.url;
  }

  if (thirdSelectedIdol === null) {
    thirdUrl = placeholderUrl;
  } else {
    thirdUrl = thirdSelectedIdol.url;
  }

  if (forthSelectedIdol === null) {
    forthUrl = placeholderUrl;
  } else {
    forthUrl = forthSelectedIdol.url;
  }

  if (fifthSelectedIdol === null) {
    fifthUrl = placeholderUrl;
  } else {
    fifthUrl = fifthSelectedIdol.url;
  }

  if (sixthSelectedIdol === null) {
    sixthUrl = placeholderUrl;
  } else {
    sixthUrl = sixthSelectedIdol.url;
  }

  if (seventhSelectedIdol === null) {
    seventhUrl = placeholderUrl;
  } else {
    seventhUrl = seventhSelectedIdol.url;
  }

  const [firstIdolImage] = useImage(firstUrl, 'anonymous', 'no-referrer');
  const [secondIdolImage] = useImage(secondUrl, 'anonymous');
  const [thirdIdolImage] = useImage(thirdUrl, 'anonymous');
  const [forthIdolImage] = useImage(forthUrl, 'anonymous');
  const [fifthIdolImage] = useImage(fifthUrl, 'anonymous');
  const [sixthIdolImage] = useImage(sixthUrl, 'anonymous');
  const [seventhIdolImage] = useImage(seventhUrl, 'anonymous');
  const [bgImage] = useImage(language, 'anonymous');

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

  const secondImageDetails = {
    originalDimensions: {
      width: 0,
      height: 0
    },
    renderDimensions: {
      width: 103.5,
      height: 103.5
    },
    position: {
      x: 70.5,
      y: 183
    }
  };

  const thirdImageDetails = {
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
      y: 183
    }
  };

  const forthImageDetails = {
    originalDimensions: {
      width: 0,
      height: 0
    },
    renderDimensions: {
      width: 103.5,
      height: 103.5
    },
    position: {
      x: 276,
      y: 183
    }
  };

  const fifthImageDetails = {
    originalDimensions: {
      width: 0,
      height: 0
    },
    renderDimensions: {
      width: 103.5,
      height: 103.5
    },
    position: {
      x: 122,
      y: 245.5
    }
  };

  const sixthImageDetails = {
    originalDimensions: {
      width: 0,
      height: 0
    },
    renderDimensions: {
      width: 103.5,
      height: 103.5
    },
    position: {
      x: 224.5,
      y: 245.5
    }
  };

  const seventhImageDetails = {
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
      y: 308
    }
  };

  const textDetails = {
    name: {
      value: name,
      FontFace: 'Abenda',
      color: theme.textPrimary,
      size: 20,
      style: 'bold',
      id: 'user-name',
      dimensions: {
        width: 100,
        height: 50
      },
      position: {
        x: 353,
        y: 407
      }
    }
  };

  return (
    <Stage
      ref={stageRef}
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
          image={firstIdolImage}
          width={firstImageDetails.renderDimensions.width}
          height={firstImageDetails.renderDimensions.height}
          x={firstImageDetails.position.x}
          y={firstImageDetails.position.y}
        />

        <Image
          image={secondIdolImage}
          width={secondImageDetails.renderDimensions.width}
          height={secondImageDetails.renderDimensions.height}
          x={secondImageDetails.position.x}
          y={secondImageDetails.position.y}
        />

        <Image
          image={thirdIdolImage}
          width={thirdImageDetails.renderDimensions.width}
          height={thirdImageDetails.renderDimensions.height}
          x={thirdImageDetails.position.x}
          y={thirdImageDetails.position.y}
        />

        <Image
          image={forthIdolImage}
          width={forthImageDetails.renderDimensions.width}
          height={forthImageDetails.renderDimensions.height}
          x={forthImageDetails.position.x}
          y={forthImageDetails.position.y}
        />

        <Image
          image={fifthIdolImage}
          width={fifthImageDetails.renderDimensions.width}
          height={fifthImageDetails.renderDimensions.height}
          x={fifthImageDetails.position.x}
          y={fifthImageDetails.position.y}
        />

        <Image
          image={sixthIdolImage}
          width={sixthImageDetails.renderDimensions.width}
          height={sixthImageDetails.renderDimensions.height}
          x={sixthImageDetails.position.x}
          y={sixthImageDetails.position.y}
        />

        <Image
          image={seventhIdolImage}
          width={seventhImageDetails.renderDimensions.width}
          height={seventhImageDetails.renderDimensions.height}
          x={seventhImageDetails.position.x}
          y={seventhImageDetails.position.y}
        />

        <Text
          text={textDetails.name.value}
          fontFamily={textDetails.name.FontFace}
          fill={textDetails.name.color}
          fontSize={textDetails.name.size}
          fontStyle={textDetails.name.style}
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
