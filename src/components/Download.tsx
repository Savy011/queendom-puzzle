import Konva from 'konva';
import { Lang } from '../type';

const DownloadButton = ({
  language,
  stageRef,
  saveData
}: {
  language: Lang;
  stageRef: React.RefObject<Konva.Stage>;
  saveData: () => void;
}) => {
  const downloadURI = (uri: string, name: string) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    const dataURL = stageRef.current?.toDataURL({
      mimeType: 'image/jpeg',
      pixelRatio: 3
    });
    if (dataURL === undefined || dataURL === '') {
      return window.alert('Some Error Occured');
    }
    console.log(dataURL);
    downloadURI(dataURL, 'QueendomPuzzle.png');
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
