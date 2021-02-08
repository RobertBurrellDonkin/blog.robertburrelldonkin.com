import React from "react"

import {Box, Card, CardActions, CardContent, Grid, Typography} from "@material-ui/core";
import Verify from "../verify";
import PropTypes from "prop-types";

function CreditCard(props) {
    let {url, title, series} = props
    return (
        <Card variant='outlined'>
            <CardContent>
                <Typography color='textSecondary'>
                    {series.toUpperCase()}
                </Typography>
                <Typography variant="h6">
                    {title}
                </Typography>
            </CardContent>
            <CardActions>
                <Verify url={url}/>
            </CardActions>
        </Card>
    )
}

CreditCard.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    series: PropTypes.string.isRequired,
    issued: PropTypes.string.isRequired
}

function CreditGrid(props) {
    let {children} = props
    return (
        <Grid item xs={12}>
            {children}
        </Grid>
    )
}

function CreditTitle(props) {
    let {title} = props
    return (
        <Grid item xs={12}>
            <Typography variant='h5' color='textSecondary'>
                {title.toUpperCase()}
            </Typography>
        </Grid>
    )
}

CreditTitle.propTypes = {
    title: PropTypes.string.isRequired
}

function Scala() {
    return (
        <Box p={2}>
            <Grid container spacing={2}>
                <CreditTitle title='Functional Programming in Scala Specialization'/>
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/verify/MMSCPD25E488'
                        series='Functional Programming in Scala Specialization'
                        title='Functional Programming Principles in Scala'
                        issued='7th Feb 2020'
                    />
                </CreditGrid>

            </Grid>
        </Box>
    )
}

function ScalaCourses() {
    return (
        <Box>
            <Scala/>
        </Box>
    )
}

export default ScalaCourses