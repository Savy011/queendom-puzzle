import { Lang } from '../type';

interface Props {
  language: Lang;
  setLanguage: React.Dispatch<React.SetStateAction<Lang>>;
}

const Navbar = ({ language, setLanguage }: Props) => {
  return (
    <>
      <div className="navbar bg-secondary">
        <div className="flex-1 text-4xl font-bold">
          {language === Lang.eng ? (
            <button className="align-middle w-fit text-3xl text-primary font-abenda">
              Queendom Puzzle
            </button>
          ) : (
            <button className="w-fit text-3xl text-primary font-han">
              퀸덤 퍼즐
            </button>
          )}
        </div>
        <div className="join flex-none">
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
            KOR
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
