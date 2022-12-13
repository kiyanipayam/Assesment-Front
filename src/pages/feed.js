import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Card, IconButton, InputAdornment } from '@mui/material';
import styled from "styled-components";
import { Blogg } from './components/blog';
import { Search } from "@mui/icons-material";

const StyledInnerBox = styled(Box)`  
  position: relative;
  bottom: 80px;
  padding:0px
`;

export default function Feed() {
    return (
        <Container maxWidth="xxxl" style={{ backgroundColor: 'white', height: '100vh', padding: '2%' }}>
            <Card style={{
                height: '100%',
                boxShadow: '0px 0px 30px grey',
                borderRadius: '10px'
            }}>
                <Box sx={{ backgroundColor: 'indigo', padding: '1% 0% 0% 3%', height: '20%' }}>
                    <span style={{ color: 'white', fontSize: '20pt' }}>Bridged</span>
                </Box>

                <Box sx={{
                    backgroundColor: 'lightgray', height: '50%', paddingLeft: '3%'
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={8} style={{ height: '100%' }}>
                            <StyledInnerBox

                                sx={{
                                    width: '100%',
                                    height: '100%',
                                }}
                            >
                                <Blogg />
                            </StyledInnerBox>
                        </Grid>
                        <Grid item xs={4} style={{ height: '100%', paddingTop: '1%', paddingLeft: '1%' }}>
                            <span style={{ fontWeight: 'bold', color: 'indigo' }}>Search</span>
                            <br />
                            <TextField
                                style={{ width: "90%", marginTop: '1%' }}
                                placeholder='Looking for something? '
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <IconButton>
                                                <Search />
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ backgroundColor: '#161829', height: '30%', paddingTop: '2%', paddingRight: '3%', paddingLeft: '3%' }}>
                    <span style={{ color: 'white', fontSize: '20pt' }}>Bridged</span>
                    <br /><br />
                    <span style={{ color: 'gray' }}>Timeline app is product of Timeline.app</span>
                    <br />
                    <span style={{ color: 'gray' }}>Tech Limited</span>
                    <br />
                    <span style={{ color: 'gray' }}>Registered in England. RC: 11405676</span>
                    <br />
                    <span style={{ color: 'gray' }}>Suite 1SC, Southgate House, 88 Town</span>
                    <br />
                    <span style={{ color: 'gray' }}>Square, Basildon, Essex SS16 4</span>
                    <hr style={{ color: 'darkgray', marginTop: '3%' }} />

                    <span style={{ color: 'darkgray' }}>Copyright © 2018, Timelineapp tech Limited. All rights reserved </span>
                </Box>
            </Card>
        </Container >

    );
}