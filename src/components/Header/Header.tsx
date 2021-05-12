import React, { FC } from 'react';
import styled from 'styled-components';
import { Theme } from '../../themes';

const Header: FC = ({children}) => {
    const TheHeader = styled.header`
        width: 100%;
        background-color: ${Theme['light'].main};
        padding: 20px;
    `;

    return (
        <TheHeader>
            {children}
        </TheHeader>
    )
}

export default Header;
