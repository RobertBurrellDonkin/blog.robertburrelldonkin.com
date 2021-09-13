/** @jsx jsx */
import {jsx} from "theme-ui"
import React from "react"
import PropTypes from "prop-types"
import {ExternalLink} from "react-external-link";
import {Tooltip} from "@material-ui/core";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

function Acronym(props) {
    let {url, long, short} = props
    return(
        <React.Fragment>
            <Tooltip title={long}>
                <span>{short}</span>
            </Tooltip>
            <ExternalLink href={url}><TrendingUpIcon/></ExternalLink>
        </React.Fragment>
    )
}

Acronym.propTypes = {
    long: PropTypes.string.isRequired,
    short: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

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

export const Swagger = () => {
    return (<TechLink name='Swagger' url='https://swagger.io/'/>)
}

export const AWS = () => {
    return (
        <TechLink name='AWS!!' url='https://aws.amazon.com/'/>
    )
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

export const Kafka = () => {
    return (<a href='https://kafka.apache.org/'>Apache Kafka</a>)
}

export const KafkaStreams = () => {
    return (
        <TechLink name='Kafka Steams' url='https://kafka.apache.org/documentation/streams/'/>
    )
}

export const ksqlDB = () => {
    return (
        <TechLink name='ksqlDB' url='https://ksqldb.io/'/>
    )
}

export const KafkaConnect = () => {
    return (
        <TechLink name='Kafka Connect' url='https://kafka.apache.org/documentation/#connect'/>
    )
}

export const Confluent = () => {
    return (
        <TechLink name='Confluent' url='https://www.confluent.io/'/>
    )
}

export const LinkedIn = () => {
    return (
        <TechLink name='LinkedIn' url='https://www.linkedin.com/'/>
    )
}

export const Coursera = () => {
    return (
        <TechLink name='Coursera' url='https://www.coursera.org/'/>
    )
}

export const Udemy = () => {
    return (
        <TechLink name='Udemy' url='https://www.udemy.com/'/>
    )
}

export const Gatsby = () => {
    return (
        <TechLink name='Gatsby' url='https://www.gatsbyjs.com/'/>
    )
}

export const ReactLink = () => {
    return (
        <TechLink name='React' url='https://reactjs.org/'/>
    )
}


export const ApacheIncubator = () => {
    return (
        <TechLink name='The Apache Incubator' url='https://incubator.apache.org/'/>
    )
}


export const Google = () => {
    return (
        <TechLink name='Google' url='https://www.google.com/'/>
    )
}

export const Splunk = () => {
    return (
        <TechLink name='Splunk' url='https://www.splunk.com/'/>
    )
}

export const CCOAK = () => {
    return (
        <Acronym long='Confluent Certified Operator for Apache Kafka' short='CCOAK' url='https://www.confluent.io/certification/'/>
    )
}

export const CCDAK = () => {
    return (
        <Acronym long='Confluent Certified Developer for Apache Kafka' short='CCDAK' url='https://www.confluent.io/certification/'/>
    )
}

export const ELK = () => {
    return (
        <Acronym long='Elasticsearch, Logstash, and Kibana' short='ELK' url='https://aws.amazon.com/opensearch-service/the-elk-stack/'/>
    )
}

export const IntelliJ = () => {
    return (
        <TechLink name='IntelliJ IDEA' url='https://www.jetbrains.com/idea/'/>
    )
}

export const ProjectReactor = () => {
    return (
        <TechLink name='Project Reactor' url='https://projectreactor.io/'/>
    )
}

export const Postman = () => {
    return (
        <TechLink name='Postman' url='https://www.postman.com/'/>
    )
}

export const Android = () => {
    return (
        <TechLink name='Android' url='https://developer.android.com/'/>
    )
}

export const Gentoo = () => {
    return (
        <TechLink name='Gentoo' url='https://www.gentoo.org'/>
    )
}

export const StackOverflow = () => {
    return (
        <TechLink name='StackOverflow' url='https://stackoverflow.com/'/>
    )
}