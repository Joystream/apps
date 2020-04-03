import React from "react";

import { Card, Tab } from "semantic-ui-react";
import ProposalPreview, { ProposalPreviewProps } from "./ProposalPreview";
import { ProposalPreviewList } from ".";

type ProposalPreviewListProps = {
  proposals?: ProposalPreviewProps[];
};

function PreviewList({ proposals }: ProposalPreviewListProps) {
  return (
    <Card.Group className="ProposalPreviewList">
      {proposals.map((proposal, idx) => (
        <ProposalPreview
          key={`${proposal.title}-${idx}`}
          title={proposal.title}
          description={proposal.description}
          details={proposal.details}
        />
      ))}
    </Card.Group>
  );
}

const proposalsViews = [
  {
    menuItem: "Active"
  },
  {
    menuItem: "Withdrawn"
  },
  {
    menuItem: "Approved"
  },
  {
    menuItem: "Slashed"
  },
  {
    menuItem: "Rejected"
  }
];

const ProposalPreviewList = () => <Tab panes={proposalsViews} />;
export default ProposalPreviewList;
