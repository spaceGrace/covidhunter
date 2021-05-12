interface IRegion {
    cities: any[];
    iso: string;
    lat: string;
    long: string;
    name: string;
    province: string;
}

export interface IListItem {
    active: number;
    active_diff: number;
    confirmed: number;
    confirmed_diff: number;
    date: string;
    deaths: number;
    deaths_diff: number;
    fatality_rate: number;
    last_update: string;
    recovered: number;
    recovered_diff: number;
    region: IRegion;
}