import React, { FC } from 'react';
import styled from 'styled-components';
import { Theme } from '../../themes';
import { IListItem } from '../../types';

interface IListItemProps {
    item: IListItem;
}

const TheListItem = styled.li`
    width: 23%;
    position: relative;
    padding: 10px;
    margin: 5px;
    background-color: ${Theme.light.back};
    border: 1px solid ${Theme.light.border};
    border-radius: 4px;
    display: block;
`;

const ItemTitle = styled.h2`
    color: ${Theme.light.main};
    margin: 0;
`;

const ProvinceTitle = styled.h4`
    color: ${Theme.light.text};
    margin: 0;
`;

const Date = styled.div`
    color: ${Theme.light.title};
    background-color: ${Theme.light.main};
    font-size: 12px;
    padding: 2px;
    font-weight: bold;
    border-radius: 4px;
    position: absolute;
    top: 5px;
    right: 5px;
`;

const ListItem = (props: IListItemProps) => {
    const { item } = props;

    const region = item.region;

    return (
        <TheListItem key={region.name + region.province}>
            <ItemTitle>{region ? region.name : '...'}</ItemTitle>
            <Date>{item.date}</Date>
            <ProvinceTitle>{region && region.province}</ProvinceTitle>
            <p>Confirmed: <span>{item.confirmed}</span></p>
            <p>Deaths: <span>{item.deaths}</span></p>
            <p>Recovered: <span>{item.recovered}</span></p>
        </TheListItem>
    )
}

export default ListItem;
