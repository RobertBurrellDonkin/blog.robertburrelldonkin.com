import React from "react"

import {Box, Card, CardActions, CardContent, Grid, Typography} from "@material-ui/core";
import Verify from "../verify";
import PropTypes from "prop-types";

function CreditCard(props) {
    let {url, title, series, tutors} = props
    return (
        <Card variant='outlined'>
            <CardContent>
                <Typography color='textSecondary'>
                    {series}
                </Typography>
                <Typography variant="h6">
                    {title}
                </Typography>
                <Typography color='textSecondary'>
                    By {tutors}
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
    issued: PropTypes.string.isRequired,
    tutors: PropTypes.string.isRequired
}

function CreditGrid(props) {
    let {children} = props
    return (
        <Grid item xs={6}>
            {children}
        </Grid>
    )
}

function KafkaCourses() {
    return (
        <Box>
            <Grid container spacing={2}>
                <CreditGrid>
                    <CreditCard
                        url='https://www.udemy.com/certificate/UC-d57b0ef2-5bb5-41af-98e3-94aed3c77866/'
                        series='Apache Kafka Series'
                        title='Learn Apache Kafka for Beginners'
                        tutors='Stephane Maarek'
                        issued='22nd Nov 2020'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.udemy.com/certificate/UC-96aac070-cd24-41fd-998f-097c5bafc96a/'
                        series='Apache Kafka Series'
                        title='Confluent Schema Registry & REST Proxy'
                        tutors='Stephane Maarek'
                        issued='24nd Nov 2020'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.udemy.com/certificate/UC-9340368d-869d-41e1-ae94-42720e401a7d/'
                        series='Apache Kafka Series'
                        title='Kafka Connect Hands-on'
                        tutors='Stephane Maarek'
                        issued='2nd Dec 2020'
                    /></CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.udemy.com/certificate/UC-a91c9804-8762-428b-b0d5-0d1a432ba3bf/'
                        series='Apache Kafka Series'
                        title='Kafka Cluster Setup & Administration'
                        tutors='Stephane Maarek'
                        issued='1st Dec 2020'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.udemy.com/certificate/UC-c4879d58-696e-497d-b6c8-efda6725413e/'
                        series='Apache Kafka Series'
                        title='Kafka Streams for Data Processing'
                        tutors='Stephane Maarek'
                        issued='11th Dec 2020'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.udemy.com/certificate/UC-c52ad559-d9d1-41a8-9920-fc53af6c53b5/'
                        series='Apache Kafka Series'
                        title='KSQL on ksqlDB for Stream Processing'
                        tutors='Stephane Maarek and Simon Aubury'
                        issued='22nd Dec 2020'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.udemy.com/certificate/UC-6dcda8cf-18d3-4a45-a056-16781cbabff4/'
                        series='Apache Kafka Series'
                        title='Kafka Monitoring & Operations'
                        tutors='Stephane Maarek'
                        issued='12th Jan 2021'
                    />
                </CreditGrid>
            </Grid>
        </Box>
    )
}

export default KafkaCourses