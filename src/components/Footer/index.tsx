import React from 'react';
import { StyledFooter } from "./index.styles";

type FooterProps = {
    name: string;
    url: string;
}

const Footer: React.FC<FooterProps> = ({name, url}) => {
    return (
        <StyledFooter>
            <a className='custom-link' href={url} target='_blank' rel='noreferrer'>by {name}</a>
        </StyledFooter>
    )
}

export default Footer;
