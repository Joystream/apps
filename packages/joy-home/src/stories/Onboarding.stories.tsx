import React, { useState } from 'react';
import { Modal } from '@polkadot/react-components';
import RegisterForm from '../RegisterForm';
import EditForm from '../EditForm';

import '../common/index.css';

export default {
  title: 'Home tab | Onboarding'
};

export const GetStarted = () => (
  <div className="container">
    <h1 className="title">Get your Membership</h1>
    <div className="body-text">
      <p>Some text about Pioneer and that you need a membership to use all the features.</p>
      <p>Some more text about resources and links for more information and help can be found under resources tab.</p>
    </div>
    <button className="ui primary button">Get started!</button>
  </div>
);

export const Register = () => (
  <div className="container">
    <RegisterForm minHandleLength={0} maxHandleLength={10} maxAvatarUriLength={200} maxAboutTextLength={400} />
  </div>
);

export const Profile = () => {
  const [showModal, setModal] = useState(false);

  return (
    <div className="container">
      <img
        className="profile-avatar"
        src="https://assets.website-files.com/5c78435271c31384e942f111/5c78435271c313493442f123_Helmet.svg"
      />
      <h1 className="title">alice_123</h1>
      <p style={{ width: '650px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nulla ultrices amet, ultricies viverra lorem
        sagittis. Tellus praesent consectetur enim phasellus ut fames. Arcu tortor mattis erat quam. Etiam ipsum sit
        dignissim mollis et. More info..
      </p>
      <div style={{ width: '650px', marginTop: '1rem' }}>
        <button className="ui primary button" onClick={() => setModal(true)}>
          Edit
        </button>
      </div>
      <Modal dimmer="inverted" open={showModal} style={{ width: '600px' }}>
        <EditForm
          minHandleLength={0}
          maxHandleLength={10}
          maxAvatarUriLength={200}
          maxAboutTextLength={400}
          closeModal={() => setModal(false)}
        />
      </Modal>
    </div>
  );
};
