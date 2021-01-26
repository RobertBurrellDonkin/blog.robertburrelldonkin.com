/** @jsx jsx */
import {jsx} from "theme-ui"
import {Link} from "gatsby"
import PropTypes from "prop-types"


function Cheatsheet(props) {
    let {page, title} = props
    return (
        <Link to={'/cheatsheets/' + page}>{title} Cheat Sheet</Link>
    )
}

Cheatsheet.propTypes = {
    page: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export const KafkaCheatsheet = () => {
    return (
        <Cheatsheet page='kafka' title='Apache Kafka'/>
    )
}