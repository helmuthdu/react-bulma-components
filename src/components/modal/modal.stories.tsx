import PropTypes from 'prop-types';
import * as React from 'react';
import { Modal, ModalCard, ModalCardBody, ModalCardFooter, ModalCardHeader, ModalCardTitle, ModalContent } from '.';
import { Button } from '../../elements/button';
import { Content } from '../../elements/content';
import { Image } from '../../elements/image';
import { Level, LevelSide } from '../../layout/level';
import { Media, MediaItem } from '../../layout/media';
import { Section } from '../../layout/section';

class OpenModal extends React.Component<any> {
  static propTypes = {
    modal: PropTypes.object,
    children: PropTypes.node.isRequired,
    show: PropTypes.bool
  };

  static defaultProps = {
    modal: {},
    show: false
  };

  state = {
    show: this.props.show
  };

  open = () => this.setState({ show: true });
  close = () => this.setState({ show: false });

  render() {
    return (
      <div>
        <Button onClick={this.open}>Open</Button>
        <Modal show={this.state.show} onClose={this.close} {...this.props.modal}>
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

export const Default = () => (
  <OpenModal modal={{ closeOnEsc: false }}>
    <ModalContent>
      <Section style={{ backgroundColor: 'white' }}>
        Click on the {'"X"'} button on the top-right button to close the Modal (pass closeOnEsc=false to the modal to
        avoid closing it with the keyboard)
      </Section>
    </ModalContent>
  </OpenModal>
);

export const CloseWithKeyboard = () => (
  <OpenModal show modal={{ showClose: false }}>
    <ModalContent>
      <Section style={{ backgroundColor: 'white' }}>
        Press ESC on your keyboard to close this modal, Pass showClose: false if you want to hide the close button
      </Section>
    </ModalContent>
  </OpenModal>
);

export const CloseOnClickOutside = () => (
  <OpenModal show modal={{ closeOnBlur: true, showClose: false }}>
    <ModalContent>
      <Section style={{ backgroundColor: 'white' }}>
        Pass closeOnBlur: true to enable to close the Modal when the user click outside the main modal container
      </Section>
    </ModalContent>
  </OpenModal>
);

export const ModalCardWindow = () => (
  <OpenModal modal={{ closeOnBlur: true }}>
    <ModalCard>
      <ModalCardHeader onClose={() => {}}>
        <ModalCardTitle>Title</ModalCardTitle>
      </ModalCardHeader>
      <ModalCardBody>
        <Media>
          <MediaItem as="figure" position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </MediaItem>
          <MediaItem>
            <Content>
              <p>
                <strong>John Smith</strong>
                <small>@johnsmith</small>
                <small>31m</small>
                <br />
                If the children of the Modal is a card, the close button will be on the Card Head instead than the
                top-right corner You can also pass showClose = false to Card.Head to hide the close button
              </p>
            </Content>
            <Level breakpoint="mobile">
              <LevelSide align="left">
                <Button link>Like</Button>
                <Button link>Share</Button>
              </LevelSide>
            </Level>
          </MediaItem>
        </Media>
      </ModalCardBody>
      <ModalCardFooter style={{ alignItems: 'center', justifyContent: 'center' }}>
        <p>Lorem Ipsum...</p>
      </ModalCardFooter>
    </ModalCard>
  </OpenModal>
);

export default {
  title: 'Modal',
  component: Modal,
  subcomponents: {
    ModalCard,
    ModalCardBody,
    ModalCardFooter,
    ModalCardHeader,
    ModalCardTitle,
    ModalContent
  }
};
