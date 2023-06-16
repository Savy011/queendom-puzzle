import { useEffect } from 'react';
import { Stage, Layer, Image, Text } from 'react-konva';
import { Idol, Lang } from '../type';
import useImage from 'use-image';
import { theme } from '../theme';
import Konva from 'konva';

export let canvasWidth: number;
export let canvasHeight: number;

interface Props {
  name: string;
  showLabels: boolean;
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
  'https://res.cloudinary.com/dobbtfy4u/image/upload/v1686730696/qdm-pzl/member_images/mmkhapvhyaczyfls85dx.png';

const nameLabelUrl =
  'https://res.cloudinary.com/dobbtfy4u/image/upload/v1686819500/qdm-pzl/name_label_q4rink.png';

const Canvas = ({
  name,
  showLabels,
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

  useEffect(() => {
    function canvasResizer() {
      const container = document.querySelector('.canvas-parent');

      if (container) {
        const computedStyle = getComputedStyle(container);
        let containerWidth = container.clientWidth;
        let containerHeight = container.clientHeight;

        containerWidth -=
          parseFloat(computedStyle.paddingLeft) +
          parseFloat(computedStyle.paddingRight);
        containerHeight -=
          parseFloat(computedStyle.paddingTop) +
          parseFloat(computedStyle.paddingBottom);

        canvasWidth = containerWidth;
        canvasHeight = containerHeight;
        const newScale = containerWidth / stageDetails.width;

        if (stageRef.current) {
          stageRef.current.scale({ x: newScale, y: newScale });
          stageRef.current.batchDraw();
        }
      }
    }

    canvasResizer();

    window.addEventListener('resize', canvasResizer);

    return () => {
      window.removeEventListener('resize', canvasResizer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  const [nameLabel] = useImage(nameLabelUrl, 'anonymous');

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
      x: 276.5,
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
      x: 173.5,
      y: 308
    }
  };

  const textDetails = {
    name: {
      value: name,
      FontFace: 'Pretendard',
      color: theme.textPrimary,
      size: 14,
      style: 'bold',
      id: 'user-name',
      dimensions: {
        width: 100,
        height: 50
      },
      position: {
        x: 350,
        y: 407
      }
    }
  };

  return (
    <Stage
      ref={stageRef}
      width={stageDetails.width}
      height={stageDetails.height}
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

      <Layer visible={showLabels}>
        <Image
          image={nameLabel}
          width={103.5}
          height={103.5}
          x={firstImageDetails.position.x + 0.5}
          y={firstImageDetails.position.y - 0.5}
        />
        <Text
          text={
            language === Lang.eng
              ? firstSelectedIdol?.nameEng.toUpperCase()
              : firstSelectedIdol?.nameKor
          }
          fontSize={10}
          width={70}
          fontVariant="600"
          align="center"
          fontFamily="Pretendard"
          fill={theme.white}
          x={190}
          y={158}
        />

        <Image
          image={nameLabel}
          width={103.5}
          height={103.5}
          x={secondImageDetails.position.x}
          y={secondImageDetails.position.y - 0.5}
        />
        <Text
          text={
            language === Lang.eng
              ? secondSelectedIdol?.nameEng.toUpperCase()
              : secondSelectedIdol?.nameKor
          }
          fontSize={10}
          width={70}
          fontVariant="600"
          align="center"
          fontFamily="Pretendard"
          fill={theme.white}
          x={87}
          y={262}
        />

        <Image
          image={nameLabel}
          width={103.5}
          height={103.5}
          x={thirdImageDetails.position.x}
          y={thirdImageDetails.position.y - 0.5}
        />
        <Text
          text={
            language === Lang.eng
              ? thirdSelectedIdol?.nameEng.toUpperCase()
              : thirdSelectedIdol?.nameKor
          }
          fontSize={10}
          width={70}
          fontVariant="600"
          align="center"
          fontFamily="Pretendard"
          fill={theme.white}
          x={190}
          y={262}
        />

        <Image
          image={nameLabel}
          width={103.5}
          height={103.5}
          x={forthImageDetails.position.x}
          y={forthImageDetails.position.y - 0.5}
        />
        <Text
          text={
            language === Lang.eng
              ? forthSelectedIdol?.nameEng.toUpperCase()
              : forthSelectedIdol?.nameKor
          }
          fontSize={10}
          width={70}
          fontVariant="600"
          align="center"
          fontFamily="Pretendard"
          fill={theme.white}
          x={293}
          y={262}
        />

        <Image
          image={nameLabel}
          width={103.5}
          height={103.5}
          x={fifthImageDetails.position.x}
          y={fifthImageDetails.position.y - 0.5}
        />
        <Text
          text={
            language === Lang.eng
              ? fifthSelectedIdol?.nameEng.toUpperCase()
              : fifthSelectedIdol?.nameKor
          }
          fontSize={10}
          width={70}
          fontVariant="600"
          align="center"
          fontFamily="Pretendard"
          fill={theme.white}
          x={138}
          y={324}
        />

        <Image
          image={nameLabel}
          width={103.5}
          height={103.5}
          x={sixthImageDetails.position.x}
          y={sixthImageDetails.position.y - 0.5}
        />
        <Text
          text={
            language === Lang.eng
              ? sixthSelectedIdol?.nameEng.toUpperCase()
              : sixthSelectedIdol?.nameKor
          }
          fontSize={10}
          width={70}
          fontVariant="600"
          align="center"
          fontFamily="Pretendard"
          fill={theme.white}
          x={241}
          y={324}
        />

        <Image
          image={nameLabel}
          width={103.5}
          height={103.5}
          x={seventhImageDetails.position.x}
          y={seventhImageDetails.position.y - 0.5}
        />
        <Text
          text={
            language === Lang.eng
              ? seventhSelectedIdol?.nameEng.toUpperCase()
              : seventhSelectedIdol?.nameKor
          }
          fontSize={10}
          width={70}
          fontVariant="600"
          align="center"
          fontFamily="Pretendard"
          fill={theme.white}
          x={190}
          y={386}
        />
      </Layer>
    </Stage>
  );
};

export default Canvas;
