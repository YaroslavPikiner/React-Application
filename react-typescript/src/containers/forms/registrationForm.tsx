import React, { useState, useRef } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';



enum GenderEnum {
    female = "female",
    male = "male",
    other = "other"
}

interface IFormInput {
    firstName: string;
    lastName: string;
    dateOfBirdth: string;
    phone: number;
    addres: string;
    gender: GenderEnum;
    password: string;
    repPassword: string
}

const currencies = [
    {
        value: 'female',
        label: 'Female',
    },
    {
        value: 'male',
        label: 'Male',
    },
    {
        value: 'other',
        label: 'Other',
    },
];

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            marginBottom: theme.spacing(6),
            width: '70ch',
        },
        textFieldPass: {
            width: '34ch',
            margin: theme.spacing(1),
            marginBottom: theme.spacing(6),

        },
        appBar: {
            position: 'relative',
        },
    }),
);


const RegForm: React.FC = () => {
    const classes = useStyles();
    const [currency, setCurrency] = useState('Other');
    const { register, handleSubmit, formState: { errors }, watch } = useForm<IFormInput>();

    const password = useRef({});
    password.current = watch("password", "");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };

    const onSubmit = handleSubmit(data => alert(JSON.stringify(data)));


    return (
        <form className={classes.root} onSubmit={onSubmit}>
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Registrations
                    </Typography>
                </Toolbar>
            </AppBar>
            <TextField
                label="First Name"
                {...register("firstName", { required: true })}
                className={classes.textField}
            />
            <Typography variant="h6">
                {errors.firstName?.type === 'required' && "First name is required"}
            </Typography>

            <TextField
                label="Last Name"
                {...register("lastName", { required: true })}
                className={classes.textField}
            />
            <Typography variant="h6">
                {errors.lastName?.type === 'required' && "First name is required"}
            </Typography>


            <TextField
                className={classes.textField}
                id="standard-number"
                label="Phone"
                type="number"
                {...register("phone", { required: true })}
            />
            <Typography variant="h5">
                {errors.phone?.type === 'required' && "First name is required"}
            </Typography>

            <Grid container
                direction="row"
                justify="center"
                alignItems="center" >
                <Grid item xs={2}>
                    <TextField
                        label="Password"
                        {...register("password", {
                            required: true,
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters",
                            }
                        })}
                        className={classes.textFieldPass}
                        type='password'
                    />
                    <Typography variant="h6">
                        {errors.password && <p>{errors.password.message}</p>}
                    </Typography>

                </Grid>
                <Grid item xs={2}>
                    <TextField
                        label="Repeat Pass"
                        {...register("repPassword", {
                            validate: value =>
                                value === password.current || "The passwords do not match"
                        })}
                        className={classes.textFieldPass}
                        type="password"
                    />
                    <Typography variant="h6">
                        {errors.repPassword && <p>{errors.repPassword.message}</p>}
                    </Typography>
                </Grid>
            </Grid>
            <TextField
                select
                label="Gender"
                {...register("gender", { required: true })}
                value={currency}
                onChange={handleChange}
                className={classes.textField}
                SelectProps={{
                    native: true,
                }}
            >
                {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
                {errors.password?.type === 'required' && "First name is required"}

            </TextField>
            <Button type="submit" variant="contained" color="primary">
                Register
            </Button>
        </form>
    );
}

export default RegForm