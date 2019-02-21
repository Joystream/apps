import React from 'react';
import queryString from 'query-string';

import { AccountId } from '@polkadot/types';
import { AppProps } from '@polkadot/ui-app/types';
import { withCalls } from '@polkadot/ui-api/with';
import { Input, Labelled, InputAddress } from '@polkadot/ui-app/index';

import translate from './translate';
import { nonEmptyStr, queryToProp } from '@polkadot/joy-utils/index';
import { accountIdsToOptions, hashVote } from './utils';
import AccountSelector from '@polkadot/joy-utils/AccountSelector';
import TxButton from '@polkadot/joy-utils/TxButton';

// AppsProps is needed to get a location from the route.
type Props = AppProps & {
  accountId?: string,
  applicantId?: string,
  applicants?: AccountId[]
};

type State = {
  accountId?: string,
  applicantId?: string,
  salt?: string,
  hashedVote?: string
};

class App extends React.PureComponent<Props, State> {

  constructor (props: Props) {
    super(props);
    let { accountId, applicantId, location } = this.props;
    const params = queryString.parse(location.search);
    applicantId = applicantId ? applicantId : params.applicantId;
    const { hashedVote } = params;

    this.state = {
      accountId,
      applicantId,
      salt: 'TODO show salts from local storage in a dropdown',
      hashedVote
    };
  }

  render () {
    const { accountId, applicantId, salt, hashedVote } = this.state;
    const applicantOpts = accountIdsToOptions(this.props.applicants || []);
    const hasHash = nonEmptyStr(hashedVote);
    const isVoteRevealed = hasHash && hashedVote === hashVote(applicantId, salt);

    return (
      <div>
        <AccountSelector onChange={this.onChangeAccount} />
        <div className='ui--row'>
          <Input
            label='Hashed vote (hex):'
            value={hashedVote}
            onChange={this.onChangeHash}
          />
        </div>
        {hasHash && <div className='ui--row'>
          <InputAddress
            label='Applicant I voted for:'
            onChange={this.onChangeApplicant}
            type='address'
            addresses={applicantOpts}
            value={applicantId}
            placeholder='Select an applicant you voted for'
          />
        </div>}
        {hasHash && <div className='ui--row'>
          <Input
            className='large'
            label='The salt used to vote for this applicant:'
            value={salt}
            onChange={this.onChangeSalt}
          />
        </div>}
        <Labelled style={{ marginTop: '.5rem' }}>
          <TxButton
            size='large'
            isDisabled={!isVoteRevealed}
            accountId={accountId}
            label='Reveal my vote'
            params={[hashedVote, applicantId, salt]}
            tx='election.reveal'
          />
        </Labelled>
      </div>
    );
  }

  private onChangeAccount = (accountId?: string) => {
    this.setState({ accountId });
  }

  private onChangeApplicant = (applicantId?: string) => {
    this.setState({ applicantId });
  }

  private onChangeSalt = (salt?: string) => {
    this.setState({ salt });
  }

  private onChangeHash = (hashedVote?: string) => {
    this.setState({ hashedVote });
  }
}

// inject the actual API calls automatically into props
export default translate(
  withCalls<Props>(
    queryToProp('query.councilElection.applicants')
  )(App)
);
