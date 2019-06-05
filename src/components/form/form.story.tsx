import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { PureComponent } from 'react';
import { Button } from '../elements/button';
import { Icon } from '../elements/icon';
import { Checkbox, Control, Field, Help, Input, InputFile, Label, Radio, Select, Switch, Textarea } from '../form';

/* eslint-disable react/no-multi-comp */
const HoC = (Component: React.FunctionComponent<any>) => {
  class Controlled extends React.Component {
    static displayName = 'Select';

    state = {
      value: ''
    };

    onChange = (evt: React.SyntheticEvent) => {
      this.setState({
        // @ts-ignore
        value: evt.target.value
      });
    };

    render() {
      return <Component onChange={this.onChange} value={this.state.value} {...this.props} />;
    }
  }

  return Controlled;
};

const HoCCheckbox = (Component: React.FunctionComponent<any>) => {
  class Controlled extends React.Component {
    state = {
      checked: false
    };

    onChange = (evt: React.SyntheticEvent) => {
      this.setState({
        // @ts-ignore
        checked: evt.target.checked
      });
    };

    render() {
      return <Component color="info" onChange={this.onChange} checked={this.state.checked} {...this.props} />;
    }
  }

  return Controlled;
};

class RadioGroup extends React.Component {
  state = {
    selected: null
  };

  onChange = (evt: React.SyntheticEvent) => {
    this.setState({
      // @ts-ignore
      selected: evt.target.value
    });
  };

  render() {
    return (
      <Control>
        <Radio onChange={this.onChange} checked={this.state.selected === 'Yes'} value="Yes" name="question">
          Yes
        </Radio>
        <Radio onChange={this.onChange} checked={this.state.selected === 'No'} value="No" name="question">
          No
        </Radio>
      </Control>
    );
  }
}

/* eslint-enable react/no-multi-comp */
const SelectControlled = HoC(Select);
const CheckboxControlled = HoCCheckbox(Checkbox);
const SwitchControlled = HoCCheckbox(Switch);

storiesOf('Form', module)
  .addDecorator(story => <div style={{ margin: 50 }}>{story()}</div>)
  .add('Default', () => (
    <div>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input placeholder="Text input" onChange={() => {}} />
        </Control>
      </Field>

      <Field>
        <Label>Username</Label>
        <Control>
          <Input color="success" type="text" placeholder="Text input" value="bulma" onChange={() => {}} />
        </Control>
        <Help color="success">This username is available</Help>
      </Field>

      <Field>
        <Label>Email</Label>
        <Control>
          <Input color="danger" type="email" placeholder="Email input" value="hello@" onChange={() => {}} />
        </Control>
        <Help color="danger">This email is invalid</Help>
      </Field>
      <Field>
        <Label>With Icons</Label>
        <Control iconLeft iconRight>
          <Input color="success" type="email" placeholder="I have icons" onChange={() => {}} />
          <Icon align="left" icon="bars" />
          <Icon align="right" icon="bars" />
        </Control>
        <Help color="danger">This email is invalid</Help>
      </Field>
      <Field>
        <Label>Subject</Label>
        <Control>
          <SelectControlled>
            <option>Select dropdown</option>
            <option>With options</option>
          </SelectControlled>
        </Control>
      </Field>

      <Field>
        <Label>Message</Label>
        <Control>
          <Textarea placeholder="Textarea" onChange={() => {}} />
        </Control>
      </Field>

      <Field>
        <Label>File</Label>
        <Control>
          <InputFile icon={<Icon icon="upload" />} onChange={() => {}} />
        </Control>
      </Field>

      <Field>
        <Control>
          <CheckboxControlled>
            I agree to the <a href="#agree">terms and conditions</a>
          </CheckboxControlled>
        </Control>
      </Field>

      <Field>
        <Control>
          <SwitchControlled>I want to receive the newsletter</SwitchControlled>
        </Control>
      </Field>

      <Field>
        <RadioGroup />
      </Field>

      <Field context="group">
        <Control>
          <Button type="primary">Submit</Button>
        </Control>
        <Control>
          <Button color="link">Cancel</Button>
        </Control>
      </Field>
    </div>
  ))
  .add('Handle Multiple inputs', () => {
    /* eslint-disable react/no-multi-comp */
    class MultiInputHandler extends PureComponent {
      state = {
        email: '',
        name: '',
        password: '',
        comment: '',
        gender: '',
        question: null,
        termsAccepted: false
      };

      onChange = (evt: React.SyntheticEvent) => {
        // @ts-ignore
        const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;
        this.setState({
          // @ts-ignore
          [evt.target.name]: value
        });
      };

      render() {
        const { email, name, password, comment, gender, question, termsAccepted } = this.state;
        return (
          <div>
            <Field>
              <Label>Email</Label>
              <Control>
                <Input onChange={this.onChange} name="email" type="email" placeholder="Email input" value={email} />
              </Control>
            </Field>
            <Field>
              <Label>Name</Label>
              <Control>
                <Input onChange={this.onChange} name="name" type="text" placeholder="Name input" value={name} />
              </Control>
            </Field>
            <Field>
              <Label>Password</Label>
              <Control>
                <Input
                  onChange={this.onChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                />
              </Control>
            </Field>
            <Field>
              <Label>Gender</Label>
              <Control>
                <Select onChange={this.onChange} name="gender" value={gender}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other?</option>
                </Select>
              </Control>
            </Field>
            <Field>
              <Label>Message</Label>
              <Control>
                <Textarea name="comment" value={comment} onChange={this.onChange} placeholder="Textarea" />
              </Control>
            </Field>
            <Field>
              <Label>Do you undertood how to use me?</Label>
              <Control>
                <Radio onChange={this.onChange} checked={question === 'Yes'} value="Yes" name="question">
                  Yes
                </Radio>
                <Radio onChange={this.onChange} checked={question === 'No'} value="No" name="question">
                  No
                </Radio>
              </Control>
            </Field>
            <Field>
              <Control>
                <Checkbox name="termsAccepted" onChange={this.onChange} checked={termsAccepted}>
                  I agree to the <a href="#agree">terms and conditions</a>
                </Checkbox>
              </Control>
            </Field>
            <pre>
              <code>{JSON.stringify(this.state, null, 2)}</code>
            </pre>
          </div>
        );
      }
    }

    return <MultiInputHandler />;
  });
