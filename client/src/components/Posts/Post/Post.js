import React, { useState } from 'react';
import { Card, CardActions, CardMedia, Button, Typography, Link, Avatar, ButtonBase } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
    const navigate = useNavigate();
    const [likes, setLikes] = useState(post?.likes);

    const userId = user?.result.googleId || user?.result?._id;
    const hasLikedPost = post?.likes?.find((like) => like === userId);

    const handleLike = async () => {
        dispatch(likePost(post._id));

        if(hasLikedPost){
            setLikes(post.likes.filter((id)=> id !== userId));
        } else{
            setLikes([...post.likes, userId]);
        }
    };

    const Likes = () => {
        if (likes?.length > 0) {
            return likes.find((like) => like === userId)
                ? (
                    <><ThumbUpAltIcon fontSize="small" />&nbsp;{likes.length > 2 ? `You and ${likes.length - 1} others` : `${likes.length} like${likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><ThumbUpAltOutlined fontSize="small" />&nbsp;{likes.length} {likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }

        return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
    };

    const openPost = () => {
        navigate(`/posts/${post._id}`);
    }

    return (
        <Card className={classes.card} raised elevation={6}>

            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} onClick={openPost} />

            {(user?.result?.googleId === post?.creator || user?.result?._id === post.creator) && (
                <div className={classes.overlay}>
                    <Button style={({ color: 'white' })} size="small" onClick={() => setCurrentId(post._id)}>
                        <EditIcon fontSize="medium" />
                    </Button>
                </div>
            )}

            <div className={classes.name}>
                <Typography className={classes.user} variant="body1" style={{ color: "black" }}>{post.name}</Typography>
                <div className={classes.time}>
                    <Typography variant="caption">{moment(post.createdAt).fromNow()}</Typography>
                </div>  
            </div>
            
            

            <Typography className={classes.details} variant="body2">{post.title}</Typography>

            <Typography className={classes.details} variant="body2" color="textSecondary" component="p">{post.message} {post.tags.map((tag) => `#${tag} `)}</Typography>

            


            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
                    <Likes />
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post.creator) && (
                    <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" /> Delete
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}

export default Post;