import cn from 'classnames';
import * as React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Modifiers } from '../../../modifiers';
import { ModalCard, ModalContent } from './components';

const KEYCODES = {
  ESCAPE: 27
};

type ModalProps = Partial<Modifiers> & {
  show: boolean;
  onClose: (...args: any[]) => any;
  closeOnEsc?: boolean;
  closeOnBlur?: boolean;
  showClose?: boolean;
};

export const Modal: React.FunctionComponent<ModalProps> = (props: ModalProps) => {
  const { closeOnEsc, closeOnBlur, show, className } = props;
  let { children } = props;
  const portalElement = document.createElement('div');

  portalElement.setAttribute('class', 'modal-container');

  const handleKeydown = e => {
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
    <div data-testid="modal-container" className={cn('modal', className, { 'is-active': show })}>
      <div
        className="modal-background"
        data-testid="modal-background"
        onClick={closeOnBlur ? props.onClose : () => {}}
        role="presentation"
      />
      {children}
      {showClose && (
        <button
          aria-label="close"
          className="modal-close is-large"
          data-testid="modal-close-button"
          onClick={props.onClose}
          type="button"
        />
      )}
    </div>,
    portalElement
  );
};

(Modal as any).Content = ModalContent;
(Modal as any).Card = ModalCard;

Modal.defaultProps = {
  closeOnEsc: true,
  showClose: true,
  closeOnBlur: false
};
