import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Lang } from '../type';
import { faBars, faEye } from '@fortawesome/free-solid-svg-icons';

interface Props {
  setLanguage: React.Dispatch<React.SetStateAction<Lang>>;
  toolTipPos?: string;
}

const LangButton = (props: Props) => {
  return (
    <div className="join flex md:pr-3 md:py-3 m-1 align-middle justify-center">
      <button
        className={`btn btn-accent pl-4 join-item text-secondary font-bold tooltip ${props.toolTipPos} tooltip-accent justify-start`}
        data-tip="English"
        onClick={(e) => props.setLanguage(Lang.eng)}
      >
        ENG
      </button>
      <button
        className={`btn btn-accent pr-4 join-item text-secondary font-bold tooltip ${props.toolTipPos} tooltip-accent flex-nowrap`}
        data-tip="Korean"
        onClick={(e) => props.setLanguage(Lang.kor)}
      >
        한글
      </button>
    </div>
  );
};

export const PCMenu = ({ setLanguage }: Props) => {
  return (
    <div>
      <div className="stat bg-primary rounded-lg py-1 px-4 mr-6">
        <div className="stat-title text-xs text-tertiary">
          Total App Visitors
        </div>
        <div className="stat-value text-base text-secondary">0</div>
      </div>
      <LangButton setLanguage={setLanguage} toolTipPos="tooltip-bottom" />
    </div>
  );
};

export const MobileMenu = (props: Props) => {
  return (
    <div className="dropdown dropdown-end dropdown-hover mr-2">
      <label
        tabIndex={0}
        className="btn btn-primary btn-square m-1 text-secondary"
      >
        <FontAwesomeIcon icon={faBars} />
      </label>
      <ul
        tabIndex={0}
        className="z-40 dropdown-content menu p-2 shadow bg-base-100 rounded-box w-fit backdrop-blur-xl"
      >
        <li>
          <button className="btn btn-primary btn-ghost flex m-4 align-middle w-auto flex-nowrap">
            <FontAwesomeIcon icon={faEye} />
            Visitors
          </button>
        </li>
        <li>
          <LangButton
            setLanguage={props.setLanguage}
            toolTipPos="tooltip-top"
          />
        </li>
      </ul>
    </div>
  );
};
