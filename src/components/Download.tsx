// @ts-nocheck
import Konva from 'konva';
import { Lang} from '../type';
import { canvasWidth } from './Canvas';
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

  const handleDownload = async () => {
    const dataURLPC = stageRef.current?.toDataURL({
      mimeType: 'image/png',
      width: canvasWidth,
      height: canvasWidth,
      pixelRatio: 3
    });

    const dataURLMobile = stageRef.current?.toDataURL({
      mimeType: 'image/png',
      width: canvasWidth,
      height: canvasWidth,
      pixelRatio: 4
    });

    if (
      dataURLPC === undefined ||
      dataURLPC === '' ||
      dataURLMobile === undefined ||
      dataURLMobile === ''
    ) {
      return window.alert('Some Error Occurred');
    }

    /*
    let queryResult: Array<userData> = [];
    const hashedAddress = await getHash();
    const querySnapshot = await getDocs(searchQuery(hashedAddress));
    querySnapshot.forEach((doc) => {
      queryResult.push(doc.data() as userData);
    });
    let newUniqueVisitorCount: number;
    if (queryResult.length === 0) {
      const visitorDoc = await getDoc(visitorsRef);

      newUniqueVisitorCount = visitorDoc.data()?.uniqueUsers + 1;
      await updateDoc(visitorsRef, { uniqueUsers: newUniqueVisitorCount });
    }
    */

    if (windowDimensions.width >= 767) {
      downloadURI(dataURLPC, 'QueendomPuzzle.png');
    } else {
      downloadURI(dataURLMobile, 'QueendomPuzzle.png');
    }
    saveData();
  };

  return (
    <div>
      <button
        className="btn btn-accent w-full text-secondary"
        onClick={handleDownload}
      >
        {language === Lang.eng ? 'Download Image' : '그룹을 다운로드하세요'}
      </button>
    </div>
  );
};

export default DownloadButton;
