/** @jsx jsx */
import {jsx} from "theme-ui"
import {Link as GatsbyLink} from "gatsby";
import PropTypes from 'prop-types';

const LifelongLink = (props) => {
    return (<GatsbyLink
        to={'/lifelong-learning/' + props.topic}>{props.children ? props.children : props.moniker}</GatsbyLink>)
}

LifelongLink.propTypes = {
    topic: PropTypes.string.isRequired,
    moniker: PropTypes.string.isRequired
}

export const AWS = (props) => {
    return (<LifelongLink moniker='AWS' topic='aws'>{props.children}</LifelongLink>)
}

export const GCP = (props) => {
    return (<LifelongLink moniker='GCP' topic='gcp'>{props.children}</LifelongLink>)
}

export const Scala = (props) => {
    return (<LifelongLink moniker='Scala' topic='scala'>{props.children}</LifelongLink>)
}

export const Kafka = (props) => {
    return (<GatsbyLink to='/lifelong-learning/kafka'>{props.children ? props.children : "Kafka"}</GatsbyLink>)
}

export const CPD = () => {
    return (<span>Continuing Professional Development</span>)
}

export const KSQL = () => {
    return (
        <a href='https://www.udemy.com/certificate/UC-c52ad559-d9d1-41a8-9920-fc53af6c53b5/'>Apache Kafka Series - KSQL
            on ksqlDB for Stream Processing</a>)
}