/** @jsx jsx */
import {jsx} from "theme-ui"
import PropTypes from 'prop-types';

const UniLink = (props) => {
    return(<a href={props.url}>{props.children ? props.children : props.name}</a>)
}

UniLink.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export const Warwick = (props) => {
    return(
        <UniLink url='https://warwick.ac.uk/' name='University of Warwick'>{props.children}</UniLink>
    )
}


export const Manchester = (props) => {
    return(
        <UniLink url='https://www.manchester.ac.uk/' name='University of Manchester'>{props.children}</UniLink>
    )
}

export const Maths = (props) => {
    return(
        <UniLink url='https://warwick.ac.uk/fac/sci/maths/' name='Maths Institute'>{props.children}</UniLink>
    )
}

export const PlateGlassUni = (props) => {
    return(
        <UniLink url='https://en.wikipedia.org/wiki/Plate_glass_university' name='plate glass'>{props.children}</UniLink>
    )
}


export const RussellGroup = (props) => {
    return(
        <UniLink url='https://russellgroup.ac.uk/' name='Russell Group'>{props.children}</UniLink>
    )
}
