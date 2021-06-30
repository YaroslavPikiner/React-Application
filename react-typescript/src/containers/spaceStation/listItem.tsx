import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';


type Prop = {
    item: {
        name: string,
        iss: string
    }
}

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
        avatar: {
            marginRight: 20
        }
    }),
);

const Astro: React.FC<Prop> = ({ item }) => {
    const classes = useStyles()
    return (
        <>
            <ListItem key={`item-${item.name}`} className={classes.root}>
                <Avatar className={classes.avatar} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <ListItemText primary={item.name} />
            </ListItem>
        </>
    )
}

export default Astro