import Stack from '@mui/material/Stack';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';
import Switch from '@mui/material/Switch';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));

const label = { inputProps: { 'aria-label': 'Switch demo' } };



export default function Dashboard() {



    const [online, setOnline] = useState(true);
    const handleOnlineChange = (event) => {
        setOnline(event.target.checked);
    };


    const [volume, setVolume] = useState(30);
    const handleVolumeChange = (event) => {
        setVolume(event.target.value);
    };


    const [quality, setQuality] = useState('2');
    const handleQualityChange = (event) => {
        setQuality(event.target.value);
    };

    return (
        <Box
        alignItems="center"
        margin={10}
    >
            <Stack spacing={2}>
            <h1>Welcome User!</h1>
            <Box>
                <Stack
                    direction={{ xs: 'column', sm: 'column', md: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                >
                    <Card mx={50} variant="outlined">
                        <CardContent>
                            <h3>
                                Online Mode
                            </h3>
                            <p>Is this application connected to the internet?</p>
                        </CardContent>
                        <CardActions>
                            <PinkSwitch
                                checked={online}
                                onChange={handleOnlineChange}
                                {...label} defaultChecked />
                        </CardActions>
                    </Card>

                    <Card variant="outlined">
                        <CardContent>
                            <h3>
                                Master Volume
                            </h3>
                            <p>Overrides all other sound settings in this application</p>
                        </CardContent>
                        <CardActions>
                            <Box sx={{ width: 300 }}>
                                <Slider
                                    aria-label="Volume"
                                    defaultValue={30}
                                    valueLabelDisplay="auto"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    step={10}
                                    marks={true}
                                    min={0}
                                    max={100}
                                />
                            </Box>
                        </CardActions>
                    </Card>

                    <Card variant="outlined">
                        <CardContent>
                            <h3>
                                Sound Quality
                            </h3>

                            <p>Manually control the music quality in event of poor connection</p>
                        </CardContent>
                        <CardActions>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Quality</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={quality}
                                    onChange={handleQualityChange}
                                    label="Quality"
                                >
                                    <MenuItem value={1}>Low</MenuItem>
                                    <MenuItem value={2}>Normal</MenuItem>
                                    <MenuItem value={3}>High</MenuItem>
                                </Select>
                            </FormControl>
                        </CardActions>
                    </Card>

                </Stack>
            </Box>
            <Box>
                <h3>System Notifications</h3>

                {!online ? (<div>Your application is offline. You won't be able to share or stream music to other devices.</div>) : null}
                <br></br>

                {volume > 80 ? (<div>Listening to music at a high volume could cause long-term hearing loss.</div>) : null}
                <br></br>

                {quality === 1 ? (<div>Music quality is degraded. Increase quality if your connection allows it.</div>) : null}
                <br></br>

            </Box>
            </Stack>
        </Box>
    );
}