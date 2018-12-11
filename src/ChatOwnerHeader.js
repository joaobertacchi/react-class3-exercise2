import React from 'react';
import PropTypes from 'prop-types';

const ChatOwnerHeader = props => {
  return (<div className="name sender">{props.owner}</div>);
}

ChatOwnerHeader.propTypes = {
 owner: PropTypes.string.isRequired, 
}

export default ChatOwnerHeader;