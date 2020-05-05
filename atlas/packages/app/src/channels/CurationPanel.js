"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ChannelHelpers_1 = require("./ChannelHelpers");
var MyMembershipContext_1 = require("@polkadot/joy-utils/MyMembershipContext");
var TxButton_1 = __importDefault(require("@polkadot/joy-utils/TxButton"));
var content_working_group_1 = require("@joystream/types/content-working-group");
exports.CurationPanel = function (props) {
    var _a = MyMembershipContext_1.useMyMembership(), curationActor = _a.curationActor, allAccounts = _a.allAccounts;
    var channel = props.channel;
    var canUseAccount = function (account) {
        if (!allAccounts || !Object.keys(allAccounts).length) {
            return false;
        }
        var ix = Object.keys(allAccounts).findIndex(function (key) {
            return account.eq(allAccounts[key].json.address);
        });
        return ix != -1;
    };
    var renderToggleCensorshipButton = function () {
        if (!curationActor) {
            return null;
        }
        var curation_actor = curationActor[0], role_account = curationActor[1];
        var accountAvailable = canUseAccount(role_account);
        var isCensored = ChannelHelpers_1.isCensoredChannel(channel);
        var new_curation_status = new content_working_group_1.ChannelCurationStatus(isCensored ? 'Normal' : 'Censored');
        return react_1.default.createElement(TxButton_1.default, { accountId: role_account.toString(), type: 'submit', size: 'medium', icon: isCensored ? 'x' : 'warning', isDisabled: !accountAvailable, label: isCensored ? 'Un-Censor' : 'Censor', params: [
                curation_actor,
                channel.id,
                null,
                new_curation_status // toggled curation status
            ], tx: 'contentWorkingGroup.updateChannelAsCurationActor' });
    };
    var renderToggleVerifiedButton = function () {
        if (!curationActor) {
            return null;
        }
        var curation_actor = curationActor[0], role_account = curationActor[1];
        var accountAvailable = canUseAccount(role_account);
        var isVerified = ChannelHelpers_1.isVerifiedChannel(channel);
        return react_1.default.createElement(TxButton_1.default, { accountId: role_account.toString(), type: 'submit', size: 'medium', icon: isVerified ? 'x' : 'checkmark', isDisabled: !accountAvailable, label: isVerified ? 'Remove Verification' : 'Verify', params: [
                curation_actor,
                channel.id,
                !isVerified,
                null // not changing curation status
            ], tx: 'contentWorkingGroup.updateChannelAsCurationActor' });
    };
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: { float: 'right' } },
            renderToggleCensorshipButton(),
            renderToggleVerifiedButton()));
};
//# sourceMappingURL=CurationPanel.js.map