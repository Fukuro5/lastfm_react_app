import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { ARTIST } from '@/constants/routes';
import st from './styles.module.scss';

const { Meta } = Card;

export default function SongCard(props) {
  const { songName, artist, image, artistUrl } = props;

  return (
    <Card
      style={{ width: 240 }}
      className={st.custom__card}
      cover={<img alt="example" src={image} />}
      title={songName}
      extra={<a href={artistUrl}>More</a>}
    >
      <Meta
        title={<Link to={`${ARTIST}/${artist.mbid}`}>{artist.name}</Link>}
      />
    </Card>
  );
}

SongCard.propTypes = {
  songName: PropTypes.string.isRequired,
  artist: PropTypes.objectOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  artistUrl: PropTypes.string.isRequired,
};
