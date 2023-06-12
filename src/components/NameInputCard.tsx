import { useRef } from 'react';

interface Props {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const NameInputCard = ({ name, setName }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNameSubmit = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const inputValue = inputRef.current?.value;

    if (inputValue === undefined || inputValue === '') {
      return window.alert('Please Enter a Valid Name');
    }

    setName(inputValue);
  };

  return (
    <>
      <div className="flex card p-6 m-6 max-w-md justify-center bg-secondary shadow-md shadow-primary">
        <input
          type="text"
          ref={inputRef}
          defaultValue={name}
          placeholder="Enter Your Name Here"
          className="input input-bordered input-primary w-full"
        />
        <label className="label">
          <span className="label-text-alt">Maximum of 7 characters 🥲</span>
        </label>
        <button
          className="btn btn-primary text-secondary mt-2"
          onClick={handleNameSubmit}
        >
          Submit Name
        </button>
      </div>
    </>
  );
};

export default NameInputCard;
