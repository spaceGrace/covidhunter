interface ITheme {
    main: string;
    back: string;
    title: string;
    text: string;
    border: string;
}

interface IThemes {
    light: ITheme;
    dark: ITheme;
}

export const Theme: IThemes = {
    light: {
        main: '#452335',
        back: '#fff',
        title: '#fff',
        text: '#333',
        border: '#e4e4e4',
    },
    dark: {
        main: '#a35454',
        back: '#333',
        title: '#fff',
        text: '#fff',
        border: '#fff',
    },
}