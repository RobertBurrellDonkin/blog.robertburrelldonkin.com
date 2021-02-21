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

function AwsAccreditation() {
    return (
        <Box p={2}  bgcolor="primary.main">
            <Grid container spacing={2}>
                <CreditGrid>
                    <CreditCard
                        url='https://youracclaim.com/badges/e429e2a8-833b-4d8b-903f-8e06acb88db9'
                        name='AWS Certified Solutions Architect – Associate'
                        issued='20 February 2021'
                        expires='20 February 2024'
                    />
                </CreditGrid>
                // []()
                <CreditGrid>
                    <CreditCard
                        url='https://www.youracclaim.com/badges/31469bc7-b88c-4281-8435-fe6b256c43a8/linked_in_profile'
                        name='AWS Certified Cloud Practitioner'
                        issued='8 July 2020'
                        expires='8 July 2023'
                    />
                </CreditGrid>
            </Grid>
        </Box>
    )
}

export default AwsAccreditation