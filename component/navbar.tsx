'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Autocomplete, Button, Menu, MenuItem, OutlinedInput, Stack, TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ControlledCarousel from './bootstrap.carousel';
import Slide from '@mui/material/Slide'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const data = ["All", "Man", "Women"]
export default function DenseAppBar() {
    return (
        <>
            <Box sx={{ width: "100%", height: "70px", background: "#232F3E", display: "flex", alignItems: "center", gap: 5 }}>
                <Box sx={{ width: "160px", height: "70px", marginLeft: "20px", top: "180px", display: "flex", alignItems: "center" }}>
                    <img src="amazon.png" alt="Logo" width="180px" height="50%" />
                </Box>
                <Box>
                    <Typography>Delivering to Chandigrah 160019</Typography>

                    <Typography sx={{ color: "white" }}> <LocationOnIcon />Update location</Typography>
                </Box>
                <Box>
                    <Stack direction={"row"}>
                        <Autocomplete
                            disablePortal
                            options={data}
                            sx={{ width: 50, bgcolor: "#f2f2f2" }}
                            renderInput={(params) => <TextField {...params} label="All" />}
                        />
                        <OutlinedInput sx={{ width: "700px", bgcolor: "white" }} placeholder="Search Amazon.in" />

                        <Box sx={{ bgcolor: "#FEBD69", border: "2px solid black", width: "40px" }}><IconButton><SearchIcon /></IconButton></Box>
                    </Stack>
                </Box>
                <Typography>🇮🇳En<ArrowDropDownIcon /></Typography>

                {/* <Autocomplete
                    disablePortal
                    options={[]}
                    sx={{ width: 80 }}
                    renderInput={(params) => <TextField {...params} label={"Hello SignIn Account & Lists"} />}
                /> */}
                <Typography color='white'>Hello SignIn Account & Lists<ArrowDropDownIcon /></Typography>

                <Autocomplete
                    disablePortal
                    options={[]}
                    sx={{ width: 80 }}
                    renderInput={(params) => <TextField {...params} label={"Retrun and "} />}
                />
                <Box><Button sx={{ color: "white" }}><ShoppingCartOutlinedIcon sx={{ fontSize: "50px" }} />Cart</Button></Box>

            </Box>
        </>

    );
}
