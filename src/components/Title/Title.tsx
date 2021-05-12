import React, { FC } from 'react';
import styled from 'styled-components';
import { Theme } from '../../themes';

const Title: FC = ({children}) => {

    const TheTitle = styled.h1`
        font-size: 32px;
        font-weight: bold;
        color: ${Theme['light'].title};
        line-height: 30px;
        margin: 0;
    `;

    return (
        <TheTitle>
            {children}
        </TheTitle>
    )
}

export default Title;
