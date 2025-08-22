import Image from "next/image";
import Navbar from "@/component/navbar";
import DarkVariantExample from "@/component/bootstrap.carousel";
import { ImageCard1, ImageCard2, ImageCard3 } from "@/component/Category";
import { Box } from "@mui/material";
import ProductCarousel from "@/component/multi.cr0usel";

export default function Home() {
  return (
    <>
    <div>
      <Box position="static">
        <Navbar />
      </Box> 
      <div style={{ position: "relative" }}>
        <DarkVariantExample />
        <div
          style={{
            position: "absolute",
            top: "55%",
            left: "2%",
            zIndex: 10,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: 14,flexWrap:"wrap"}}>
            <ImageCard1 />
            <ImageCard2 />
            <ImageCard3 />
            <ImageCard3 />
            <ImageCard3 />
            <ImageCard3 />
            </Box>
        </div>
      </div>
      </div>  
       
      <Box mt={100}>
        <ProductCarousel />
      </Box>
   </>
  );
}
