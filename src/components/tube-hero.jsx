import React from "react"
import PropTypes from "prop-types"
import YouTube from 'react-youtube';
import {Box} from "@material-ui/core";


function TubeHero(props) {
    let {id} = props
    return (
        <Box p={2} alignItems='center'>
            <YouTube videoId={id}/>
        </Box>

    )
}

TubeHero.propTypes = {
    id: PropTypes.string.isRequired
}

export default TubeHero