import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MovieItem from './Components/movieItem'
import NominationItem from './Components/nominationItem'
import { addNominationLocally, RemoveNominationLocally, getNominationsLocally } from './util';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from "@material-ui/core/InputAdornment";


const useStyles = makeStyles((theme) => ({
    nominations: {
        width: '100%',
    },
    searchList: {
        width: '100%',
    },
    background: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: "-20",
    },
    textBar: {
        width: "100%",
        padding: theme.spacing(0.5),
    },
    title: {
        padding: theme.spacing(1),
        textAlign: 'center',
        fontWeight: 600,
        width: "100%"
    },
    listContainer: {
        paddingTop: theme.spacing(3),
    },
    text: {
        padding: theme.spacing(1),
    }
}));

export default function App() {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = React.useState("");
    const [apiKey, setApiKey] = React.useState("");
    const [nominationsElements, setNominationsElements] = React.useState([]);
    const [searchListElements, setSearchListElements] = React.useState([]);
    const [nominationsComplete, setNominationsComplete] = React.useState(false);
    const [searchTermDisplay, setSearchTermDisplay] = React.useState("");

    React.useEffect(() => {
        const nominations = getNominationsLocally();
        if (nominations) {
            setNominationsElements(nominations);
        }
    }, []);

    const handleNominate = (event, data) => {
        event.stopPropagation();
        let itemIndex = event.target.id;
        if (!event.target.id) {
            itemIndex = event.target.parentNode.id;
        }
        const newNominations = nominationsElements.concat([searchListElements[itemIndex]]);
        setNominationsElements(newNominations);

        addNominationLocally(searchListElements[itemIndex]);

        if (newNominations.length >= 5) {
            setNominationsComplete(true);
        }
    }

    const handleRemoveNominate = (event) => {
        event.stopPropagation();
        let itemIndex = event.target.id;
        if (!event.target.id) {
            itemIndex = event.target.parentNode.id;
        }
        const newNominations = nominationsElements.slice();
        newNominations.splice(itemIndex, 1);
        setNominationsElements(newNominations);

        RemoveNominationLocally(itemIndex);

        if (newNominations.length < 5) {
            setNominationsComplete(false);
        }
    }

    const handleSearchTermChange = (event) => {
        event.preventDefault();
        // eslint-disable-next-line
        const searchOMDB = "https://www.omdbapi.com/?apikey=" + apiKey + "&" + "s=" + searchTerm + "&";
        fetch(searchOMDB, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    setSearchListElements(data.Search);
                    setSearchTermDisplay(searchTerm);
                } else {
                    setSearchListElements([]);
                }
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <div>
            <Card>
                <Typography className={classes.title} variant="h3" component="h1" gutterBottom>
                    The Shoppies
            </Typography>
            </Card>
            <Container>
                <Box my={6}>
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <TextField
                                className={classes.textBar}
                                name="OMDB API key"
                                variant="filled"
                                label="API KEY"
                                size="small"
                                autoFocus
                                onInput={e => setApiKey(e.target.value.trim())}
                            />
                            <form onSubmit={handleSearchTermChange}>
                                <TextField
                                    className={classes.textBar}
                                    name="searchBar"
                                    variant="filled"
                                    label="Search Movies"
                                    size="small"
                                    autoFocus
                                    onInput={e => setSearchTerm(e.target.value.trim())}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment>
                                                <IconButton type="Submit" disableFocusRipple={true} disableRipple={true}>
                                                    <SearchIcon />
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </form>
                        </Grid>
                        <Grid item xs>
                            {nominationsElements.length < 5 ? (
                                <Typography className={classes.title} variant="h4" component="h1" gutterBottom>
                                    Please Select {5 - nominationsElements.length} Nominations!
                                </Typography>)
                                : (
                                    <Card variant="outlined">
                                        <Typography className={classes.title} variant="h3" component="h1" gutterBottom>
                                            Thank You For Nominating!
                                    </Typography>
                                    </Card>)}
                            <Typography className={classes.title} variant="h6" component="h1" gutterBottom>
                                Nominations Are Saved! Feel Free To Come Back Anytime!
                        </Typography>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.listContainer} spacing={3}>
                        <Grid item xs={8}>
                            <Card>
                                {searchTermDisplay ? <Typography className={classes.title} variant="h4" component="h1" gutterBottom>
                                    Results for "{searchTermDisplay}"
                                </Typography> : <Typography className={classes.title} variant="h4" component="h1" gutterBottom>
                                        Search Results
                                </Typography>}
                                <div className={classes.searchList}>

                                    {searchListElements.map((omdbData, i) => {
                                        let isNominated = false;
                                        if (!nominationsComplete) {
                                            for (let i = 0; i < nominationsElements.length; i++) {
                                                if (nominationsElements[i].imdbID === omdbData.imdbID) {
                                                    isNominated = true;
                                                    break;
                                                }
                                            }
                                        } else {
                                            isNominated = true;
                                        }
                                        return (
                                            <MovieItem apiKey={apiKey} bid={i} handleNominate={(event) => handleNominate(event)} data={omdbData} isNominated={isNominated} />
                                        )
                                    }
                                    )}
                                </div>
                            </Card>
                        </Grid>
                        <Grid item xs>
                            <Card>
                                <Typography className={classes.title} variant="h4" component="h1" gutterBottom>
                                    Nominations
                                </Typography>
                                <div className={classes.nominations}>
                                    {nominationsElements.map((omdbData, i) =>
                                        <NominationItem bid={i} handleRemoveNominate={(event) => handleRemoveNominate(event)} data={omdbData} />
                                    )}
                                </div>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>

    );
}
