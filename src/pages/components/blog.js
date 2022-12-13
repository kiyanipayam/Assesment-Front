import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Card, Container, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import axios from 'axios';
import { AuthContext } from '../../auth/context';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import { Search } from "@mui/icons-material";


function Blogg() {

    const { token } = React.useContext(AuthContext);
    const [posts, setPosts] = React.useState([]);
    const [body, setBody] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [mood, setMood] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = React.useState("snack message")
    function handleSubmit() {

    }
    function newPostClicked() {
        setMood('addPost')
    }
    const saveClicked = async () => {
        var response = await axios.post('http://localhost:3000/posts/create', { title: title, body: body, }, { headers: { 'Authorization': 'Bearer ' + token } },
        );
        setOpen(true);
        setMessage("Blog Added")
    }

    const getData = async () => {
        var response = await axios.get('http://localhost:3000/posts/getFeed', { headers: { 'Authorization': 'Bearer ' + token } });
        console.log(token)
        setPosts(response.data)
        console.log(posts);
    }

    var t
    var b;
    React.useEffect(() => {
        getData()
    }, [])
    return (
        <Container maxWidth="xxxl" >
            <Grid container spacing={2}>
                <Grid item style={{ textAlign: 'left', paddingTop: '2%' }} xs={6}>
                    <span style={{ color: 'white', fontSize: '20pt' }}>Blog</span>
                </Grid>
                <Grid item style={{ textAlign: 'right' }} xs={6}>
                    {mood == 'addPost' ?
                        <Button variant="outlined" style={{ color: 'white', borderColor: 'white' }} onClick={saveClicked}>SAVE</Button>
                        :
                        <Button variant="outlined" style={{ color: 'white', borderColor: 'white' }} onClick={newPostClicked}>New Post</Button>
                    }
                </Grid>
            </Grid>
            <Grid style={{ height: '44vh', overflow: 'auto', marginTop: '1%' }}>
                {mood == 'addPost' ?
                    <Card style={{ padding: '3%', height: '44vh' }}>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <span style={{ fontWeight: 'bold', color: 'black' }}>Title</span>
                            <TextField
                                margin="normal"
                                onChange={(newValue) => setTitle(newValue.target.value)}
                                required
                                fullWidth
                                id="title"
                                name="title"
                                autoFocus
                                placeholder='Blog title'
                            />
                            <span style={{ fontWeight: 'bold', color: 'black' }}>Body</span>
                            <TextField
                                margin="normal"
                                required
                                onChange={(newValue) => setBody(newValue.target.value)}
                                fullWidth
                                name="body"
                                id="body"
                                multiline
                                rows={8}
                                placeholder='Blog body'
                            />
                        </Box>
                    </Card>
                    :
                    posts.map((post) => {
                        return (
                            <Card key={post.id} style={{ marginTop: '1%', paddingLeft: '5%', padding: "3%" }}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        <span style={{ color: 'grey' }}> Created by {post.userEmail}</span>
                                    </Grid >
                                </Grid>
                                <Grid container spacing={1} style={{ marginTop: '1%' }}>
                                    <Grid item>
                                        <span style={{ color: 'black', fontWeight: 'bold' }}> {post.title}</span>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1} style={{ marginTop: '1%' }}>
                                    <Grid item>
                                        <span style={{ color: 'grey', }}> {post.body}</span>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} style={{ marginTop: '1%' }}>
                                    <Grid item sm={6}>
                                        <a href="/signup" style={{ marginLeft: '2%', fontSize: '8pt' }}>
                                            Keep Reading
                                        </a>
                                    </Grid>
                                    <Grid item style={{ textAlign: "right" }} sm={6}>
                                        <span href="/signup" style={{ marginLeft: '2%', fontSize: '8pt' }}>
                                            {post.viewCount} Views
                                        </span>
                                    </Grid>
                                </Grid>
                            </Card>)
                    })
                }

            </Grid>

        </Container >
    );
}
export { Blogg }
