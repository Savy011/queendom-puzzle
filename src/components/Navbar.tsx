import { Lang } from '../type';

interface Props {
  language: Lang;
  setLanguage: React.Dispatch<React.SetStateAction<Lang>>;
}

const Navbar = ({ language, setLanguage }: Props) => {
  return (
    <>
      <div className="navbar bg-secondary">
        <div className="flex-1 font-bold md:pl-3 md:py-3 pl-1 py-1">
          {language === Lang.eng ? (
            <button className="w-fit text-xl md:text-4xl text-primary font-abenda">
              Queendom Puzzle
            </button>
          ) : (
            <button className="w-fit text-3xl text-primary font-han">
              퀸덤 퍼즐
            </button>
          )}
        </div>
        <div className="join flex-none pr-1 md:pr-3 md:py-3 align-middle">
          <button
            className="btn btn-accent px-4 join-item text-secondary font-bold tooltip tooltip-bottom tooltip-accent"
            data-tip="English"
            onClick={(e) => setLanguage(Lang.eng)}
          >
            ENG
          </button>
          <button
            className="btn btn-accent px-4 join-item text-secondary font-bold tooltip tooltip-bottom tooltip-accent"
            data-tip="Korean"
            onClick={(e) => setLanguage(Lang.kor)}
          >
            한글
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
