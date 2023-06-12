import Konva from 'konva';
import { Lang } from '../type';
import { canvasHeight, canvasWidth } from './Canvas';
import useWindowDimensions from '../services/hooks';

const DownloadButton = ({
  language,
  stageRef,
  saveData
}: {
  language: Lang;
  stageRef: React.RefObject<Konva.Stage>;
  saveData: () => void;
}) => {
  const windowDimensions = useWindowDimensions();

  const downloadURI = (uri: string, name: string) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    const dataURLPC = stageRef.current?.toDataURL({
      mimeType: 'image/png',
      width: canvasWidth,
      height: canvasHeight,
      pixelRatio: 2
    });

    const dataURLMobile = stageRef.current?.toDataURL({
      mimeType: 'image/png',
      width: canvasWidth,
      height: canvasHeight,
      pixelRatio: 4
    });

    if (
      dataURLPC === undefined ||
      dataURLPC === '' ||
      dataURLMobile === undefined ||
      dataURLMobile === ''
    ) {
      return window.alert('Some Error Occured');
    }

    if (windowDimensions.width >= 767) {
      downloadURI(dataURLPC, 'QueendomPuzzle.png');
    } else {
      downloadURI(dataURLMobile, 'QueendomPuzzle.png');
    }
    saveData();
  };

  return (
    <button
      className="btn btn-accent w-full text-secondary"
      onClick={handleDownload}
    >
      {language === Lang.eng ? 'Download Image' : '그룹을 다운로드하세요'}
    </button>
  );
};

export default DownloadButton;
