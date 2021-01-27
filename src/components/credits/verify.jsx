import React from "react";
import PropTypes from "prop-types";
import {Button} from "@material-ui/core";

function Verify(props) {
    let {url} = props
    return (
        <Button
            size='small'
            href={url}
        >Verify</Button>
    )
}

Verify.propTypes = {
    url: PropTypes.string.isRequired
}

export default Verify
