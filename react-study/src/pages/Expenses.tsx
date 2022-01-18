import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function Demo() {
  return (
    <Box style={{margin:'auto'}}>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
    </Box>
  );
}
