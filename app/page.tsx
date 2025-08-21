import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/component/navbar";
import DarkVariantExample from "@/component/bootstrap.carousel";
import Category from "@/component/Category";

export default function Home() {
  return (
    <div>
      <Navbar />
      <DarkVariantExample />

      <Category />
    </div>
  );
}
