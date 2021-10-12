import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

export default function UploadButton({
    text = "UPLOAD",
    register = () => console.log("register"),
    name,
    accept
}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <input
                accept={`${accept}/*`}
                className={classes.input}
                id={`contained-button-file ${name}`}
                multiple
                type="file"
                name={name}
                {...register(name, { required: true })}
            />
            <label htmlFor={`contained-button-file ${name}`}>
                <Button variant="contained" color="primary" component="span">
                    {text}
                </Button>
            </label>
            {/* <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label> */}
        </div>
    );
}