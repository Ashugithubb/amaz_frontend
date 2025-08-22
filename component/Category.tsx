import { Card, CardContent, Box, Typography, Button } from "@mui/material";

function ImageCard1() {
    return (
        <Card sx={{ width: 500, p: 2 }}>
            <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Revamp your home in style
                </Typography>


                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Box
                            component="img"
                            src="category.jpg"
                            alt="Cushion Cover"
                            sx={{ width: 140, height: 140, borderRadius: 2 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Cushion Cover, Bedsheet & More
                        </Typography>
                    </Box>


                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Box
                            component="img"
                            src="category2.jpg"
                            alt="Home Storage"
                            sx={{ width: 140, height: 140, borderRadius: 2 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Home Storage
                        </Typography>
                    </Box>
                </Box>


                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Box
                            component="img"
                            src="category3.jpg"
                            alt="Lighting"
                            sx={{ width: 140, height: 140, objectFit: "cover", borderRadius: 2 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Lighting Solutions
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <Button >Explore All</Button>
        </Card>
    );
}

function ImageCard2() {
    return (
        <Card sx={{ width: 500, p: 2 }}>
            <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Appliances for your home | Up to 55% off
                </Typography>


                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Box
                            component="img"
                            src="image4.jpg"
                            alt="Cushion Cover"
                            sx={{ width: 140, height: 140, borderRadius: 2 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Cushion Cover, Bedsheet & More
                        </Typography>
                    </Box>


                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Box
                            component="img"
                            src="image5.jpg"
                            alt="Home Storage"
                            sx={{ width: 140, height: 140, borderRadius: 2 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Home Storage
                        </Typography>
                    </Box>
                </Box>


                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Box
                            component="img"
                            src="image6.jpg"
                            alt="Lighting"
                            sx={{ width: 140, height: 140, objectFit: "cover", borderRadius: 2 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Lighting Solutions
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <Button >Explore All</Button>
        </Card>
    );
}

function ImageCard3() {
    return (
        <Card sx={{ width: 500, p: 2 }}>
            <CardContent>
                <Typography variant="h5" sx={{ mb: 2 }}>
                    Starting ₹149 | Headphones
                </Typography>


                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>

                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Box
                            component="img"
                            src="image7.jpg"
                            alt="Cushion Cover"
                            sx={{ width: 140, height: 140, borderRadius: 2 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Starting ₹249 | boAt
                        </Typography>
                    </Box>


                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Box
                            component="img"
                            src="image8.jpg"
                            alt="Home Storage"
                            sx={{ width: 140, height: 140, borderRadius: 2 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Starting ₹649 | Noise
                        </Typography>
                    </Box>
                </Box>


                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Box
                            component="img"
                            src="image9.jpg"
                            alt="Lighting"
                            sx={{ width: 140, height: 140, objectFit: "cover", borderRadius: 2 }}
                        />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            Starting ₹149 | Zebronics
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
            <Button >Explore All</Button>
        </Card>
    );
}
export { ImageCard1, ImageCard2, ImageCard3 } 
