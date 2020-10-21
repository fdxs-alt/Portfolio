import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import styled from 'styled-components'

export const Navbar = styled(motion.nav)`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
`

export const NavbarList = styled.ul`
    display: flex;
    list-style: none;
`
export const NavLi = styled.li`
    margin-right: 1.3rem;
    padding: 0.3rem;

    &:last-child {
        border: 2px solid black;
        border-radius: 0.4rem;

        &:hover {
            border: 2px solid ${props => props.theme.colors.seconary};
        }
    }
`
export const NavLink = styled(Link)`
    padding: 1rem;
    font-weight: 700;
    text-decoration: none;
    color: black;
    font-size: 1.1rem;

    &:hover {
        color: ${props => props.theme.colors.seconary};
    }
`
export const MyName = styled.h1`
    font-size: 1.8rem;
`
export const Wrapper = styled.footer`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: center;
    padding: 1rem;
    color: ${props => props.theme.colors.seconary};
    border-top: 2px solid ${props => props.theme.colors.fontColor};
    margin-top: 1rem;
`
export const ImageTag = styled.img`
    max-width: 60px;
`
