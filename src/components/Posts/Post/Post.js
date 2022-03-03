import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Link, Avatar } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />

            <div className={classes.overlay}>
                <Button style={({ color: 'white' })} size="small" onClick={() => setCurrentId(post._id)}>
                    <EditIcon fontSize="medium" />
                </Button>
            </div>

            <div className={classes.name}>
                <Avatar className={classes.dp} alt="{post.creator}" src=""></Avatar>
                <Typography className={classes.user} component={Link} to="#" variant="body1" underline="hover" style={{ color: "black" }} onClick="#">{post.creator}</Typography>
                <Typography className={classes.time} variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            <Typography className={classes.details} variant="body2">{post.title}</Typography>

            <Typography className={classes.details} variant="body2" color="textSecondary" component="p">{post.message}</Typography>


            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;