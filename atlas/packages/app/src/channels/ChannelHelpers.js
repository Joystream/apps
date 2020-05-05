"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var content_working_group_1 = require("@joystream/types/content-working-group");
exports.ChannelPublicationStatusDropdownOptions = content_working_group_1.ChannelPublicationStatusAllValues
    .map(function (x) { return ({ key: x, value: x, text: x }); });
exports.isVideoChannel = function (channel) {
    return channel.content === 'Video';
};
exports.isMusicChannel = function (channel) {
    return channel.content === 'Music';
};
exports.isAccountAChannelOwner = function (channel, account) {
    return (channel && account) ? channel.roleAccount.eq(account) : false;
};
function isPublicChannel(channel) {
    return (channel.publicationStatus === 'Public' &&
        channel.curationStatus !== 'Censored');
}
exports.isPublicChannel = isPublicChannel;
function isCensoredChannel(channel) {
    return channel.curationStatus == 'Censored';
}
exports.isCensoredChannel = isCensoredChannel;
function isVerifiedChannel(channel) {
    return channel.verified;
}
exports.isVerifiedChannel = isVerifiedChannel;
//# sourceMappingURL=ChannelHelpers.js.map