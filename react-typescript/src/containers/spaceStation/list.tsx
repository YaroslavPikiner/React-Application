import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Astro from './listItem';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
    }),
);

type Prop = {
    mapAstro: any
}

const ListAstro: React.FC<Prop> = ({ mapAstro }) => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h6" className={classes.title}>
                {`People in Space Right Now ${mapAstro.length}`}
            </Typography>
            <div className={classes.demo}>
                <List >
                    {mapAstro.map((item: any) => (
                        <Astro key={item.name} item={item} />
                    ))}
                </List>
            </div>
        </>

    )
}

export default ListAstro