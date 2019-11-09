import clsx from 'clsx';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { ElementModifier } from '../../modifiers';
import { ModalCard } from './modal-card';
import { ModalContent } from './modal-content';

const { useEffect } = React;

const KEYCODES = {
  ESCAPE: 27
};

type ModalProps = ElementModifier & {
  show: boolean;
  onClose: (...args: any[]) => any;
  closeOnEsc?: boolean;
  closeOnBlur?: boolean;
  showClose?: boolean;
};

export const Modal: React.FunctionComponent<ModalProps> & {
  Card: typeof ModalCard;
  Content: typeof ModalContent;
} = (props: ModalProps) => {
  const { closeOnEsc, closeOnBlur, show, className, testId } = props;
  let { children } = props;
  const portalElement = document.createElement('div');

  portalElement.setAttribute('class', 'modal-container');

  const handleKeydown = (e: any) => {
    if (e.keyCode === KEYCODES.ESCAPE && props.show) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.appendChild(portalElement);
    if (closeOnEsc) {
      document.addEventListener('keydown', handleKeydown);
    }
    return () => {
      if (closeOnEsc && document) {
        document.removeEventListener('keydown', handleKeydown);
      }
      portalElement.remove();
    };
  });

  if (!show) {
    return null;
  }

  let isCard;
  try {
    isCard =
      (React as any).Children.only(children)
        .type.toString()
        .indexOf('ModalCard') !== -1;
  } catch (e) {
    isCard = false;
  }

  const showClose = !isCard && props.showClose;

  if (isCard) {
    children = React.cloneElement(children as any, {
      onClose: props.onClose
    });
  }
  return ReactDOM.createPortal(
    <div
      data-testid={Array.isArray(testId) ? testId[0] : undefined}
      className={clsx('modal', className, { 'is-active': show })}
    >
      <div
        data-testid={Array.isArray(testId) ? testId[2] : undefined}
        className="modal-background"
        onClick={closeOnBlur ? props.onClose : () => {}}
        role="presentation"
      />
      {children}
      {showClose && (
        <button
          data-testid={Array.isArray(testId) ? testId[1] : undefined}
          aria-label="close"
          className="modal-close is-large"
          onClick={props.onClose}
          type="button"
        />
      )}
    </div>,
    portalElement
  );
};

Modal.Card = ModalCard;
Modal.Content = ModalContent;

Modal.defaultProps = {
  closeOnEsc: true,
  showClose: true,
  closeOnBlur: false
};
