import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { Modal, ModalCard, ModalCardBody, ModalCardFooter, ModalCardHeader, ModalCardTitle, ModalContent } from '..';

describe('Modal component', () => {
  it('should render modal-card-head', () => {
    const onClose = jest.fn();
    const { container, unmount } = render(
      <ModalCard>
        <ModalCardHeader onClose={onClose}>
          <ModalCardTitle>Modal Title</ModalCardTitle>
        </ModalCardHeader>
      </ModalCard>
    );
    fireEvent.click((container as any).querySelector('.delete'));
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });

  it('should open the modal', () => {
    const onClose = jest.fn();
    const getComponent = (show: boolean) => (
      <Modal show={show} onClose={onClose}>
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>Modal Title</ModalCardTitle>
          </ModalCardHeader>
          <ModalCardBody>Model Content</ModalCardBody>
          <ModalCardFooter>Model Footer</ModalCardFooter>
        </ModalCard>
      </Modal>
    );
    const { rerender, unmount } = render(getComponent(false));
    expect(window.document.querySelector('div.modal is-active')).toBeNull();
    rerender(getComponent(true));
    expect(window.document.querySelector('div.modal is-active')).toMatchSnapshot();
    unmount();
  });

  it('should close the modal', () => {
    const onClose = jest.fn();
    const { unmount } = render(
      <Modal show onClose={onClose}>
        <ModalCard>
          <ModalCardHeader onClose={onClose}>
            <ModalCardTitle>Modal Title</ModalCardTitle>
          </ModalCardHeader>
        </ModalCard>
      </Modal>
    );

    fireEvent.click(window.document.querySelector('.modal-close') as HTMLButtonElement);
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });

  it('should call close the modal on ESC key press', () => {
    const onClose = jest.fn();
    const { unmount } = render(
      <Modal show onClose={onClose}>
        <ModalCard>
          <ModalCardHeader onClose={onClose}>
            <ModalCardTitle>Modal Title</ModalCardTitle>
          </ModalCardHeader>
        </ModalCard>
      </Modal>
    );

    const event = new KeyboardEvent('keydown', { keyCode: 27 } as any);
    document.dispatchEvent(event);
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });

  it('should not close the modal on ESC key press', () => {
    const onClose = jest.fn();
    const { unmount } = render(
      <Modal closeOnEsc={false} show onClose={onClose}>
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>Modal Title</ModalCardTitle>
          </ModalCardHeader>
        </ModalCard>
      </Modal>
    );

    const event = new KeyboardEvent('keydown', { keyCode: 27 } as any);
    document.dispatchEvent(event);
    expect(onClose).not.toHaveBeenCalled();
    unmount();
  });

  it('should not close the modal on other than ESC key press', () => {
    const onClose = jest.fn();
    const { unmount } = render(
      <Modal show onClose={onClose}>
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>Modal Title</ModalCardTitle>
          </ModalCardHeader>
        </ModalCard>
      </Modal>
    );

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
    const { unmount } = render(
      <Modal show onClose={onClose} closeOnBlur>
        <ModalContent>Content</ModalContent>
      </Modal>
    );

    const background = window.document.querySelector('.modal-background') as HTMLDivElement;
    fireEvent.click(background);
    expect(onClose).toHaveBeenCalledTimes(1);
    unmount();
  });

  it('should not close the modal if clicked on background', () => {
    const onClose = jest.fn();
    const { unmount } = render(
      <Modal show onClose={onClose} closeOnBlur={false}>
        <ModalContent>Content</ModalContent>
      </Modal>
    );

    const background = window.document.querySelector('.modal-background') as HTMLDivElement;
    fireEvent.click(background);
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
