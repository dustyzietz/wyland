import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useInputState from "./hook/useInputState";
import {StateContext} from './context/context.state';




export default function AddForm() {
  const [artist, updateArtist, resetArtist] = useInputState('') ;
  const [name, updateName, resetName] = useInputState('') ;
  const [image, updateimage, resetimage] = useInputState('') ;
  const { addPainting } = useContext(StateContext);
  return (
    <div>
      <DialogTitle id="form-dialog-title">Add Painting</DialogTitle>
      <DialogContent>
      <TextField
            autoFocus
            margin="dense"
            id="artist"
            label="Artist"
            value={artist}
            onChange={updateArtist}
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Painting Name"
            value={name}
            onChange={updateName}
            fullWidth
          />
            <TextField
            autoFocus
            margin="dense"
            id="image"
            label="image address"
            value={image}
            onChange={updateimage}
            fullWidth
          />
      </DialogContent>
      <DialogActions>
          <Button onClick={() => addPainting(artist, name, image)} variant="contained" color="primary">
           Add Painting
          </Button>
          </DialogActions>  
    </div>
  )
}
