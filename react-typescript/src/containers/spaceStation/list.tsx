import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
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
        ul: {
            backgroundColor: 'inherit',
            padding: 0,
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
            <List className={classes.root}>
                <ListSubheader>{`People in Space Right Now ${mapAstro.length}`}</ListSubheader>
                {mapAstro.map((item: any) => (
                    <ul className={classes.ul}>
                        <ListItem key={`item-${item.name}`}>
                            <ListItemText primary={`Item ${item.name}`} />
                        </ListItem>
                    </ul>
                ))
                }
            </List >
        </>

    )
}

export default ListAstro