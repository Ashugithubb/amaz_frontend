'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Autocomplete, Button, Menu, MenuItem, OutlinedInput, Paper, Stack, TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ControlledCarousel from './bootstrap.carousel';
import Slide from '@mui/material/Slide'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "../style/navbar.css"
const data = ["All", "Electronics", "Books", "Furniture", "Jeweelery", "Clothing & Accessies"]
export default function DenseAppBar() {
    return (
        <>
            <Box sx={{ width: "100%", height: "70px", background: "#232F3E", display: "flex", alignItems: "center", gap: 4,position:"static" }}>
                <Box id="logo-box">
                    <img  src="amazon.png" alt="Logo" width="100%" height="50px" />
                </Box>
                <Box className="box">
                    <Typography color="grey">Delivering to Chandigrah 160019</Typography>
                    <Typography sx={{ color: "white", fontSize: "14px", fontWeight: 700 }}> <LocationOnIcon />Update location</Typography>
                </Box>
                <Box >
                    <Stack direction={"row"}>
                        <Box className="searchBox">
                            <Autocomplete
                                disablePortal
                                options={data}
                                sx={{ width: 200, bgcolor: "#e6e6e6;" }}
                                renderInput={(params) => <TextField {...params} label="All" />}
                            />
                        </Box>
                        <OutlinedInput className="searchBox" sx={{ width: "700px", bgcolor: "white" }} placeholder="Search Amazon.in" />

                        <Box className="searchBox" sx={{ bgcolor: "#FEBD69", border: "2px solid black", width: "40px", display: "flex", alignItems: "center" }}><IconButton><SearchIcon /></IconButton></Box>
                    </Stack>
                </Box>
                <Typography className="box" sx={{ color: "white" }}> <img
                    src="https://flagcdn.com/w20/in.png"
                    alt="India Flag"
                    style={{ width: "20px", height: "15px"}}
                /> En<ArrowDropDownIcon /></Typography>


                <Box sx={{ display: "flex", flexDirection: "column" }} className="box">
                    <Typography sx={{ fontSize: "12px" }} color='white'>Hello,signIn</Typography>
                    <Typography sx={{ fontSize: "14px" }} color='white'>Account & Lists <ArrowDropDownIcon /></Typography>
                </Box>
                <Button className="box" sx={{ textTransform: "none", color: "white", flexDirection: "column", }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography sx={{ fontSize: "12px" }}>

                        </Typography>
                        <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                            Returns<br />&Orders <ArrowDropDownIcon fontSize="small" />
                        </Typography>

                    </Box>
                </Button>

                <Box className="box"><Button sx={{ textTransform: "none",color: "white" }}><ShoppingCartOutlinedIcon sx={{ fontSize: "50px" }} />Cart</Button></Box>

            </Box>
        </>

    );
}
