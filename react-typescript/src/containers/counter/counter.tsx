import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { incrementCount, decrementCount } from "../../redux/actionCreators";
import { Dispatch } from "redux"
import { CounterState } from '../../type';
import { IAppState } from '../../redux/reducers/rootReducer';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

const Counter: React.FC = () => {
    const classes = useStyles();

    const dispatch: Dispatch = useDispatch()
    const count = useSelector(
        (state: IAppState) => state.counterReducer.counter,
    )

    console.log(dispatch);

    const inc = () => {
        dispatch(incrementCount())
    }

    const dec = () => {
        dispatch(decrementCount())
    }


    return (
        <div className={classes.root}>
            <Grid container direction="row"
                justify="center"
                alignItems="center"
                spacing={3}>
                <Grid item xs className={classes.paper}>
                    {count}
                    <button onClick={dec}>Dec - </button>
                    <button onClick={inc}>Inc +</button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Counter;