import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Lang, ParsedData, Idol } from '../type';

interface Props {
  language: Lang;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setFirstSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  setSecondSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  setThirdSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  setForthSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  setFifthSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  setSixthSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
  setSeventhSelectedIdol: React.Dispatch<React.SetStateAction<Idol | null>>;
}

const AlertModal = ({
  language,
  isOpen,
  openModal,
  closeModal,
  ...props
}: Props) => {
  const handleLoadClick = () => {
    const foundData = window.localStorage.getItem('qdm-pzl');

    if (foundData) {
      const parsedData: ParsedData = JSON.parse(foundData);
      props.setName(parsedData.name);
      props.setFirstSelectedIdol(parsedData.first);
      props.setSecondSelectedIdol(parsedData.second);
      props.setThirdSelectedIdol(parsedData.third);
      props.setForthSelectedIdol(parsedData.forth);
      props.setFifthSelectedIdol(parsedData.fifth);
      props.setSixthSelectedIdol(parsedData.sixth);
      props.setSeventhSelectedIdol(parsedData.seventh);
    }

    closeModal();
  };

  const handleCancelClick = () => {
    const deletels = () => window.localStorage.removeItem('qdm-pzl');
    closeModal();
    deletels();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 backdrop-blur-sm" aria-hidden="true" />
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="fixed inset-0 flex items-center justify-center p-4">
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-secondary border-2 border-primary p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-primary"
                    >
                      {language === Lang.eng
                        ? 'Previous group data found!'
                        : '이전 그룹의 데이터를 찾았어요!'}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-quaternary">
                        To continue, select 'Load' to load your previous group.
                        Alternatively, choose 'Cancel' to delete your previous
                        group and start fresh.
                      </p>
                    </div>
                    <div className="flex flex-row w-full">
                      <div className="mt-4 flex pl-0 w-full pr-3">
                        <button
                          className="btn btn-primary btn-block"
                          onClick={handleLoadClick}
                        >
                          Load
                        </button>
                      </div>
                      <div className="mt-4 flex pr-0 pl-3 w-full">
                        <button
                          className="btn btn-error btn-block"
                          onClick={handleCancelClick}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AlertModal;
