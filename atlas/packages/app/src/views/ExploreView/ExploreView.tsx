import React, { useState, useEffect } from "react"
import { RouteComponentProps, navigate } from "@reach/router"
import { GenericSection, VideoPreview, ChannelSummary, Grid } from "components"
import { useTransportContext } from './../../providers/TransportContext'
import { useMyMembership } from '@polkadot/joy-utils/MyMembershipContext';

type ExploreViewProps = {} & RouteComponentProps

export default function ExploreView({}: ExploreViewProps) {

  let allVideos: any[] = []
  let allChannels: any[] = []
  let channels: any[] = []

  const transport = useTransportContext();
  const { myAddress, myMemberId } = useMyMembership();
  const resolverProps = { transport, myAddress, myMemberId }
  
  const [ resolvedProps, setResolvedProps ] = useState({} as any);
  const [ propsResolved, setPropsResolved ] = useState(false);

  const rerenderDeps = [ myAddress ]

  useEffect(() => {

    async function doResolveProps () {
      
      console.log('Resolving props of media view');

      // Transport session allows us to cache loaded channels, entites and classes
      // during the render of this view:
      transport.openSession()
      const data = await resolveProps(resolverProps)
      console.log(data)
      setResolvedProps(data);
      transport.closeSession()
      setPropsResolved(true);
    }

    if (!transport) {
      console.error('Transport is not defined');
    } else {
      doResolveProps();
    }
  }, rerenderDeps);

  const resolveProps = async ({ transport }) => {
    const [
      latestVideoChannels,
      latestVideos,
      featuredVideos
    ] = await Promise.all([
      transport.latestPublicVideoChannels(),
      transport.latestPublicVideos(),
      transport.featuredVideos()
    ])

    return { featuredVideos, latestVideos, latestVideoChannels }
  }

  if (!propsResolved) return null
  
  return (
    <>
      <GenericSection topDivider title="Latest Videos" linkText="All Videos" onLinkClick={() => {}}>
        <Grid
          minItemWidth="250"
          items={allVideos.map((video, idx) => {
            let { img: channelImg } = channels[video.channel] || ""
            return (
              <VideoPreview
                key={`${video.title}-${idx}`}
                channelImg={channelImg}
                channel={video.channel}
                title={video.title}
                poster={video.poster}
                showChannel
                onClick={() => navigate(`videos/${idx}`)}
                onChannelClick={() => navigate(`channels/${video.channel}`)}
              />
            )
          })}
        />
      </GenericSection>
      <GenericSection topDivider title="Latest video channels" linkText="All Channels" onLinkClick={() => {}}>
        <div className="channel-gallery">
          {allChannels.map((channel, idx) => (
            <ChannelSummary
              key={`${channel.name}-${idx}`}
              img={channel.img}
              size="default"
              name={channel.name}
              isPublic={channel.isPublic}
              isVerified={channel.isVerified}
              onClick={() => navigate(`channels/${channel.name}`)}
            />
          ))}
        </div>
      </GenericSection>
    </>
  )
}
