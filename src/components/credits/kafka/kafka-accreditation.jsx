import React from "react"
import {Box, Card, CardActions, CardContent, Grid, Typography} from "@material-ui/core";
import Verify from "../verify"
import PropTypes from "prop-types"

function CreditCard(props) {
    let {url, name, issued, expires} = props
    return (
        <Card variant='outlined'>
            <CardContent>
                <Typography color='textSecondary'>
                    Issued: {issued}
                </Typography>
                <Typography variant="h6">
                    {name}
                </Typography>
                <Typography color='textSecondary'>
                    Expires: {expires}
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
    name: PropTypes.string.isRequired,
    issued: PropTypes.string.isRequired,
    expires: PropTypes.string.isRequired
}

function CreditGrid(props) {
    let {children} = props
    return (
        <Grid item xs={6}>
            {children}
        </Grid>
    )
}

function KafkaAccreditation() {
    return (
        <Box p={2}>
            <Grid container spacing={2} >
                <CreditGrid>
                    <CreditCard
                        url='https://www.credential.net/f2ccede0-98d4-49ac-aac7-24fc5dc2a38f#gs.rbx7qy'
                        name='Confluent Certified Developer for Apache Kafka'
                        issued='January 25, 2021'
                        expires='January 25, 2023'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.credential.net/07d2ce07-cda7-4349-8f3d-d6fee53ee6ba#gs.rc0qzi'
                        name='Accredited - Confluent Fundamentals for Apache Kafka'
                        issued='November 23, 2020'
                        expires='Never'
                    />

                </CreditGrid>
            </Grid>
        </Box>
    )
}

export default KafkaAccreditation