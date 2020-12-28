import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import noImage from "../assets/noImage.png";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    textBold: {
        fontWeight: 600
    },
    cardHeader: {
        overflow: "hidden",
    },
    title: {
        padding: theme.spacing(3),
        textAlign: 'center',
    },
    movieDetails: {
        flexDirection: "column"
    },
    nominateButton: {
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        maxWidth: "60%",
        marginLeft: "20%"
    },
}));

export default function MovieItem(props) {
    const classes = useStyles();
    const { handleNominate, data, isNominated, bid, apiKey } = props;
    const [expanded, setExpanded] = React.useState(false);
    const [extraData, setExtraData] = React.useState({});
    const [shadow, setShadow] = React.useState(0);

    const handleExpandClick = () => {
        if (JSON.stringify(extraData) === '{}') {
            // eslint-disable-next-line
            const searchOMDB = "https://www.omdbapi.com/?apikey=" + apiKey + "&" + "t=" + data.Title + "&" + "plot=full&";
            fetch(searchOMDB, {
                method: 'GET',
            })
                .then(response => response.json())
                .then(data => {
                    if (data.Response === "True") {
                        setExtraData(data);
                    }
                    setExpanded(!expanded);
                })
                .catch(err => {
                    console.log(err)
                });
        } else {
            setExpanded(!expanded);
        }
    };

    return (
        <Accordion onClick={handleExpandClick} style={shadow === 0 ? {} : { backgroundColor: "rgba(255, 255, 255, 0.08)" }} varient="elevation" onMouseOut={() => setShadow(0)} onMouseOver={() => setShadow(24)} elevation={shadow} id={bid} data-key={data.imdbID}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ fontSize: 40 }} />}
                aria-controls={"panel" + { bid } + "bh-content"}
                id={"panel" + { bid } + "bh-header"}
            >
                <img width="22%" height="21%" src={data.Poster === "N/A" ? noImage : data.Poster} alt="new"/>

                <Grid container alignItems="center" justify="center" spacing={0}>
                    <Grid item xs={12}>
                        <Card style={{ backgroundColor: "#303030" }}>
                            <Typography className={classes.title} variant="h5">
                                {data.Title}
                            </Typography>
                        </Card>

                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            className={classes.nominateButton}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            id={bid}
                            onClick={handleNominate}
                            disabled={isNominated}
                        >
                            Nominate
            </Button>
                    </Grid>
                </Grid>
            </AccordionSummary>

            <AccordionDetails onClick={handleExpandClick} className={classes.movieDetails}>
                <Divider />
                <Typography variant="h6" className={classes.textBold} paragraph>Released:</Typography>
                <Typography paragraph>
                    {extraData.Released}
                </Typography>
                <Typography variant="h6" className={classes.textBold} paragraph>Runtime:</Typography>
                <Typography paragraph>
                    {extraData.Runtime}
                </Typography>
                <Typography variant="h6" className={classes.textBold} paragraph>Language:</Typography>
                <Typography paragraph>
                    {extraData.Language}
                </Typography>
                <Typography variant="h6" className={classes.textBold} paragraph>Actors:</Typography>
                <Typography paragraph>
                    {extraData.Actors}
                </Typography>
                <Typography variant="h6" className={classes.textBold} paragraph>Plot:</Typography>
                <Typography paragraph>
                    {extraData.Plot}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}