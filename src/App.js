import React, { useState, useEffect }from 'react';
import { Button, FormControl , InputLabel, Input, colors} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  //array
const [input, setInput] = useState('');
//array to store message
const [messages, setMessages] = useState([]);
const[username, setUsername] = useState('');

useEffect(() => {
  // run once whenthe app compenent loads
db.collection('messages')
.orderBy('timestamp', 'desc')
.onSnapshot(snapshot => {
  setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
});
}, [] )

useEffect(() => {
  //run code here...
  // if its blank inside [], this code run ONCE when the app component loads
  //const name = prompt('Please enter your name');
    
           setUsername(prompt('Please enter your name'));
     
}, [] ) //condition

const sendMessage = (event) => {
  // allteh logic to send a message gpoes here
  //to give out all the message to the end of the array ommessage
  // to prevent for auto refesh
  event.preventDefault(); 

  db.collection('messages').add({
  message: input,
  username: username,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()

  })
  setInput('');
}

  return (
    <div className="App">
      <img src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100' />
      <h1>Maler's 🌹  Messenger Clone </h1>
      <h5>Welcome {username}</h5>
      {/* -> to use ENTER button
          ->form will refesh auto 
          -> disable={!input} to avoid empty string*/}
      <form className="app__form">
      <FormControl className="app__formControl" >
        <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value) } />
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}> 
          <SendIcon />
        </IconButton>
      </FormControl>
     </form>
     

     <FlipMove>
       {/* loop the msg
     -> push all the logic from message.js into here in auto
     props - text to grap the text n push to message.js 
     */
       messages.map(({id, message}) => (
         <Message key={id} username={username} message={message} />
       ))
     }
     </FlipMove>
          {/* key={id}
             for a unic key to just o pust the new input entered */}
     
    </div>
  );
}

export default App;
