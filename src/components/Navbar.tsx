import useWindowDimensions from '../services/hooks';
import { Lang } from '../type';
import { MobileMenu, PCMenu } from './NavbarMenu';

interface Props {
  language: Lang;
  setLanguage: React.Dispatch<React.SetStateAction<Lang>>;
  visitors: number | null;
  users: number | null;
}

const Navbar = ({ language, setLanguage, visitors, users }: Props) => {
  const windowDimensions = useWindowDimensions();

  return (
    <>
      <div className="flow navbar max-h-fit bg-background bg-repeat flex justify-between">
        <div className="font-bold w-fit mr-2 md:pl-3 md:py-3">
          {language === Lang.eng ? (
            <button className="btn btn-ghost btn-disabled backdrop-blur-md flex w-full md:w-fit text-center justify-center items-center sm:m-auto text-3xl pt-2 md:text-4xl text-primary font-abenda whitespace-nowrap min-w-fit">
              Queendom Puzzle
            </button>
          ) : (
            <button className="btn btn-ghost btn-disabled backdrop-blur-md w-fit text-3xl text-primary font-han">
              퀸덤 퍼즐
            </button>
          )}
        </div>
        {windowDimensions.width >= 767 ? (
          <PCMenu setLanguage={setLanguage} visitors={visitors} users={users} />
        ) : (
          <MobileMenu
            setLanguage={setLanguage}
            visitors={visitors}
            users={users}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
