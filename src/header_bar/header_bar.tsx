"use client";

import { Box, Button, List, ListItem, Menu, MenuItem, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Image from "next/image";
import { useRef, useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Header_Bar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={styles.headerMain}>
      <h1 className={`${styles.nameText} text-3xl pixelated`}>Kan Yi Xin</h1>
      <div
        className={styles.lazybackpackerNameContainer}
        onClick={handleClick}
        ref={elementRef}
      >
        <Typography variant="h6" className={styles.lazybackpackerText}>
          The Lazy Backpacker
        </Typography>
        <Image
          src="/lazy-backpack-logo.png"
          alt="lazy backpack"
          width={50}
          height={50}
        />
      </div>

      {/* Clickable Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              width: elementRef.current
                ? elementRef.current.offsetWidth
                : "auto", // Match width dynamically
            },
          },
        }}
      >
        {/* Non-clickable paragraph */}
        <MenuItem sx={{ pointerEvents: "none", whiteSpace: "normal" }}>
          <Box sx={{ fontSize: "14px", color: "#28221E" }}>
            <Typography variant="subtitle2">Smart AI Travel Itinerary Planner</Typography>
            <List dense>
              <ListItem>AI powered</ListItem>
              <ListItem>Customisable Itinerary</ListItem>
              <ListItem>Maps and direction integration</ListItem>
            </List>
          </Box>
        </MenuItem>

        {/* Clickable button */}
        <MenuItem>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() =>
              window.open("https://thelazybackpacker.com", "_blank")
            }
            sx={{
              fontSize: "12px",
              padding: "4px 8px",
              height: "30px",
              borderRadius: "7px",
            }}
            endIcon={<OpenInNewIcon />}
          >
            Visit thelazybackpacker.com
          </Button>
        </MenuItem>
      </Menu>
    </header>
  );
}
