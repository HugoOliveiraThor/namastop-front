import React,  {Component } from 'react'
import './card.css'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Icon from '@material-ui/core/Icon'


class CardComments extends Component {
  render() {
    return (
      <Card className='card-style'>
        <CardHeader
          avatar={
            <Avatar 
              aria-label="Recipe" 
              // className={classes.avatar} 
              src="https://secure.gravatar.com/avatar/cc84b9f7a53cf2e0722aea4fb609e1fe.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0021-512.png">
              R
            </Avatar>
          }
          title="Hugo Oliveira"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <Divider />
        <div style={{display:'flex',justifyContent:'center'}}>
        <Icon 
          className='icon-card'>
          arrow_downward
        </Icon>
        </div>
          <div style={{display:'flex', justifyContent:'flex-left'}}>
            <CardHeader
              avatar={
                <Avatar 
                  aria-label="Recipe"  
                  src="https://secure.gravatar.com/avatar/cc84b9f7a53cf2e0722aea4fb609e1fe.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0021-512.png">
                R
                </Avatar>
          }
          title="Marcos Henrique"
        />
          </div>
      </Card>
    );
  }
}

export default CardComments;
