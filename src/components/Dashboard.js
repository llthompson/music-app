import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
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

const label = { inputProps: { 'aria-label': 'Switch demo' } };



export default function Dashboard() {

    const [quality, setQuality] = useState('2');
    const handleChange = (event) => {
      setQuality(event.target.value);
    };

    
    return (
        <div>
            <h1>Welcome User!</h1>
            <Stack
                direction={{ xs: 'row', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Card variant="outlined">
                    <CardContent>
                        <h3>
                            Online Mode
                        </h3>
                        <p>Is this application connected to the internet?</p>
                    </CardContent>
                    <CardActions>
                        <Switch {...label} defaultChecked />
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
                                onChange={handleChange}
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
        </div>
    );
}