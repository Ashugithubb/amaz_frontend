import { Box, Button, IconButton, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function Navbar2() {
    return (
        <>
            <div style={{ height: "60px", backgroundColor: "#131921", display: "flex", }}>

                <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>

                    <div style={{
                        padding: "16px 8px 0 6px",
                        margin: "8px", display: "flex", justifyContent: "center", alignItems: "center"
                    }}><img src="amazon.png" alt="Logo" style={{ width: "50px", }} /></div>

                    <div style={{
                        display: "flex", justifyContent: "center", flexDirection: "row", padding: "0 9px 0 9px",
                        margin: "5px 2px 5px 0"

                    }}>
                        <div><IconButton><LocationOnIcon sx={{ fill: "white", marginTop: "10px" }} /></IconButton></div>

                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <Typography sx={{ fontSize: "12px", }} color="#cccccc">Delivering to Chandigrah 160019</Typography>
                            <Typography sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 700, padding: "0 0 1px" }}>Update location</Typography></div>
                    </div>
                </div>




                <div style={{
                    display: "flex", flexDirection: "row", justifyContent: "center", padding: "10px 4px 10px 3px",
                    height: "60px",
                    borderRadius: "10px"
                }}>
                    <div >
                        <select name="category" id="cat" style={{ height: "40px", borderRadius: "8% 0% 0% 8%", width: "58px" }}>
                            <option value="All">All</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Books">Books</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Jeweelery">Jeweelery</option>
                        </select></div>

                    <div><input style={{ height: "40px", width: "940px" }} type="text" placeholder="Search Amazon.in" /></div>

                    <div style={{
                        height: "39px", display: "flex", backgroundColor: "white", marginTop: "0.49988px", background: "#FF9900", borderRadius: "0% 8% 8% 0%"
                    }} ><IconButton><SearchIcon /></IconButton></div>
                </div>


                <div style={{ display: "flex", justifyContent: "center", padding: "18px 4px 18px 35px" }}>
                    <Typography sx={{ color: "#FFFFFF", fontSize: "17px", fontWeight: 700, }}><Box >🇮🇳EN<ArrowDropDownIcon sx={{ color: "#a7acb2" }} /></Box></Typography>
                    {/* <select name="lang" id="cat" style={{ height: "36px", borderRadius: "8% 0% 0% 8%", width: "18px" }}> */}
                    {/* <option value="En">🇮🇳EN</option> */}
                    {/* <option value="Hindi">Hindi</option> */}
                    {/* </select>*/}
                </div>



                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "18px 4px 18px 35px" }} className="box">
                    <Typography sx={{ fontSize: "12px" }} color='white'>Hello,signIn</Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: "bold" }} color='white'>Account & Lists <ArrowDropDownIcon sx={{ color: "#a7acb2" }} /></Typography>
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

                <Box className="box"><Button sx={{ textTransform: "none", color: "white" }}><ShoppingCartOutlinedIcon sx={{ fontSize: "50px" }} />Cart</Button></Box>



            </div >

        </>
    )

}
// sx={{ marginLeft: "0px", bgcolor: "#FEBD69", border: "2px solid black", width: "40px", display: "flex", alignItems: "center" }}
//style={{ width: "40px", margin: "0", paddingLeft: "5px", overflow: "hidden" }}

// borderRadius: "10% 30% 50% 70%