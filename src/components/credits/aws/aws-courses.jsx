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
        <Grid item xs={6}>
            {children}
        </Grid>
    )
}

function CreditTitle(props) {
    let {title} = props
    return (
        <Grid item xs={12}>
            <Typography variant='h4' color='textSecondary'>
                {title.toUpperCase()}
            </Typography>
        </Grid>
    )
}

function CreditSubTitle(props) {
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

function Development() {
    return (
        <Box p={2}>
            <Grid container spacing={2}>
                <CreditTitle title='Cloud Development'/>
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/verify/HN7NC326SDYN'
                        series='Amazon Web Services'
                        title='Building Containerized Applications on AWS'
                        issued='16th Nov 2020'
                    />
                </CreditGrid>
            </Grid>
        </Box>
    )
}

function Essentials() {
    return (
        <Box p={2}>
            <Grid container spacing={2}>
                <CreditTitle title='Essentials'/>
                <CreditSubTitle title='AWS Fundamentals Specialization'/>
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/verify/YAQNN3X4PMXK'
                        series='AWS Fundamentals Specialization'
                        title='AWS Fundamentals: Going Cloud-Native'
                        issued='31st Jan 2020'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/verify/BZCA9R7AGSXM'
                        series='AWS Fundamentals Specialization'
                        title='AWS Fundamentals: Addressing Security Risk'
                        issued='2nd Feb 2021'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/verify/HDWLSYEBCV8L'
                        series='AWS Fundamentals Specialization'
                        title='AWS Fundamentals: Migrating to the Cloud'
                        issued='5th Feb 2021'
                    />
                </CreditGrid>
            </Grid>
        </Box>
    )
}

function AwsCourses() {
    return (
        <Box>
            <Development/>
            <Essentials/>
        </Box>
    )
}

export default AwsCourses