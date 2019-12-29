import { Subscribable } from '@polkadot/joy-utils/index'
import EntityId from '@joystream/types/versioned-store/EntityId';
import { Entity } from '@joystream/types/versioned-store';
import { MusicTrackType } from './schemas/music/MusicTrack';
import { MusicAlbumType } from './schemas/music/MusicAlbum';
import { VideoType } from './schemas/video/Video';

export interface ITransport {
  
  // Funcs
  musicTrackById: (id: EntityId) => Promise<MusicTrackType>
  musicAlbumById: (id: EntityId) => Promise<MusicAlbumType>
  videoById: (id: EntityId) => Promise<VideoType>

  // TODO channelById(...) - channels are not implemented yet on Substrate side

  // State
  allEntities: () => Subscribable<Entity[]>
}