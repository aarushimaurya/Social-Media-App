import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const {posts, isLoading} = useSelector((state) =>state.posts);
    const classes = useStyles();

    if(!posts.length && !isLoading) return 'No Posts';
    
    return (
        isLoading ? <CircularProgress/> :(
            <Grid container alignitems="stretch" spacing={3} style={{marginLeft: "-120px"}}>
                {posts?.map((post)=>(
                    <Grid key={post._id } item xs={12} sm={12} md={6} lg={4}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
            )
                    //while adding like functionality go to 55:16 and add &nbsp;
    );
}

export default Posts;