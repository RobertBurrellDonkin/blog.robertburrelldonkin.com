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
            {props.children}
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
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/certificate/7JAFQT4CDBBZ'
                        series='Amazon Web Services'
                        title='AWS IoT: Developing and Deploying an Internet of Things'
                        issued='6th Mar 2021'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/certificate/S2Z38KVP9VP8'
                        series='Amazon Web Services'
                        title='Amazon DynamoDB: Building NoSQL Database-Driven Applications'
                        issued='1st Mar 2021'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/verify/PJDDFH59ZZMB'
                        series='Amazon Web Services'
                        title='Building Modern Python Applications on AWS'
                        issued='12th Mar 2021'
                    />
                </CreditGrid>
            </Grid>
        </Box>
    )
}



function DevOps() {
    return (
        <Box p={2}>
            <Grid container spacing={2}>
                <CreditTitle title='Cloud Engineering'/>
                <CreditGrid>
                    <CreditCard
                        url='https://www.udemy.com/certificate/UC-799216a0-748b-40a3-a817-903e0ae75d8c/'
                        series='Amazon Web Services'
                        title='AWS CloudFormation Master Class'
                        issued='3rd Mar 2021'
                    />
                </CreditGrid>
            </Grid>
        </Box>
    )
}

function Security() {
    return (
        <Box p={2}>
            <Grid container spacing={2}>
                <CreditTitle title='Cloud Security'/>
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/verify/WZUKT25NRCGM'
                        series='Amazon Web Services'
                        title='Introduction to AWS Identity and Access Management'
                        issued='18th Feb 2021'
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
                <CreditSubTitle title='AWS Fundamentals Specialization'>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/specialization/9TNT78M7DZMW'
                        series='COMPLETE'
                        title='AWS Fundamentals Specialization'
                        issued='19th Feb 2021'
                    />
                </CreditSubTitle>
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/verify/YAQNN3X4PMXK'
                        series='AWS Fundamentals Specialization'
                        title='Going Cloud-Native'
                        issued='31st Jan 2021'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/verify/BZCA9R7AGSXM'
                        series='AWS Fundamentals Specialization'
                        title='Addressing Security Risk'
                        issued='2nd Feb 2021'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/verify/HDWLSYEBCV8L'
                        series='AWS Fundamentals Specialization'
                        title='Migrating to the Cloud'
                        issued='5th Feb 2021'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.coursera.org/account/accomplishments/verify/XHYWHNCB8VW3'
                        series='AWS Fundamentals Specialization'
                        title='Building Serverless Applications'
                        issued='19th Feb 2021'
                    />
                </CreditGrid>
            </Grid>
        </Box>
    )
}

function AwsCourses() {
    return (
        <Box>
            <Security/>
            <Development/>
            <DevOps/>
            <Essentials/>
        </Box>
    )
}

export default AwsCourses