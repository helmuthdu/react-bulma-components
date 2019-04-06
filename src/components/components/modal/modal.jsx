import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ModalCard, ModalContent } from './components';

const KEYCODES = {
  ESCAPE: 27
};

export const Modal = props => {
  const { closeOnEsc, closeOnBlur, show, className } = props;
  let { children } = props;

  const portalElement = document.createElement('div');
  portalElement.setAttribute('class', 'modal-container');

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

  const handleKeydown = e => {
    if (e.keyCode === KEYCODES.ESCAPE && props.show) {
      props.onClose();
    }
  };

  let isCard;

  try {
    isCard =
      React.Children.only(children)
        .type.toString()
        .indexOf('ModalCard') !== -1;
  } catch (e) {
    isCard = false;
  }

  const showClose = !isCard && props.showClose;

  if (isCard) {
    children = React.cloneElement(children, {
      onClose: props.onClose
    });
  }

  return ReactDOM.createPortal(
    <div data-testid="modal-container" className={cn('modal', className, { 'is-active': show })}>
      <div
        className="modal-background"
        data-testid="modal-background"
        onClick={closeOnBlur ? props.onClose : null}
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

Modal.Content = ModalContent;
Modal.Card = ModalCard;

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  closeOnEsc: PropTypes.bool,
  closeOnBlur: PropTypes.bool,
  showClose: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

Modal.defaultProps = {
  closeOnEsc: true,
  showClose: true,
  closeOnBlur: false
};
