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
                        url='https://www.credly.com/badges/c8f92809-c0d1-447c-9659-8da4cbadbdb1'
                        name='AWS Certified DevOps Engineer – Professional'
                        issued='31 August 2021'
                        expires='31 August 2024'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.credly.com/badges/575d155f-010d-41dc-8e82-75b7618d6795'
                        name='AWS Certified Security – Specialty'
                        issued='11 August 2021'
                        expires='11 August 2024'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://youracclaim.com/badges/e429e2a8-833b-4d8b-903f-8e06acb88db9'
                        name='AWS Certified Solutions Architect – Associate'
                        issued='20 February 2021'
                        expires='20 February 2024'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.youracclaim.com/badges/2ea15fa0-2a1d-4f8a-9967-060780d75a14'
                        name='AWS Certified Developer – Associate'
                        issued='07 March 2021'
                        expires='07 March 2024'
                    />
                </CreditGrid>
                <CreditGrid>
                    <CreditCard
                        url='https://www.youracclaim.com/badges/727ca4b2-2315-4b7e-b9d7-071e5363c271'
                        name='AWS Certified SysOps Administrator – Associate'
                        issued='16 March 2021'
                        expires='16 March 2024'
                    />
                </CreditGrid>
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