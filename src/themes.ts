interface ITheme {
    main: string;
    back: string;
    title: string;
    text: string;
}

interface IThemes {
    light: ITheme;
    dark: ITheme;
}

export const Theme: IThemes = {
    light: {
        main: '#a35454',
        back: '#fff',
        title: '#fff',
        text: '#333',
    },
    dark: {
        main: '#a35454',
        back: '#333',
        title: '#fff',
        text: '#fff',
    },
}