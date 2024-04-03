"use client";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Content from "@/components/Content";
import { MyApiProvider } from "./api/api";
export default function Home() {
  return (
    <div className="app flex px-0 justify-center  w-full">
      <div className="wrapper flex bg-black text-white w-[100%] gap-4 lg:flex-col lg:w-[100%] xl:w-[100%] 2xl:w-[100%]">
        <MyApiProvider>
          <Sidebar></Sidebar>
          <Content></Content>
        </MyApiProvider>
      </div>
    </div>
  );
}
