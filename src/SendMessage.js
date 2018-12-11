import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SendMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.text.length === 0;
  };

  setText(text) {
    this.setState({ text });
  }

  handleChange(event) {
    this.setText(event.target.value);
  }

  handleSendMessage(event) {
    event.preventDefault();
	const { owner } = this.props;
	const { text } = this.state;
    const message = {
    	text: text,
    	username: owner,
  	};
	console.log(JSON.stringify(message));
	this.props.onAddMessage(message);
	this.setText('');
  }
  
  render() {
    const { text } = this.state;
    return (
		<div>
			<form className="input-group" onSubmit={this.handleSendMessage}>
				<input
					type="text"
					className="form-control"
					placeholder="Enter your message..."
					value={text}
					onChange={this.handleChange}
				/>
				<div className="input-group-append">
					<button className="btn submit-button" disabled={this.isDisabled()}>
						SEND
					</button>
				</div>
			</form>
		</div>
    );
  }
}

SendMessage.propTypes = {
  owner: PropTypes.string.isRequired,
  onAddMessage: PropTypes.func.isRequired,
}

export default SendMessage;