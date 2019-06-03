import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Modal } from '..';
import { ModalContent } from '../components';
import { ModalCard } from '../components/modal-card';
import { ModalCardHead, ModalCardTitle } from '../components/modal-card/components';

describe('Modal component', () => {
  it('should render modal-card-head', () => {
    const onClose = jest.fn();
    const { container, unmount } = render(
      <ModalCard onClose={onClose}>
        <ModalCardHead onClose={onClose}>
          <ModalCardTitle>Modal Title</ModalCardTitle>
        </ModalCardHead>
      </ModalCard>
    );
    fireEvent.click((container as any).querySelector('.delete'));
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });

  it('should open the modal', () => {
    const onClose = jest.fn();
    const getComponent = show => (
      <Modal show={show} onClose={onClose}>
        <ModalCard>
          <ModalCardHead>
            <ModalCardTitle>Modal Title</ModalCardTitle>
          </ModalCardHead>
        </ModalCard>
      </Modal>
    );
    const { rerender, unmount } = render(getComponent(false));
    expect(window.document.querySelector('div.Modalis-active')).toBeNull();
    rerender(getComponent(true));
    expect(window.document.querySelector('div.Modalis-active')).toMatchSnapshot();
    unmount();
  });

  it('should close the modal', () => {
    const onClose = jest.fn();
    const { getByTestId, asFragment, unmount } = render(
      <Modal show onClose={onClose}>
        <ModalCard>
          <ModalCardHead onClose={onClose}>
            <ModalCardTitle>Modal Title</ModalCardTitle>
          </ModalCardHead>
        </ModalCard>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(getByTestId('modal-card-close-button'));
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });

  it('should call close the modal on ESC key press', () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <Modal show onClose={onClose}>
        <ModalCard>
          <ModalCardHead onClose={onClose}>
            <ModalCardTitle>Modal Title</ModalCardTitle>
          </ModalCardHead>
        </ModalCard>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    const event = new KeyboardEvent('keydown', { keyCode: 27 } as any);
    document.dispatchEvent(event);
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });

  it('should not close the modal on ESC key press', () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <Modal closeOnEsc={false} show onClose={onClose}>
        <ModalCard>
          <ModalCardHead>
            <ModalCardTitle>Modal Title</ModalCardTitle>
          </ModalCardHead>
        </ModalCard>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    const event = new KeyboardEvent('keydown', { keyCode: 27 } as any);
    document.dispatchEvent(event);
    expect(onClose).not.toHaveBeenCalled();
    unmount();
  });

  it('should not close the modal on other than ESC key press', () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <Modal show onClose={onClose}>
        <ModalCard>
          <ModalCardHead>
            <ModalCardTitle>Modal Title</ModalCardTitle>
          </ModalCardHead>
        </ModalCard>
      </Modal>
    );

    expect(asFragment()).toMatchSnapshot();
    const event = new KeyboardEvent('keydown', { keyCode: 23 } as any);
    document.dispatchEvent(event);
    expect(onClose).not.toHaveBeenCalled();
    unmount();
  });

  it('should render any child type', () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <Modal show onClose={onClose}>
        <div>CHILDREN</div>
        <div>CHILDREN</div>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it('should close the modal if clicked on background', () => {
    const onClose = jest.fn();
    const { getByTestId, asFragment, unmount } = render(
      <Modal show onClose={onClose} closeOnBlur>
        <ModalContent>Content</ModalContent>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(getByTestId('modal-background'));
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });

  it('should not close the modal if clicked on background', () => {
    const onClose = jest.fn();
    const { getByTestId, asFragment, unmount } = render(
      <Modal show onClose={onClose} closeOnBlur={false}>
        <ModalContent>Content</ModalContent>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(getByTestId('modal-background'));
    expect(onClose).not.toHaveBeenCalled();
    unmount();
  });

  it('should not show close button', () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <Modal showClose={false} show onClose={onClose}>
        <ModalContent>Content</ModalContent>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });

  it('should render empty because no document on scope', () => {
    const onClose = jest.fn();
    const { asFragment, unmount } = render(
      <Modal show onClose={onClose}>
        <ModalContent>Content</ModalContent>
      </Modal>
    );
    expect(asFragment()).toMatchSnapshot();
    unmount();
  });
});
