import React from 'react'
import PropTypes from 'prop-types'
import Message from './Message'

const MessagesBoard = props => {
  const { messages, owner } = props;
  return (
	<ul className="message-list">
		{messages.map((message, index) => (
			<Message key={index} message={{...message, id: index}} owner={owner} />
		))}
	</ul>
  );
}

MessagesBoard.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
		username: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	})).isRequired,
  owner: PropTypes.string.isRequired,
}

export default MessagesBoard;