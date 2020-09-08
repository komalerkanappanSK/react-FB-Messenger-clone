import React , {forwardRef} from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css';



//higher order function tarcking the element 
const Message = forwardRef(({message, username, timestamp}, ref) => {
    const isUser = username === message.username;
  

    return (
        <div  ref={ref} className={`message ${isUser && 'message__user'}`}>
             <h5 style={{color:"grey", textAlign: "left"}}>{!isUser && `${message.username || 'Unknown User'} `}</h5>
            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography 
                     color="white"
                     variant="h6"
                     component="h4"
                     > 
                         {message.message}
   
                    </Typography>
                </CardContent>
            </Card>
         </div>
    )
})

export default Message
