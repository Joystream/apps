import React from "react";

import { Card, Tab } from "semantic-ui-react";
import ProposalPreview, { ProposalPreviewProps } from "./ProposalPreview";

type ProposalPreviewListProps = {
  proposals?: ProposalPreviewProps[];
};

export default function ProposalPreviewList({ proposals }: ProposalPreviewListProps) {
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
