import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import { FormHelperText } from '@material-ui/core';


const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: '10px 10px 10px 0'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  // expand: {
  //   transform: 'rotate(0deg)',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  //   marginLeft: 'auto',
  //   [theme.breakpoints.up('sm')]: {
  //     marginRight: -8,
  //   },
  // },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  // },
  // avatar: {
  //   backgroundColor: red[500],
  // },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} src="https://secure.gravatar.com/avatar/cc84b9f7a53cf2e0722aea4fb609e1fe.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0021-512.png">
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
        <Icon className={classes.icon} style={{paddingTop:'20px'}}>arrow_downward</Icon>
        </div>
          <div style={{display:'flex', justifyContent:'flex-left'}}>
          {/* <IconButton aria-label="Add to favorites"> */}
            <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar} src="https://secure.gravatar.com/avatar/cc84b9f7a53cf2e0722aea4fb609e1fe.jpg?s=512&d=https%3A%2F%2Fa.slack-edge.com%2F7fa9%2Fimg%2Favatars%2Fava_0021-512.png">
              R
            </Avatar>
          }
          title="Marcos Henrique"
          subheader="September 14, 2016"
        />
          {/* </IconButton> */}
          </div>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
