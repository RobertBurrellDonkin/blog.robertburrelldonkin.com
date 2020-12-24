/** @jsx jsx */
import {jsx} from "theme-ui"
import { Link as GatsbyLink } from "gatsby";

export const AWS = (props) => {
    return (<GatsbyLink to='/lifelong-learning/aws'>{props.children}</GatsbyLink>)
}
