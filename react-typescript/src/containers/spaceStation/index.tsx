import React, { useEffect, useState } from 'react';
import ListAstro from './list';
import Map from './map.jsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { motion } from "framer-motion"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
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


    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 100 },
    };


    return (
        <>

            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Space Statio
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid className={classes.root} container direction="row"
                justify="space-evenly">
                <Grid item xs={2} sm={2}>
                    <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: '0%' }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        <Map />
                    </motion.div>
                </Grid>
                <Grid item xs={2} sm={2} >
                    <motion.div
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={{ opacity: 1, x: '0%' }}
                    >
                        <ListAstro mapAstro={mapAstro} />
                    </motion.div>
                </Grid>
            </Grid>

        </>
    )
}


export default SpaceStation;