import { Types } from 'twobyfour'
import recentVideo from './recent_video'

export default {
  TABLE_NAME: 'churn-channels',
  name: 'channel',
  fields: {
    slug: {
      type: Types._string,
      description: 'URL slug for the channel and also primary id'
    },
    title: {
      type: Types._string,
      description: 'The title of the channel'
    },
    blurb: {
      type: Types._string,
      description: 'A blurb explaining what the channel is about'
    },
    logo_url: {
      type: Types._string,
      description: 'The URL of the logo image for the channel'
    },
    external_url: {
      type: Types._string,
      description: 'The external URL related to the channel'
    },
    external_facebook: {
      type: Types._string,
      description: 'The facebook URL related to the channel'
    },
    external_twitter: {
      type: Types._string,
      description: 'The twitter URL related to the channel'
    },
    external_instagram: {
      type: Types._string,
      description: 'The instagram URL related to the channel'
    },
    recent_videos: {
      list: true,
      description: 'The list of most recently added videos',
      type: recentVideo
    }
  }
}