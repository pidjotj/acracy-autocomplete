import React from 'react'
import { StyledHeader } from "./index.styles";

type HeaderProps = {
    title: string,
    url: string
}

const Header: React.FC<HeaderProps> = ({title, url}) => {
    return (
        <StyledHeader>
            <a className='custom-link'  href={url} target='_blank' rel='noreferrer'>
            <span className="title-gradient">{title}</span>
            </a>
        </StyledHeader>
    )
}

export default Header;
