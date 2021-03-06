import React from 'react'
import './card.css'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Icon from '@material-ui/core/Icon'
import { getToDateTime } from '../../helpers/helpers'

const CardComments = props => (
  <Card className='card-style'>
    <CardHeader
      avatar={
        <Avatar 
          aria-label="Recipe" 
          src={props.imgWhoSend}
          >R
        </Avatar>
      }
      title="Hugo Oliveira"
      subheader={props.date}
    />
    <CardContent>
      <Typography component="p">
        {props.commentary}
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
              src={props.imgWhoReceived}>
            R
            </Avatar>
      }
      title={props.realNameWhoReceive ? props.realNameWhoReceive : 'No name mencioned, I am sorry!' }
    />
      </div>
  </Card>
)

export default CardComments;
