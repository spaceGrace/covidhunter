import React, { FC } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import { Preloader } from '../';

const List = ({items = []}) => {
    const TheList = styled.ul`
        color: #333;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    `;

    return (
        <TheList>
            {items.length ? (
                    items.map((item) => {
                        //@ts-ignore
                        return <ListItem item={item} />
                    })
            ) : <Preloader />}
        </TheList>
    )
}

export default List;
