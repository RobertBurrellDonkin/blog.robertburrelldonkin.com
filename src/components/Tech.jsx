/** @jsx jsx */
import {jsx} from "theme-ui"
import PropTypes from "prop-types"
import {ExternalLink} from "react-external-link";

function TechLink(props) {
    let {url, name} = props
    return(
        <ExternalLink href={url}>{name}</ExternalLink>
    )
}

TechLink.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export const AmazonCorretto = () => {
    return (<a href='https://aws.amazon.com/corretto/'>Amazon Corretto</a>)
}

export const Oracle = () => {
    return (<a href='https://www.oracle.com/index.html'>Oracle</a>)
}

export const Amazon = () => {
    return (<a href='https://www.aboutamazon.com/'>Amazon</a>)
}

export const Microsoft = () => {
    return (<a href='https://www.microsoft.com'>Microsoft</a>)
}

export const VB = () => {
    return (<a href='https://medium.com/young-coder/the-rise-and-fall-of-visual-basic-f422252349a6'>VB</a>)
}

export const VisualStudio = () => {
    return (<a href='https://code.visualstudio.com/'>Visual Studio Code</a>)
}

export const Java = () => {
    return (<a href='https://www.java.com'>VB</a>)
}

export const OpenSource = () => {
    return (<a href='https://opensource.org/'>open source</a>)
}

export const KSQL = () => {
    return (<a href='https://www.confluent.io/product/ksql/'>KSQL</a>)
}

export const KafkaStreams = () => {
    return (<a href='https://kafka.apache.org/documentation/streams/'>Kafka Streams</a>)
}

export const Kafka = () => {
    return (<a href='https://kafka.apache.org/'>Apache Kafka</a>)
}

export const Confluent = () => {
    return (
        <TechLink name='Confluent' url='https://www.confluent.io/'/>
    )
}