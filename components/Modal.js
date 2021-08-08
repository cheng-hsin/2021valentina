import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#C4BAFF',
    border: '5px solid #B98DEB',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    var inputVal = document.getElementById('date').value;
    if (inputVal == '0814') {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>Hi! Tina Shen.</h2>
            <h2 id='transition-modal-title'>💗今天是特別的日子💗</h2>
            <p id='transition-modal-description'>
              請輸入今天的日期 ex.0323、0314
            </p>
            <TextField id='date' label='🐱🐱🐱🐱' variant='outlined' />
            &nbsp;
            <Button
              type='button'
              variant='contained'
              color='secondary'
              onClick={handleClose}
            >
              GO GO 🏹
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
