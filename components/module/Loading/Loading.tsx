import React, { FC } from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles: any = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    color: 'red',
  },
});

const LoadingSpinner: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress color='inherit' />
    </div>
  );
};

export default LoadingSpinner;
