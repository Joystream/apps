import React, { useState, useEffect } from "react";
import { Card, Menu } from "semantic-ui-react";

import { ProposalProps } from "./Proposal";
import ProposalPreview from "./ProposalPreview";

type ProposalFilter = "all" | "active" | "withdrawn" | "approved" | "rejected" | "slashed";

export default function ProposalPreviewList({ proposals }: { proposals: ProposalProps[] }) {
  let [showedProposal, setShowedProposals] = useState(proposals);
  let [activeFilter, setActiveFilter] = useState<ProposalFilter>("all");

  useEffect(() => {}, [proposals]);

  return (
    <>
      <Menu tabular>
        <Menu.Item name="all" active={activeFilter === "all"} onClick={() => setActiveFilter("all")} />
      </Menu>
      <Card.Group>
        {proposals.map((prop, idx) => (
          <ProposalPreview
            key={`${prop.title}-${idx}`}
            title={prop.title}
            description={prop.description}
            details={prop.details}
          />
        ))}
      </Card.Group>
    </>
  );
}
