import React from "react"

import {Box, Button, Card, CardActions, CardContent, Grid, Typography} from "@material-ui/core";

function CreditCard() {
    return (
        <Card variant='outlined'>
            <CardContent>
                <Typography>
                    Series
                </Typography>
                <Typography>
                    Name
                </Typography>
                <Typography>
                    Tutors
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    )
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
            <p>Kafka Accreditation</p>
            <Grid container spacing={2}>
                <CreditGrid>
                    <CreditCard/>
                </CreditGrid>
                <CreditGrid>
                    <CreditCard/>
                </CreditGrid>
                <Grid item xs={6}>
                    <p>One</p>
                    <CreditCard/>
                </Grid>
                <Grid item xs={6}>
                    <p>Two</p>
                    <CreditCard/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default KafkaCourses