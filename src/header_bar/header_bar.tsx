"use client";

import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Image from "next/image";
import { useState } from "react";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Header_Bar() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={styles.headerMain}>
      <h1 className={`${styles.nameText} text-3xl pixelated`}>Kan Yi Xin</h1>
      <div className={styles.lazybackpackerNameContainer} onClick={handleClick}>
        <Typography variant='h6' className={styles.lazybackpackerText}>
          The Lazy Backpacker
        </Typography>
        <Image
          src='/lazy-backpack-logo.png'
          alt='lazy backpack'
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
        className={styles.menuStyle}
        slotProps={{ paper: { className: styles.menuStyle } }}
      >
        {/* Non-clickable paragraph */}
        <MenuItem sx={{ pointerEvents: "none", whiteSpace: "normal" }}>
          <Box sx={{ fontSize: "14px", color: "gray" }}>
            This is a static paragraph inside the menu. It provides some
            information but cannot be clicked.
          </Box>
        </MenuItem>

        {/* Clickable button */}
        <MenuItem>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => window.open("https://thelazybackpacker.com", "_blank")}
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
