import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import {
  Delete,
  Done,
  FileUploadRounded,
  Save,
  Upload,
  Drafts,
} from "@mui/icons-material";
function MaterialUI() {
  return (
    <div>
      <h1>Material UI</h1>
      <h2>Demo of buttons</h2>
      {/* <button className="btn btn-primary">Bootstrap button</button> */}
      <Stack spacing={3} direction="row">
        <Button variant="contained" color="success">
          Contained
        </Button>
        <Button variant="outlined" color="error">
          Outlined
        </Button>
        <Button variant="text" color="warning">
          Text
        </Button>
        <Button variant="contained" color="error" endIcon={<Delete />}>
          Delete
        </Button>
        <Button variant="contained" color="success" startIcon={<Done />}>
          Success
        </Button>
      </Stack>
      <IconButton>
        <Upload></Upload>
        <Save></Save>
        <Drafts></Drafts>
      </IconButton>
      <ButtonGroup variant="outlined" color="warning">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <div>
        <Checkbox defaultChecked></Checkbox>
        <Checkbox></Checkbox>
        <Checkbox disabled></Checkbox>
        <Checkbox checked></Checkbox>
      </div>
      <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
      </FormGroup>
    </div>
  );
}

export default MaterialUI;
