import React from "react";
import "../index.css";

import MockProposalPreview from "./data/MockProposalPreview";
import { ProposalPreview } from "../ProposalPreview";

export default {
  title: "Proposals | Preview"
};

export const Default = () => <ProposalPreview {...MockProposalPreview} />;
