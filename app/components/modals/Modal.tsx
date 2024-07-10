'use client';

import { ReactElement, useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../button/Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondryAction: () => void;
  secondaryLabel?: string;
}

export default function Modal({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled,
    secondryAction,
    secondaryLabel 
  }: ModalProps) {

    let [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
      setShowModal(isOpen)
    }, [isOpen]);

    let handleClose = useCallback(() => {
      if (disabled) {
        return;
      }
      setShowModal(false);
      setTimeout(() => {
        onClose();
      }, 300)
    }, [disabled, onClose]);

    let handleSubmit = useCallback(() => {
      if (disabled) {
        return;
      }
      onSubmit();
    }, [disabled, onSubmit]);

    let handleSecondaryAction = useCallback(() => {
      if (disabled || !secondryAction) {
        return;
      }
      secondryAction();
    }, [disabled, secondryAction]);

    if (!isOpen) {
      return null;
    }

  return (
    <>
      <div 
        className="fixed inset-0 z-50 flex justify-center items-center 
                  overflow-x-hidden overflow-y-auto outline-none  bg-neutral-800/70
                  focus:outline-none"
      >
        <div className="relative my-6 mx-auto w-full md:w-4/6 lg:w-3/6 xl:w-2/5 h-full md:h-auto ">
          {/* CONTENT */}
          <div 
            className={`h-full translate duration-300 
              ${showModal ? 'translate-y-0' : 'translate-y-full'}
              ${showModal ? 'opasity-100' : 'opasity-0'}
              `}
          >
            <div
              className="relative translate w-full h-full md:h-auto flex flex-col 
                          border-0 rounded-lg shadow-lg bg-white outline-none 
                          focus:outline-none"
            >
              {/* header */}
              <header className="relative p-6 flex justify-center items-center border-b rounded-t">
                <button
                  onClick={handleClose} 
                  className="absolute left-9 p-1 border-0 transition
                            hover:opacity-70"
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">{title}</div>
              </header>
              {/* body */}
              <section className="relative p-6 flex-auto">
                {body}
              </section>
              {/* footer */}
              <footer className="p-6 flex flex-col gap-2">
                <div className="w-full flex items-center gap-4">
                  <Button label="My buttton" />
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
