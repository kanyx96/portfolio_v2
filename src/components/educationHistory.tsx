import { Box, Typography, List, ListItem } from "@mui/material";

export function Education_History() {
  return (
    <Box
      display='flex'
      sx={{ height: "100%", overflowY: "auto" }}
      alignItems='flex-start'
      flexDirection='column'
    >
      <Typography variant='h6'>{"Education History"}</Typography>
      <List sx={{ paddingBottom: "25px", marginTop: "25px" }} dense>
        <Typography variant='h6' component='div'>
          Mechanical Engineering Master&apos;s from University College London
          (2016 - 2019)
        </Typography>
        <ListItem>
          <Typography variant='body1' color='gray'>
            Created an automatic warning system for self-driving cars using soft
            robotics for final year project
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1' color='gray'>
            Design, modelled and simulated a layout for a ramen factory to
            achieve ideal and optimised workflow for Master&apos;s project
          </Typography>
        </ListItem>
      </List>
      <List sx={{ paddingBottom: "25px" }} dense>
        <Typography variant='h6' component='div'>
          Completed courses in Test Driven Development, Object Oriented Design
          and Agile with NUS (2020)
        </Typography>
      </List>
      <List sx={{ paddingBottom: "25px" }} dense>
        <Typography variant='h6' component='div'>
          Achieved 4As and rank points of 87.5 for A-levels
        </Typography>
        <ListItem>
          <Typography variant='body1' color='gray'>
            Competed in and finished third for National Hockey A-division with
            ACJC
          </Typography>
        </ListItem>
      </List>
      <List sx={{ paddingBottom: "25px" }} dense>
        <Typography variant='h6' component='div'>
          Achieved 7As with a L1R5 of 9 points for O-levels
        </Typography>
        <ListItem>
          <Typography variant='body1' color='gray'>
            Chairperson for Nan Hua High School Boy&apos;s Brigade
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1' color='gray'>
            Competed in National Football B-division and C-division
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}
