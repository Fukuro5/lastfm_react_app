import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import parse from 'html-react-parser';
import st from './styles.module.scss';

const { Meta } = Card;

export default function ProfileCard(props) {
  const { artistName, image, tags, bio } = props;

  return (
    <Card
      style={{ width: 350 }}
      className={st.custom__card}
      cover={<img alt="example" src={image} />}
      bordered
      extra={
        <div>
          {tags?.map((item) => (
            <div className={st.tag} key={item.name}>
              {item.name}
            </div>
          ))}
        </div>
      }
      title={<p className={st.title}>{artistName}</p>}
    >
      <Meta description={parse(`${bio}`)} />
    </Card>
  );
}

ProfileCard.defaultProps = {
  artistName: '',
  image: '',
  tags: [],
  bio: '',
};

ProfileCard.propTypes = {
  artistName: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  bio: PropTypes.string,
};
