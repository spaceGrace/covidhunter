import React, { FC } from 'react';
import styled from 'styled-components';
import { Theme } from '../../themes';

const Header: FC = ({children}) => {
    const TheHeader = styled.header`
        background-color: ${Theme['light'].main};
        display: flex;
        justify-content: center;
    `;

    return (
        <TheHeader>
            {children}
        </TheHeader>
    )
}

export default Header;
