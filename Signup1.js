import  React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MailIcon from '@mui/icons-material/Mail';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { Card } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import logo1 from '../images/logo-sharecare.svg'
import ExpandableContent from './Expand';




const defaultTheme = createTheme();

export default function SignUp() {
    const [gender, setGender] = React.useState('');
    const [formData, setFormData] = useState({
      streetAddress: '',
      city: '',
      state: '',
      mobileNumber: '',
      dateOfBirth: '',
      gender: '',
      email: '',
    });
  
    const [errors, setErrors] = useState({});
  
    // const handleChange = (e) => {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value,
    //   });
    // };
  
    const validate = () => {
      let errors = {};
      if (!formData.streetAddress) errors.streetAddress = 'Street address is required';
      if (!formData.city) errors.city = 'City is required';
      if (!formData.state) errors.state = 'State is required';
      if (!formData.mobileNumber) {
        errors.mobileNumber = 'Mobile number is required';
      } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
        errors.mobileNumber = 'Mobile number is invalid';
      }
      if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of birth is required';
      if (!formData.gender) errors.gender = 'Gender is required';
      if (!formData.email) {
        errors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = 'Email is invalid';
      }
      return errors;
    };
  
    const handleChange = (event: SelectChangeEvent) => {
      setGender(event.target.value);
    };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div div className='sign-up'>
    <ThemeProvider theme={defaultTheme}>
       <div className='top-content'>
        <img src={logo1} />
        <Button variant='outlined'>
          how it works
        </Button>
        </div>
      <Container component="main" maxWidth="xs">
      
        <CssBaseline />
     
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5" sx={{fontSize:'42px' , fontWeight:'500', color:'#006658', margin:'25px'}}>
            Sign up
          </Typography>
          <Card className='card'>
          <Box component="form"  noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} >
            <div className="form-group">
        <p><span><MedicalInformationOutlinedIcon/></span>Your Information</p>
        </div>
              </Grid>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  variant='standard'
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><ModeEditOutlinedIcon/></InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="streetAddress"
                  label="Street Address "
                  variant='standard'
                  name="streetAddress"
                
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><ModeEditOutlinedIcon/></InputAdornment>,
                  }}
                />
              </Grid>
              
              <Grid item spacing={2} xs={12} sm={6} className='city' >
                <TextField
                  required
                 
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                  variant='standard'
                  autocomplete="off"
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><ModeEditOutlinedIcon/></InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} spacing={2} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="state"
                  label="State"
                  variant='standard'
                  type="password"
                  id="state"
                 
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><ModeEditOutlinedIcon/></InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="mobileNumber"
                  label="Mobile No "
                  variant='standard'
                  name="mobileNumber"
                 
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><ModeEditOutlinedIcon/></InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="dateOfBirth"
                  label="Date of Birth"
                  variant='standard'
                  name="dateOfBirth"
                  autoComplete="family-name"
                  InputProps={{
                    endAdornment: <InputAdornment position="end"><ModeEditOutlinedIcon/></InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
              <FormControl variant="standard" className='mb-0' sx={{width:'100%'}} >
        <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
              <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={gender}
          onChange={handleChange}
          label="Gender"
        >
          
          <MenuItem value={20} >Male</MenuItem>
          <MenuItem value={30}>Female</MenuItem>
        </Select>
        </FormControl>
              </Grid>
              </Grid>
              </Box>
              </Card>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
             <div className='email'>
              <TextField
              required
              fullWidth
          label=""
           id="outlined-size-small"
          defaultValue=""
          placeholder='email'
          size="small"
        />
              </div>
              <div className='btn-div'>
            <Button
            startIcon={<MailIcon/>}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Continue with Email
            </Button>
            </div>
            <div className='footer-cont'>
            <Grid container justifyContent="center">
              <Grid item>
                <p>
                  By Signing up, I agree to the <span className='h-text'>Offer Terms <ExpandableContent/> </span>
                </p>
              </Grid>
            </Grid>
            </div>
           </Box>
      </Container>
    </ThemeProvider>
    </div>
  );
}