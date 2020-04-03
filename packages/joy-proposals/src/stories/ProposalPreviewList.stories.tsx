import React from "react";
import "../index.css";

import MockProposalPreviewList from "./data/MockProposalPreviewList";
import { ProposalPreviewList } from "../ProposalPreview";

export default {
  title: "Proposals | Preview List"
};

export const Default = () => <ProposalPreviewList proposals={MockProposalPreviewList} />;
