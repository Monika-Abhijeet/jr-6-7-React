import { Button, Stack } from "@mui/material";
function GoogleUI() {
  return (
    <div>
      <h1>Google UI</h1>
      <Stack spacing={1} direction="column">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
}

export default GoogleUI;
