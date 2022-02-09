import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    fontSize: "3rem",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      fontSize: "1.3rem"
    }
  },
  content: {
    fontSize: "1.5rem",
    textAlign: 'center',
    margin: theme.spacing(0),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      height: 80,
      margin: theme.spacing(0),
      fontSize: "0.8rem",
    }
  }
}))


export default function TextMobileStepper({ auth }) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setNotes] = React.useState([{
    _id: '',
    show_day: '',
    diary_day: '',
    content: ''
  }])

  const maxSteps = steps.length;

  // useEffect(() => {
  //   fetch("http://localhost:3001/").then(res => {
  //     if (res.ok) {
  //       return res.json()
  //     }
  //   }).then(jsonRes => setNotes(jsonRes))
  // }, [])

  const getData = async () => {
    const response = await fetch("https://piggyweb.herokuapp.com/")
    const users = await response.json()
    setNotes(users)
  }

  React.useEffect(() => {
    getData()
  }, [])

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [size, setSize] = React.useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  React.useEffect(() => {
    window.addEventListener("resize", checkSize)
    return () => {
      window.removeEventListener("resize", checkSize)
    }
  })

  return (
    <Box sx={{ maxWidth: { size }, flexGrow: 1, mb: 5 }}>
      <Paper
        square
        elevation={0}
      >
        <Typography className={classes.title}>Diary Day: {steps[activeStep].diary_day}</Typography>
      </Paper>
      <Box className={classes.content} sx={{ height: 155, maxWidth: { size }, p: 2 }}>
        {steps[activeStep].content}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}


