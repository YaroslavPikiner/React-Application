import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import LoginForm from './loginForm';
import RegForm from './registrationForm';
import OrderForm from './OrderForm/orderForm';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import AntForm from './AntForm/index';
import { makeStyles, Theme } from '@material-ui/core/styles';


interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}


const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const Forms: React.FC = () => {
    const [valTabs, setValTabs] = useState(3);
    const classes = useStyles();

    const handleChange = (event: any, newValue: any) => {
        setValTabs(newValue);
    };

    return (
        <>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={valTabs}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Form Log" {...a11yProps(0)} />
                        <Tab label="Form Reg" {...a11yProps(1)} />
                        <Tab label="Form Order" {...a11yProps(2)} />
                        <Tab label="Ant Form" {...a11yProps(3)} />

                    </Tabs>
                </AppBar>
                <TabPanel value={valTabs} index={0}>
                    <LoginForm />
                </TabPanel>
                <TabPanel value={valTabs} index={1}>
                    <RegForm />
                </TabPanel>
                <TabPanel value={valTabs} index={2}>
                    <OrderForm />
                </TabPanel>
                <TabPanel value={valTabs} index={3}>
                    <AntForm />
                </TabPanel>
            </div>

        </>
    )
}


export default Forms

