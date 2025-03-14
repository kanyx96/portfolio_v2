import { Box, Avatar, Typography, List, ListItem, Grid2 } from "@mui/material";

export function About_Me() {
  return (
    <Grid2 container spacing={2} sx={{height: "100%", overflowY: "auto"}}>
      <Grid2 size={8}>
        <Typography variant='h6'>{"About Me"}</Typography>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
          gap={5}
        >
          <Box
            display='flex'
            alignItems='flex-start'
            gap={5}
            sx={{ marginTop: "25px" }}
          >
            <Avatar
              alt='Profile Image'
              src='/Kan Yi Xin Photo.jpg'
              sx={{ width: 150, height: 150 }}
            />
            <List>
              <ListItem>
                <Typography
                  variant='subtitle2'
                  sx={{ fontSize: 16, textDecoration: "underline" }}
                >
                  Software Developer
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant='body1' sx={{ fontSize: 16 }}>
                  Driven and Passionate
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant='body1' sx={{ fontSize: 16 }}>
                  Outspoken, confident, creative and Fearless
                </Typography>
              </ListItem>
            </List>
          </Box>
          <Typography variant='body1'>
            Driven and passionate software developer. Outspoken, creative and
            fearless in generating innovative ideas and thinking outside the
            box. Able to work well in group projects with good people’s skills.
            Fast learner with competence in multiple languages.
          </Typography>
        </Box>
      </Grid2>
      <Grid2 size={4}>
        <Typography variant='h6'>Languages</Typography>
        <List sx={{ paddingBottom: "25px" }}>
          <ListItem>
            <Typography variant='body1'>Javascript</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>CSS</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>Java</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>Power Query</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>VBA</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>SQL</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>GraphQL</Typography>
          </ListItem>
        </List>
        <Typography variant='h6'>Skills</Typography>
        <List>
          <ListItem>
            <Typography variant='body1'>Full-stack development</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>AWS and cloud deployment</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>React</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>React Native</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>Effective communicator</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>three.js</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>Project Management</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>3D Modelling</Typography>
          </ListItem>
          <ListItem>
            <Typography variant='body1'>3D Printing</Typography>
          </ListItem>
        </List>
      </Grid2>
    </Grid2>
  );
}
