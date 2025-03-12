"use client";

import { useState } from "react";
import { Box, Tabs, Tab, Typography, Paper } from "@mui/material";
import styles from "./styles.module.css";
import Header_Bar from "@/header_bar/header_bar";
import Image from "next/image";

const tabs = [
  {
    label: "About Me",
    staticImg: "/me walking.png",
    animatedImg: "/me walking.gif",
  },
  {
    label: "Work History",
    staticImg: "/me walking.png",
    animatedImg: "/me walking.gif",
  },
  {
    label: "Personal Projects",
    staticImg: "/me walking.png",
    animatedImg: "/me walking.gif",
  },
  {
    label: "Education History",
    staticImg: "/me walking.png",
    animatedImg: "/me walking.gif",
  },
  {
    label: "3D Projects and Prints",
    staticImg: "/me walking.png",
    animatedImg: "/me walking.gif",
  },
];

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const [hoveredTab, setHoveredTab] = useState<null | number>(null);

  return (
    <div className={styles.baseContainer}>
      <Header_Bar navigation_value='Home' />
      <Box className={styles.mainBoxStyle}>
        <Paper elevation={3} className={styles.paperContentStyle}>
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
                      src={
                        selectedTab === index
                          ? tab.animatedImg
                          : hoveredTab === index
                          ? tab.animatedImg
                          : tab.staticImg
                      }
                      alt={tab.label}
                      width={75}
                      height={75}
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
                />
              ))}
            </Tabs>
          </Box>

          {/* Right section with content */}
          <Box sx={{ flex: 1, p: 3 }}>
            <Typography variant='h6'>
              {tabs[selectedTab].label} Content
            </Typography>
            <Typography variant='body1' sx={{ mt: 1 }}>
              Placeholder content for {tabs[selectedTab].label}.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </div>
  );
}

