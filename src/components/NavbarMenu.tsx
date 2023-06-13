import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Lang } from '../type';
import { faBars, faEye, faUser } from '@fortawesome/free-solid-svg-icons';

interface Props {
  setLanguage: React.Dispatch<React.SetStateAction<Lang>>;
  toolTipPos?: string;
  visitors: number | null;
  users: number | null;
  join?: boolean;
}

const LangButton = (props: Omit<Props, 'visitors' | 'users'>) => {
  return (
    <div className="join flex md:pr-3 md:py-3 m-1 align-middle justify-center">
      <button
        className={`btn btn-accent pl-4 ${
          props.join ? 'join-item' : ''
        } md:border-tertiary md:border-2 text-secondary font-bold tooltip ${
          props.toolTipPos
        } tooltip-accent justify-start`}
        data-tip="English"
        onClick={(e) => props.setLanguage(Lang.eng)}
      >
        ENG
      </button>
      <button
        className={`btn btn-accent pr-4 ${
          props.join ? 'join-item' : ''
        } md:border-tertiary md:border-2 text-secondary font-bold tooltip ${
          props.toolTipPos
        } tooltip-accent flex-nowrap`}
        data-tip="Korean"
        onClick={(e) => props.setLanguage(Lang.kor)}
      >
        한국어
      </button>
    </div>
  );
};

export const PCMenu = ({ setLanguage, visitors, users }: Props) => {
  return (
    <div>
      <div className="stat bg-primary rounded-lg py-1 px-4 mr-6 text-center max-h-32 select-none">
        <div className="stat-title text-xs text-tertiary">App Visitors</div>
        <div className="stat-value text-sm text-secondary">
          {visitors ? (
            `${visitors}`
          ) : (
            <span className="loading loading-infinity loading-sm p-0" />
          )}
        </div>
      </div>
      <div className="stat bg-primary rounded-lg py-1 pr-4 mr-6 text-center max-h-32 select-none">
        <div className="stat-title text-xs text-tertiary">Unique Users</div>
        <div className="stat-value text-sm text-secondary">
          {users ? (
            `${users}`
          ) : (
            <span className="loading loading-infinity loading-sm p-0" />
          )}
        </div>
      </div>
      <LangButton setLanguage={setLanguage} toolTipPos="tooltip-bottom" join />
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
            {props.visitors ? (
              `${props.visitors}`
            ) : (
              <span className="loading loading-infinity loading-sm p-0" />
            )}
          </button>
        </li>
        <li>
          <button className="btn btn-primary btn-ghost flex m-4 align-middle w-auto flex-nowrap">
            <FontAwesomeIcon icon={faUser} />
            {props.users ? (
              `${props.users}`
            ) : (
              <span className="loading loading-infinity loading-sm p-0" />
            )}
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
