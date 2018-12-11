import React from 'react';
import PropTypes from 'prop-types'
import ChatHeader from './ChatHeader'
import ChatOwnerHeader from './ChatOwnerHeader'
import MessagesBoard from './MessagesBoard'
import SendMessage from './SendMessage'

const ChatWindow = props => {
  const { messages, user } = props;
  return (
	<div className="chat-window">
		<ChatHeader />
		<ChatOwnerHeader owner={user.username} />
		<MessagesBoard messages={messages} owner={user.username} />
		<SendMessage owner={user.username} onAddMessage={props.onAddMessage} />
	</div>
  );
}

ChatWindow.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  onAddMessage: PropTypes.func.isRequired,
}

export default ChatWindow;