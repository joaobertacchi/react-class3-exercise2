import React from 'react'
import PropTypes from 'prop-types'

const Message = props => {
  const {username, text} = props.message;
  const { owner } = props;
  return (
	<li
		className={
			username === owner ? 'message sender' : 'message recipient'
		}
	>
		<p>{`${username}: ${text}`}</p>
	</li>
  );
}

Message.propTypes = {
	message: PropTypes.shape({
		id: PropTypes.number.isRequired,
		username: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	}).isRequired,
	owner: PropTypes.string.isRequired,
}

export default Message;