import { Switch } from '@headlessui/react';

interface Props {
  showLabels: boolean;
  setShowLabels: React.Dispatch<React.SetStateAction<boolean>>;
}

const LabelToggle = (props: Props) => {
  console.log(props.showLabels);
  return (
    <div className="form-control border-[1px] font-pretendard font-bold border-primary px-3 text-quaternary py-1 rounded-lg">
      <label className="label cursor-pointer justify-between">
        <span className="label-text">Name Labels</span>
        <Switch
          checked={props.showLabels}
          onChange={props.setShowLabels}
          className={`${
            props.showLabels
              ? 'bg-primary hover:bg-primary-focus'
              : 'bg-slate-600 hover:bg-slate-700'
          }
          relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            aria-hidden="true"
            className={`${props.showLabels ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none justify-center align-middle inline-block h-[21px] w-[21px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </label>
    </div>
  );
};

export default LabelToggle;
