import React from 'react';
import { Form, Field, withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import * as JoyForms from '@polkadot/joy-utils/forms';
import { Button } from 'semantic-ui-react';

import './common/index.css';

// TODO get next settings from Substrate:
const HANDLE_REGEX = /^[a-z0-9_]+$/;

const buildSchema = (p: ValidationProps) =>
  Yup.object().shape({
    handle: Yup.string()
      .matches(HANDLE_REGEX, 'Handle can have only lowercase letters (a-z), numbers (0-9) and underscores (_).')
      .min(p.minHandleLength, `Handle is too short. Minimum length is ${p.minHandleLength} chars.`)
      .max(p.maxHandleLength, `Handle is too long. Maximum length is ${p.maxHandleLength} chars.`)
      .required('Handle is required'),
    avatar: Yup.string()
      .url('Avatar must be a valid URL of an image.')
      .max(p.maxAvatarUriLength, `Avatar URL is too long. Maximum length is ${p.maxAvatarUriLength} chars.`),
    about: Yup.string().max(p.maxAboutTextLength, `Text is too long. Maximum length is ${p.maxAboutTextLength} chars.`)
  });

type ValidationProps = {
  minHandleLength: number;
  maxHandleLength: number;
  maxAvatarUriLength: number;
  maxAboutTextLength: number;
};

type FormValues = {
  handle: string;
  avatar: string;
  about: string;
};

type FormProps = FormikProps<FormValues>;

type Other = {
  closeModal: () => void;
};

const LabelledField = JoyForms.LabelledField<FormValues>();

const LabelledText = JoyForms.LabelledText<FormValues>();

const InnerForm = (props: FormProps & Other) => {
  const { isSubmitting, closeModal, submitForm } = props;

  return (
    <div style={{ padding: '2rem' }}>
      <h1 className="register-title">Edit Profile</h1>

      <Form className="ui form JoyForm">
        <LabelledText
          name="handle"
          label="Handle/nickname"
          placeholder={`You can use a-z, 0-9 and underscores.`}
          {...props}
        />
        <LabelledText
          name="avatar"
          label="Avatar URL"
          placeholder="Paste here an URL of your avatar image."
          {...props}
        />
        <LabelledField name="about" label="About" {...props}>
          <Field
            component="textarea"
            id="about"
            name="about"
            disabled={isSubmitting}
            rows={3}
            placeholder="Write here anything you would like to share about yourself with Joystream community."
          />
        </LabelledField>

        <LabelledField invisibleLabel {...props}>
          <Button
            type="button"
            className="ui primary button"
            size="large"
            content="Save"
            onClick={() => {
              submitForm();
            }}
          />
          <Button
            style={{ marginLeft: '1rem' }}
            type="button"
            size="large"
            onClick={() => closeModal()}
            content="Cancel"
          />
        </LabelledField>
      </Form>
    </div>
  );
};

export default withFormik<ValidationProps & Other, FormValues>({
  validationSchema: buildSchema,

  handleSubmit: values => {
    console.log(values);
    // do submitting things
  }
})(InnerForm);
