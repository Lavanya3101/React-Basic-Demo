import React from 'react'
import {Typography, AppBar,Toolbar, Container, ImageList, ImageListItem, TextField, Button, makeStyles} from '@material-ui/core'
import ImagesData from './ImagesData.json';
// import CameraAltIcon from '@mui/icons-material/CameraAlt';

const useStyles=makeStyles({
    text:{
      'marginTop':'70px',
      'textAlign':'center'  
    }
})
const ComponentA = () => {
    const classes=useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
            {/* <CameraAltIcon/> */}
            <Typography variant='h4'>Photography</Typography>
        </Toolbar>
      </AppBar>
      {/* <Container style={{'marginTop':'70px','textAlign':'center'}}> */}
      <Container className={classes.text}>
        <Typography variant='h2'>Our latest version of photography</Typography>
        <Typography paragraph>Pleasure to take your photos as well, Please fill the below form for any invite req</Typography>
      </Container>
      <Container>
        <ImageList rowHeight={170}cols={3}>
            {ImagesData.map(i=>(
 <ImageListItem key={i.id}>
    <img src={i.img} alt={i.title}/>
 </ImageListItem>
            ))}
           
        </ImageList>
      </Container>
      <center>
        <Container>
            <Typography variant='h4'>Contact Form</Typography>
            <form>
                <TextField  style={{"width":'500px',"margin":'5px'}} type='text' label="Name" variant='outlined'/><br/>
                <TextField  style={{"width":'500px',"margin":'5px'}} type='email' label="Email" variant='outlined'/><br/>
                <TextField  style={{"width":'500px',"margin":'5px'}} type='text' label="Proposal" variant='outlined'/><br/>
                <TextField  style={{"width":'500px',"margin":'5px'}} type='text' label="Address" variant='outlined'/><br/>
            <Button variant='contained' color='primary'>Submit</Button>
            </form>
        </Container>
      </center>
    </div>
  )
}

export default ComponentA
