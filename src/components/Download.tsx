import Konva from 'konva';

const DownloadButton = ({
  stageRef
}: {
  stageRef: React.RefObject<Konva.Stage>;
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
      pixelRatio: 2
    });
    if (dataURL === undefined || dataURL === '') {
      return window.alert('Some Error Occured');
    }
    console.log(dataURL);
    downloadURI(dataURL, 'QueendomPuzzle.png');
  };

  return (
    <button
      className="btn btn-accent w-full text-secondary"
      onClick={handleDownload}
    >
      Download Image
    </button>
  );
};

export default DownloadButton;
