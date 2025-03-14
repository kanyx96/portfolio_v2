import { Box, Grid2, List, ListItem, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import styles from "./styles.module.css";
import Image from "next/image";

export function Personal_Projects() {
  return (
    <Box
      display='flex'
      sx={{ height: "100%", overflowY: "auto", width: "100%" }}
      alignItems='flex-start'
      flexDirection='column'
    >
      <Typography variant='h6'>{"Personal Projects"}</Typography>
      <Box
        display='flex'
        alignItems='flex-start'
        sx={{
          marginBottom: "5px",
          marginTop: "25px",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          variant='h6'
          sx={{
            textDecoration: "underline",
            marginRight: "10px",
          }}
        >
          The Lazy Backpacker
        </Typography>
        <OpenInNewIcon
          className={styles.iconStyle}
          onClick={() => window.open("https://thelazybackpacker.com", "_blank")}
        />
      </Box>
      <List sx={{ paddingBottom: "25px", width: "100%" }}>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant='body1'>
            Developed and launched a smart AI travel itinerary planner that
            helps those that loves travelling but hates planning.
          </Typography>
          <List dense>
            <ListItem>Incorporates AI to generate a draft itinerary</ListItem>
            <ListItem>User-centric UI/UX for customising itinerary</ListItem>
            <ListItem>Maps and direction integration</ListItem>
          </List>
        </ListItem>
        <ListItem>
          <Grid2 container sx={{ width: "100%" }} gap={2}>
            <Grid2 size={5}>
              <Image
                alt='The Lazy Backpacker 1'
                src='/thelazybackpacker_website_desktop.png'
                width={902}
                height={453}
              />
            </Grid2>
            <Grid2 size={5.5}>
              <Image
                alt='The Lazy Backpacker 2'
                src='/lazy_backpacker_output.png'
                width={1009}
                height={453}
              />
            </Grid2>
          </Grid2>
        </ListItem>
        <ListItem>
          <List dense>
            <ListItem>
              Built using React (Next.js), AWS and DynamoDB as my backend and
              taping on google maps API
            </ListItem>
            <ListItem>Launched thelazybackpacker.com in Sep 2024</ListItem>
            <ListItem>
              Reach the final stage of Business Innovations Generator (BIG)
              incubator programme by SMU in Jan 2025
            </ListItem>
          </List>
        </ListItem>
      </List>
      <Typography
        variant='h6'
        sx={{
          textDecoration: "underline",
          marginRight: "10px",
        }}
      >
        Yumx
      </Typography>
      <List sx={{ paddingBottom: "25px", width: "100%" }}>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant='body1'>
            Developed an Android app that helps users overcome choice fatigue by
            randomizing food options (Jun 2023 – Dec 2023)
          </Typography>
          <List dense>
            <ListItem>
              Helps users overcome choice fatigue by randomizing food options
              based on preferences such as distance, ratings, and cuisine type
            </ListItem>
            <ListItem>
              Embarked on this project because I was intrigued by phone
              application development as I was not exposed to it in my previous
              job
            </ListItem>
            <ListItem>
              Fully developed the application in Dec 2023 using React Native
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <Grid2 container sx={{ width: "100%" }} gap={1}>
            <Grid2 size={2}>
              <Image
                alt='Yumx 1'
                src='/Yumx Light Mode.png'
                width={322}
                height={533}
              />
            </Grid2>
            <Grid2 size={2}>
              <Image
                alt='Yumx 2'
                src='/Yumx Dark Mode.png'
                width={322}
                height={533}
              />
            </Grid2>
            <Grid2 size={2}>
              <Image
                alt='Yumx 3'
                src='/yumx Rolling for food option.png'
                width={322}
                height={533}
              />
            </Grid2>
            <Grid2 size={2}>
              <Image
                alt='Yumx 4'
                src='/yumx display food option.png'
                width={322}
                height={533}
              />
            </Grid2>
            <Grid2 size={2.17}>
              <Image
                alt='Yumx 5'
                src='/yumx food option list.png'
                width={322}
                height={533}
              />
            </Grid2>
          </Grid2>
        </ListItem>
      </List>
    </Box>
  );
}
