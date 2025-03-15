import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";

export function ThreeD_Projects() {
  return (
    <Box
      display='flex'
      sx={{ height: "100%", overflowY: "auto" }}
      alignItems='flex-start'
      flexDirection='column'
    >
      <Typography variant='h6'>{"3D Projects and Prints"}</Typography>
      <Box sx={{ marginTop: "25px", marginBottom: "25px" }}>
        <Typography variant='body1'>
          I made 3D models and prints of major places in my life for fun and for
          memory
        </Typography>
      </Box>
      <Typography
        variant='h6'
        sx={{
          textDecoration: "underline",
          marginBottom: "10px"
        }}
      >
        University College London
      </Typography>
      <Grid2 container sx={{ width: "100%", marginBottom: "25px" }} gap={1}>
        <Grid2 size={2.75}>
          <Image
            alt='UCL 1'
            src='/UCL 3D model.jpg'
            width={852}
            height={852}
          />
        </Grid2>
        <Grid2 size={2.75}>
          <Image
            alt='UCL 2'
            src='/UCL 3D print.jpg'
            width={852}
            height={852}
          />
        </Grid2>
      </Grid2>
      <Typography
        variant='h6'
        sx={{
          textDecoration: "underline",
          marginBottom: "10px"
        }}
      >
        Army - Officer Cadet School
      </Typography>
      <Grid2 container sx={{ width: "100%", marginBottom: "25px" }} gap={1}>
        <Grid2 size={2.75}>
          <Image
            alt='OCS 1'
            src='/OCS Tower 3D model.jpg'
            width={852}
            height={852}
          />
        </Grid2>
        <Grid2 size={2.75}>
          <Image
            alt='OCS 2'
            src='/OCS Tower 3D print.jpg'
            width={852}
            height={852}
          />
        </Grid2>
        <Grid2 size={2.75}>
          <Image
            alt='OCS 3'
            src='/OCS Tower 3D print_2.jpg'
            width={852}
            height={852}
          />
        </Grid2>
      </Grid2>
      <Typography
        variant='h6'
        sx={{
          textDecoration: "underline",
          marginBottom: "10px"
        }}
      >
        Nan Hua High School
      </Typography>
      <Grid2 container sx={{ width: "100%", marginBottom: "25px" }} gap={1}>
        <Grid2 size={2.75}>
          <Image
            alt='NHHS 1'
            src='/Nan Hua 3D model.jpg'
            width={852}
            height={852}
          />
        </Grid2>
        <Grid2 size={2.75}>
          <Image
            alt='NHHS 2'
            src='/Nan Hua 3D model_2.jpg'
            width={852}
            height={852}
          />
        </Grid2>
        <Grid2 size={2.75}>
          <Image
            alt='NHHS 3'
            src='/Nan Hua 3D print.jpg'
            width={852}
            height={852}
          />
        </Grid2>
        <Grid2 size={2.75}>
          <Image
            alt='NHHS 4'
            src='/Nan Hua 3D print_2.jpg'
            width={852}
            height={852}
          />
        </Grid2>
      </Grid2>
      
    </Box>
  );
}
