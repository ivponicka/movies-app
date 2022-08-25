import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from '@mui/styles';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import { color } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: "100%",
        backgroundColor: "#39445a",
        position: 'fixed',
        bottom: 0,
        zIndex: 100,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const navigate = useNavigate();

    const [value, setValue] = React.useState(0);

    useEffect(() => {
        if (value === 0) navigate('/')
        else if (value === 1 ) navigate('/movies')
        else if (value === 2 ) navigate('/series')
        else if (value === 3 ) navigate('/search')
    }, [value, navigate]);

    return (
        <Box>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    style={{ color: "#2c1313" }}
                    label="Trending"
                    icon={<WhatshotIcon />}
                />
                <BottomNavigationAction
                    style={{ color: "#2c1313" }}
                    label="Movies"
                    icon={<LocalMoviesIcon />}
                />
                <BottomNavigationAction
                    style={{ color: "#2c1313" }}
                    label="TV Series"
                    icon={<LiveTvIcon />}
                />
                <BottomNavigationAction
                    style={{ color: "#2c1313" }}
                    label="Search"
                    icon={<SearchIcon />}
                />
            </BottomNavigation>
        </Box>
    );
}
