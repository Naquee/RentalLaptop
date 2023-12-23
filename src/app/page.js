import Image from "next/image";
import styles from "./page.module.css";
import { ChakraBaseProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <ChakraBaseProvider>
        <Navbar />
      </ChakraBaseProvider>
    </main>
  );
}
