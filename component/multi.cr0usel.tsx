'use client'
import { Button, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export default function ProductCarousel() {
    return (<>
        <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>Related items you have viewed <Button>see More</Button></Typography>
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            showDots={true}
            arrows={true}
        >

            <div style={{ background: "white", padding: "40px", textAlign: "center", }}><img src="category.jpg" alt="" /></div>
            <div style={{ background: "white", padding: "40px", textAlign: "center", }}><img src="category.jpg" alt="" /></div>
            <div style={{ background: "white", padding: "40px", textAlign: "center" }}><img src="category.jpg" alt="" /></div>
            <div style={{ background: "white", padding: "40px", textAlign: "center" }}><img src="category.jpg" alt="" /></div>

        </Carousel>

    </>

    );
}
