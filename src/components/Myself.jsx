/** @jsx jsx */
import {jsx} from "theme-ui"
import PropTypes from "prop-types"
import {ExternalLink} from "react-external-link";

function Link(props) {
    let {url, name} = props
    return(
        <ExternalLink href={url}>{name}</ExternalLink>
    )
}

Link.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export const LinkedInProfile = () => {
    return (
        <Link name='profile' url='https://linkedin.com/in/robertburrelldonkin'/>
    )
}