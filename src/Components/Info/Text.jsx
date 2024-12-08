import { Container } from '../helpers/Container';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Kompozicia from './Kompozicia';
import Harakter from './Harakter';
import { keyframes } from '@emotion/react';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className='flex  justify-center bg-white border rounded-lg shadow-[0_10px_52px_-8px_rgba(0,0,0,0.27)]'
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 2 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const slideRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

    const slideLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Box sx={{}}>
                    <Tabs
                        className='ml-[20px]'
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab
                            sx={{
                                backgroundColor: value === 0 ? "rgb(0, 69, 131)" : "white",
                                color: value === 0 ? "white" : "gray",
                                transition: "background-color 0.3s ease, color 0.3s ease",
                                animation: value === 0 ? `${slideLeft} 0.3s ease-out` : 'none',
                                '&.Mui-selected': {
                                    color: "white !important",
                                },
                            }}
                            label="Технические характеристики"
                            {...a11yProps(0)}
                        />
                        <Tab
                            sx={{
                                backgroundColor: value === 1 ? "rgb(0, 69, 131)" : "white",
                                color: value === 1 ? "white" : "gray",
                                transition: "background-color 0.3s ease, color 0.3s ease",
                                animation: value === 1 ? `${slideRight} 0.3s ease-out` : 'none',
                                '&.Mui-selected': {
                                    color: "white !important",
                                },
                            }}
                            label="Состав композиции"
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Harakter />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Kompozicia />
                </CustomTabPanel>
            </Box>
        </Container>
    );
}