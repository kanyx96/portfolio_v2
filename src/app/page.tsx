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
    staticImg: "/me army shooting.png",
    animatedImg: "/me army shooting.gif",
  },
  {
    label: "Personal Projects",
    staticImg: "/me in front of computer.png",
    animatedImg: "/me in front of computer.gif",
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

  return (
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

