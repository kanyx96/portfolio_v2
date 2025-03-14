import { Box, List, ListItem, Typography } from "@mui/material";

export function Work_History() {
  return (
    <Box
      display='flex'
      sx={{ height: "100%", overflowY: "auto" }}
      alignItems='flex-start'
      flexDirection='column'
    >
      <Typography variant='h6'>{"Work History"}</Typography>
      <Typography
        variant='h6'
        sx={{
          textDecoration: "underline",
          marginBottom: "5px",
          marginTop: "25px",
        }}
      >
        Singapore Armed Forces - Lead Engineer (2019 - 2023)
      </Typography>
      <List sx={{ paddingBottom: "25px" }} dense>
        <Typography variant='h6' component='div'>
          Developed software solutions as a part of the COVID-19 Technology Task
          Force
        </Typography>
        <ListItem>
          <Typography variant='body1' color="gray">
            Developed and operationalised a web application for medical
            professionals to coordinate their movement between key medical
            support locations (ReactJS and graphql)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1' color="gray">
            Developed and operationalised safe distancing video analytic tools.
            One utilisation for the tool was to ensure that personnel involved
            in the 2020 National Day Parade practise safe distancing measures
            during rehearsals (python backend)
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1' color="gray">
            Received strong positive feedback for contributions especially in
            the influence of the designs and functionalities from the task
            force’s project manager
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1' color="gray">
            Awarded the COVID-19 resilience medal
          </Typography>
        </ListItem>
      </List>
      <List sx={{ paddingBottom: "25px" }} dense>
        <Typography variant='h6' component='div'>
          Led a team from DSTA to develop and deliver a simulation and data
          visualisation tool that identifies anomalies in the Army’s enterprise
          resource planning process
        </Typography>
        <ListItem>
          <Typography variant='body1' color="gray">
            Reduces time required to determine supply chain decisions by 90%
            from 2 hours to 10 minutes
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1' color="gray">
            Developed a software tool using Visual Basic for use within the Army
            for data extraction
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1' color="gray">
            The application reads and translates operation data into engineering
            data such as Mean Time Before Failure and Component Repair Time etc
            to be used in a Monte Carlo simulation
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1' color="gray">
            Runs on Visual Basic, .NET framework, utilises multi-threading and
            displays the output on powerBI for overall fleet health
          </Typography>
        </ListItem>
      </List>
      <List sx={{ paddingBottom: "25px" }} dense>
        <Typography variant='h6' component='div'>
          Programmed and developed the front-end user interface that digitalized
          legacy tanks bought by the Army in the 1990s to 2000s for data
          collection and data analysis
        </Typography>
        <ListItem>
          <Typography variant='body1' color="gray">
            logs data collected from the sensors in the tanks and significantly
            improved efficiency by saving man-hours and human error in data
            entry
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1' color="gray">
            Half an hour of man-hour is saved per day per vehicle
          </Typography>
        </ListItem>
      </List>
      <List sx={{ paddingBottom: "25px" }} dense>
        <Typography variant='h6' component='div'>
          Provided engineering and design expertise to influence the development
          of the user interface of the Hunter tank
        </Typography>
        <ListItem>
          <Typography variant='body1' color="gray">
            Improve user friendliness and enhance capabilities for the operators
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1' color="gray">
            E.g. setting warning limits and placement of features
          </Typography>
        </ListItem>
      </List>
      <List sx={{ paddingBottom: "25px" }} dense> 
        <Typography variant='h6' component='div'>
          Identified key flaws in the software of a legacy tank
        </Typography>
        <ListItem>
          <Typography variant='body1' color="gray">
            Worked with an overseas original equipment manufacturer to resolve
            said issue
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1' color="gray">
            preventing equipment damage of $215,000 per vehicle
          </Typography>
        </ListItem>
      </List>
      <List sx={{ paddingBottom: "25px" }} dense>
        <Typography variant='h6' component='div'>
          Programmed and developed a hand-over and take-over of equipment web
          application for the Army’s construction equipment
        </Typography>
        <ListItem>
          <Typography variant='body1' color="gray">
            E.g. forklifts, bulldozer, dump truck etc.
          </Typography>
        </ListItem>
        <ListItem>
          <Typography variant='body1'color="gray" >
            Programmed using the LAMP (Linux, Apache, MySql and PHP) Stack
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}
