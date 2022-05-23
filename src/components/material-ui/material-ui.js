import {
  Button,
  Stack,
  IconButton,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
  Paper,
  Typography,
  AppBar,
  Toolbar,
  Card,
  Box,
  CardContent,
  CardActions,
} from "@mui/material";
import {
  Delete,
  Done,
  FileUploadRounded,
  Save,
  Upload,
  Drafts,
  Menu,
} from "@mui/icons-material";
let icecreamData = [
  {
    desert: "Vanilla",
    calories: 100,
    fat: "10%",
    carbs: "60%",
    protein: "20%",
  },
  {
    desert: "Butterscotch",
    calories: 100,
    fat: "10%",
    carbs: "60%",
    protein: "20%",
  },
  {
    desert: "Strawberry",
    calories: 100,
    fat: "10%",
    carbs: "60%",
    protein: "20%",
  },
];
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
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Desert</TableCell>
              <TableCell>Calories</TableCell>
              <TableCell>Fats</TableCell>
              <TableCell>Carbs</TableCell>
              <TableCell>Protein</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {icecreamData.map((icecream) => {
              return (
                <TableRow>
                  <TableCell>{icecream.desert}</TableCell>
                  <TableCell>{icecream.calories}</TableCell>
                  <TableCell>{icecream.fat}</TableCell>
                  <TableCell>{icecream.carbs}</TableCell>
                  <TableCell>{icecream.protein}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <h1>Demo of typography</h1>
      <Typography variant="h1" component="div">
        Heading 1
      </Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Sub title 1</Typography>
      <Typography variant="body1">Body 1</Typography>
      <Typography variant="body2">Body 2</Typography>
      <h1>demo of appbar</h1>
      <AppBar>
        <Toolbar className="d-flex flex-row justify-content-between">
          <IconButton size="large" edge="start" color="inherit">
            <Menu />
          </IconButton>
          <Typography>News</Typography>
          <Button color="error" variant="contained">
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <h1>demo of card</h1>
      <Box sx={{ width: 275 }}>
        <Card variant="outlined" sx={{ height: "300px" }}>
          <CardContent>
            <h2>Monika</h2>
            <h4>This is description about monika</h4>
          </CardContent>
          <CardActions>
            <Button size="small">Learn more</Button>
          </CardActions>
        </Card>
      </Box>

      <h1>Deno of paper</h1>
      <Paper sx={{ width: 300, height: 400 }}>paper content goes here</Paper>
    </div>
  );
}

export default MaterialUI;
