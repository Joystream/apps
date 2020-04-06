import React from "react";
import "../index.css";

import MockProposalDetails from "./data/MockProposalDetails";
import { Proposal } from "../Proposal";

export default {
  title: "Proposals | Details",
};

export const HasToVote = () => <Proposal {...MockProposalDetails} />;

export const VotedApproved = () => <Proposal {...MockProposalDetails} vote={{ hasVoted: true, value: "Approve" }} />;

export const VotedAbstain = () => <Proposal {...MockProposalDetails} vote={{ hasVoted: true, value: "Abstain" }} />;

export const VotedReject = () => <Proposal {...MockProposalDetails} vote={{ hasVoted: true, value: "Reject" }} />;

export const VotedSlash = () => <Proposal {...MockProposalDetails} vote={{ hasVoted: true, value: "Slash" }} />;
