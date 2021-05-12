import React, { FC } from 'react';
import styled from 'styled-components';
import { Theme } from '../../themes';

const Layout: FC = ({children}) => {

    const TheLayout = styled.main`
        width: 100%;
        background-color: ${Theme['light'].back};
    `;

    return (
        <TheLayout>
            {children}
        </TheLayout>
    )
}

export default Layout;
