import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';

export default function MaterialUi() {

    const clickHandler= () => {
        console.log("Btn clicked");
    }

  return (
    <div>
      <h3>Hello</h3>
      <Button>Click Me</Button>
     <Button variant='contained'>Click Me</Button>
     <Button variant='contained' startIcon={<DeleteIcon/>}>Click Me</Button>
     <Button variant='contained' color='error'>Click Me</Button>
     <Button variant='contained' color='success' size='small'>Click Me</Button>
     <Button variant='contained' disabled>Click Me</Button>
     <Button variant="outlined" onClick={clickHandler}>Outlined</Button>
     <Alert severity="success">This is a success Alert.</Alert>

    </div>
  )
}
