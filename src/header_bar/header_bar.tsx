"use client";

import { Tabs, Tab } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Header_Bar({
  navigation_value,
}: {
  navigation_value: string;
}) {
  const router = useRouter();

  return (
    <Tabs
      value={navigation_value}
      onChange={(_, value) => {
        switch (value) {
          case "Home":
            router.push("/");
            break;
          case "The Lazy Backpacker":
            router.push("/the_lazy_backpacker");
            break;
          case "Yumx":
            router.push("/yumx");
            break;
          case "3D models and prints":
            router.push("/3D_models");
            break;
          default:
            break;
        }
      }}
      sx={{
        "& .MuiTab-root": { color: "#000" }, 
        "& .Mui-selected": { color: "#22386A" }, 
        "& .MuiTabs-indicator": { backgroundColor: "#22386A" },
      }}
    >
      <Tab value={"Home"} label='Home' />
      <Tab value={"The Lazy Backpacker"} label='The Lazy Backpacker' />
      <Tab value={"Yumx"} label='Yumx' />
      <Tab value={"3D models and prints"} label='3D models and prints' />
    </Tabs>
  );
}
