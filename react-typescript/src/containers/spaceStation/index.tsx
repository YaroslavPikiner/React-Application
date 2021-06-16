import ListAstro from './list';
import Map from './map.jsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: 'relative',
        },
    }),
);

const SpaceStation = () => {
    const classes = useStyles();
    const [mapAstro, setMapAstro] = useState([])
    useEffect(() => {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json())
            .then(res => setMapAstro(res.people))
    }, [])

    return (
        <>
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Space Statio
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item xs={6} spacing={3}>
                    <Map />
                </Grid>
                <Grid item xs={6} spacing={3}>
                    <ListAstro mapAstro={mapAstro} />
                </Grid>
            </Grid>
        </>
    )
}


export default SpaceStation;