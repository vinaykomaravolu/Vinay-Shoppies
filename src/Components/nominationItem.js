import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    image: {
        display: "flex",
        height: "70%",
        width: "100%"
    },

}));

export default function NominationItem(props) {
    const classes = useStyles();
    const { handleRemoveNominate, data, bid, } = props;
    const [shadow, setShadow] = React.useState(0);

    return (
        <Accordion style={shadow === 0 ? {} : { backgroundColor: "rgba(255, 255, 255, 0.08)" }} varient="elevation" onMouseOut={() => setShadow(0)} onMouseOver={() => setShadow(24)} elevation={shadow} id={bid} data-key={data.imdbID}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={"panel" + { bid } + "bh-content"}
                id={"panel" + { bid } + "bh-header"}
            >
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Button
                            startIcon={<DeleteIcon />}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            id={bid}
                            onClick={handleRemoveNominate}
                        >
                            Remove
                        </Button>
                    </Grid>
                    <Grid item xs={12}>

                        <Typography variant="h6">
                            {data.Title}
                        </Typography>
                    </Grid>

                </Grid>
            </AccordionSummary>
            <AccordionDetails>
                <img className={classes.image} src={data.Poster} alt="new" />
            </AccordionDetails>
        </Accordion>
    );
}
