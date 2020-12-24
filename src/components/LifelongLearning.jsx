/** @jsx jsx */
import {jsx} from "theme-ui"
import {Link as GatsbyLink} from "gatsby";

export const AWS = (props) => {
    return (<GatsbyLink to='/lifelong-learning/aws'>{props.children}</GatsbyLink>)
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