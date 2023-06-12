import useWindowDimensions from '../services/hooks';
import { Lang } from '../type';
import { MobileMenu, PCMenu } from './NavbarMenu';

interface Props {
  language: Lang;
  setLanguage: React.Dispatch<React.SetStateAction<Lang>>;
}

const Navbar = ({ language, setLanguage }: Props) => {
  const windowDimensions = useWindowDimensions();

  return (
    <>
      <div className="navbar bg-secondary">
        <div className="flex-1 font-bold md:pl-3 md:py-3 pl-1 py-1">
          {language === Lang.eng ? (
            <button className="flex text-center w-fit text-xl md:text-4xl text-primary font-abenda">
              Queendom Puzzle
            </button>
          ) : (
            <button className="w-fit text-3xl text-primary font-han">
              퀸덤 퍼즐
            </button>
          )}
        </div>
        {windowDimensions.width >= 767 ? (
          <PCMenu setLanguage={setLanguage} />
        ) : (
          <MobileMenu setLanguage={setLanguage} />
        )}
      </div>
    </>
  );
};

export default Navbar;
