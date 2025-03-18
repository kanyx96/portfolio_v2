import { Box, Avatar, Typography, List, ListItem, Grid2 } from "@mui/material";

export function About_Me() {
  return (
    <Grid2 container spacing={2} sx={{ height: "100%", overflowY: "auto" }}>
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
                  Engineer (Software)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant='body1' sx={{ fontSize: 16 }}>
                  Driven, Passionate and Relentless
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant='body1' sx={{ fontSize: 16 }}>
                  Outspoken and Confident
                </Typography>
              </ListItem>
            </List>
          </Box>
          <div>
            <Typography variant='h6' sx={{ textDecoration: "underline" }}>
              My Dream
            </Typography>
            <Typography variant='body1'>
              I aspire to spend my entire career creating products—whether
              software or hardware—that make a difference and help solve
              real-world problems.
            </Typography>
          </div>
          <div>
            <Typography variant='h6' sx={{ textDecoration: "underline" }}>
              Journey as an Engineer
            </Typography>
            <Typography variant='body1'>
              Growing up as the son of a mechanical engineer, with a passion for
              Legos and problem-solving, I always knew I wanted to pursue a
              career in engineering. So, it was an easy decision for me to study
              engineering at university.
              <br />
              <br />
              My first exposure to software engineering was in University. I was
              studying Mechanical Engineering with direct Masters. I fell in
              love with software becuase of how accessible it is. I found a
              study of engineering where I can build what my imagination holds
              without substantial upfront capital/resourses.
              <br />
              <br />
              Every holiday, I had to come back to Singapore to fulfill my bond
              with The Army and it was there that I demonstrated my capabilities
              in software development. I was also lucky that when I come back to
              fulfill my bond with the Army, it was the start of the pandemic
              and personnel are needed to work in the COVID Technology Task
              Force as software developers. I developed my skills from there and
              took it further when I left the Army to work on my own personal
              projects.
            </Typography>
          </div>
          <div>
            <Typography variant='h6' sx={{ textDecoration: "underline" }}>
              Journey to Army
            </Typography>
            <Typography variant='body1'>
              When I was 15, I was the chairperson of Nan Hua&apos;s Boys&apos;
              Brigade Company. Being in an uniform group and being a history
              buff (especially history on war), I have always dreamt about being
              in the Army and I worked my ass off in Secondary School and JC to
              get an Army Scholarship.
              <br />
              <br />I got into OCS and got a scholarship to study at University
              College London (UCL).
            </Typography>
          </div>
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
