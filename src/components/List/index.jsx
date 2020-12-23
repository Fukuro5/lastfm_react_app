import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';

export default function CustomList({ data }) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  );
}

CustomList.defaultProps = {
  data: [],
};

CustomList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};
