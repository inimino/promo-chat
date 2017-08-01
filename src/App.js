import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class CommentForm extends Component {
  render(){
    return (
      <form action="#" id="comment-form" onSubmit={(e) => e.preventDefault()}>

        <div className="form-group">
          <label htmlFor="your-message">Your comment</label>
          <textarea type="text" name="content" id="your-message" className="form-control" placeholder="Here is my message.."></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="your-name">From</label>
          <input type="text" name="content" id="your-name" className="form-control" placeholder="Bob"/>
        </div>
        <input type="submit" value="Send" className="btn btn-primary"/>
      </form>
    );
  }
}

function Message(props){
  return (
    <li>A sample message (posted <span className="date">10 minutes ago</span>) by John</li>
  );
}

class Messages extends Component {
  render() {
    var messages = this.props.messages;
    var message_components = messages.map(function(m){return <Message message={m}/>});
    return (
      <div id="messages">
        <ul className="list unstyle">
          {message_components}
        </ul>
        <button className="btn btn-danger" onClick={window.get_messages} id="refresh">Refresh Chat</button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-xs-offset-3">
            <div id="chatroom">
              <h1>CHAT-ROOM</h1>
              <CommentForm/>
              <Messages messages={this.props.messages}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
