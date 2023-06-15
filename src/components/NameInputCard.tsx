import React, { useRef } from 'react';
import { Lang } from '../type';

interface Props {
  name: string;
  language: Lang;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

const NameInputCard = ({ name, setName, language }: Props) => {
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
      <div className="flex max-w-full h-full justify-center">
        <div className="card p-6 m-6 w-full min-w-fit max-w-md bg-secondary shadow-md shadow-primary">
          <input
            type="text"
            ref={inputRef}
            defaultValue={name}
            placeholder={
              language === Lang.eng
                ? 'Enter Your Name Here'
                : '이름을 이곳에 입력하세요'
            }
            className="input input-bordered input-primary max-w-md"
          />
          <label className="label">
            <span className="label-text-alt text-quaternary">
              {language === Lang.eng ? 'Upto 10 Characters' : '최대 7자'}
            </span>
          </label>
          <button
            className="btn btn-primary text-secondary mt-2"
            onClick={handleNameSubmit}
          >
            {language === Lang.eng ? 'Submit Name' : '이름 제출'}
          </button>
        </div>
      </div>
    </>
  );
};

export default NameInputCard;
