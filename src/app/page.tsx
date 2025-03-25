"use client";

import { useState, useEffect } from "react";
import { Box, Tabs, Tab, Typography, Paper } from "@mui/material";
import styles from "./styles.module.css";
import Header_Bar from "@/header_bar/header_bar";
import Image from "next/image";
import { About_Me } from "@/components/aboutMe";
import { Work_History } from "@/components/workHistory";
import { Personal_Projects } from "@/components/personalProjects";
import { Education_History } from "@/components/educationHistory";
import { ThreeD_Projects } from "@/components/threedProjects";

const tabs = [
  {
    label: "About Me",
    staticImg: "/me walking.png",
    animatedImg: "/me walking.gif",
  },
  {
    label: "Personal Projects",
    staticImg: "/me in front of computer.png",
    animatedImg: "/me in front of computer.gif",
  },
  {
    label: "Work History",
    staticImg: "/me army shooting.png",
    animatedImg: "/me army shooting.gif",
  },
  {
    label: "Education History",
    staticImg: "/me graduation.png",
    animatedImg: "/me graduation.gif",
  },
  {
    label: "3D Projects and Prints",
    staticImg: "/3D printer.png",
    animatedImg: "/3D printer.gif",
  },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const [hoveredTab, setHoveredTab] = useState<null | number>(null);

  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      if (typeof window !== "undefined") {
        const userAgent = navigator.userAgent;
        const mobileRegex = /Mobi|Android|iPhone|iPad|iPod/i;
        setIsMobile(mobileRegex.test(userAgent));
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return isMobile ? (
    <div className={styles.mobileBaseContainer}>
      <Typography variant='body1'>Mobile display under construction</Typography>
    </div>
  ) : (
    <div className={styles.baseContainer}>
      <Header_Bar />
      <Box className={styles.mainBoxStyle}>
        <Paper
          elevation={3}
          className={styles.paperContentStyle}
          sx={{ borderRadius: "10px", backgroundColor: "#FEFEFE" }}
        >
          {/* Left section with tabs */}
          <Box
            sx={{
              width: "20%",
              minWidth: 300,
              borderRight: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              orientation='vertical'
              value={selectedTab}
              onChange={handleChange}
              aria-label='Vertical tabs'
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  label={tab.label}
                  icon={
                    <Image
                      unoptimized
                      src={
                        selectedTab === index
                          ? tab.animatedImg
                          : hoveredTab === index
                          ? tab.animatedImg
                          : tab.staticImg
                      }
                      alt={tab.label}
                      width={index === 4 ? 50 : 75}
                      height={index === 4 ? 50 : 75}
                      style={index === 4 ? { marginRight: 12.5 } : {}}
                    />
                  }
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    flexDirection: "row",
                  }}
                  iconPosition='end'
                  onMouseEnter={() => setHoveredTab(index)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className='pixelated'
                />
              ))}
            </Tabs>
          </Box>

          {/* Right section with content */}
          <Box sx={{ flex: 1, p: 3, height: "100%" }}>
            {tabs[selectedTab].label === "About Me" ? (
              <About_Me />
            ) : tabs[selectedTab].label === "Personal Projects" ? (
              <Personal_Projects />
            ) : tabs[selectedTab].label === "Work History" ? (
              <Work_History />
            ) : tabs[selectedTab].label === "Education History" ? (
              <Education_History />
            ) : tabs[selectedTab].label === "3D Projects and Prints" ? (
              <ThreeD_Projects />
            ) : (
              <Typography variant='body1' sx={{ mt: 1 }}>
                Placeholder content for {tabs[selectedTab].label}.
              </Typography>
            )}
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

