import React, { useState } from "react";
import { StoreCard } from '../../../../type';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './index.css';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { AddCardToBasket } from '../../../../redux/bookStore/bookStoreACreator';
import { IAppState } from '../../../../redux/reducers/rootReducer';

type Prop = {
    item: StoreCard
}

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        width: 600,
        height: 300// 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        height: '100 %',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
}));

const BookItem: React.FC<Prop> = ({ item }) => {
    const [open, setOpen] = useState<boolean>(false);
    const basketStore = useSelector((state: IAppState) => state.bookStoreReducer.offers)
    const dispatch = useDispatch()
    const classes = useStyles();

    let history = useHistory();
    const pushToCurrBook = (id: string | number) => {
        history.push(`/books/:${id}`);
    }

    const handleClick = (item: StoreCard) => {
        dispatch(AddCardToBasket(item))
        setOpen(true)
    }

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <>
            <Grid item xs={6} sm={6} md={6}>
                <Card className={classes.card}>
                    {item.img ? <CardMedia
                        className={classes.cardMedia}
                        image={item.img}
                        title={item.name}
                    /> : <p>Loading...</p>}
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h3" component="h4" >
                            {item.title}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" color="textSecondary">
                            {item.author}
                        </Typography>
                        <Typography>
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => pushToCurrBook(item.id)}>
                            Подробнее
                        </Button>
                        <Button size="small" color="primary" onClick={() => handleClick(item)}>
                            В корзину
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Added to backet"
                action={
                    <>
                        <Button color="secondary" size="small" onClick={handleClose}>
                            <Link to='/backet'>
                                To Backet
                            </Link>
                        </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </>
                }
            />
        </>
    );
}

export default BookItem;
