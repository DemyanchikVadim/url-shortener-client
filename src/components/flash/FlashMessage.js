import React from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component {

  onClick = () => {
    this.props.deleteFlashMessage(this.props.message.id);
  };

  render() {
    const { type, text } = this.props.message;
    return (
      <div className={classnames('alert', {
        'ui success green message': type === 'success',
        'ui negative red message': type === 'error'
      })}>
        <i className="close icon" onClick={this.onClick}>

        </i>
        {text}
      </div>
    );
  }
}

FlashMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteFlashMessage: React.PropTypes.func.isRequired
};

export default FlashMessage;
