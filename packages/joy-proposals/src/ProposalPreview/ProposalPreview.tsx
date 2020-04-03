import React from "react";
import { Header, Card } from "semantic-ui-react";

import { DetailsProps } from "../ProposalDetails/ProposalDetails";
import Details from "../ProposalDetails/Details";

import "./ProposalPreview.css";

export type ProposalPreviewProps = {
  title?: string;
  description?: string;
  details?: DetailsProps;
};

type ProposalPreviewListProps = {
  proposals: ProposalPreviewProps[];
};

export default function ProposalPreview({ title, description, details }: ProposalPreviewProps) {
  return (
    <Card fluid className="ProposalPreview">
      <Card.Content>
        <Card.Header>
          <Header as="h1">{title}</Header>
        </Card.Header>
        <Card.Description>{description}</Card.Description>
        <Details {...details} className="details-container" />
      </Card.Content>
    </Card>
  );
}
