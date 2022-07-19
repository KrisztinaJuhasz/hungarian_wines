export const uppercase = (str: string): string => {
    return [str[0].toUpperCase(), str.slice(1)].join('');
}

export const stringLength = (str: string): string => {
    if (str.length > 'szekszardi bikaver'.length || str.includes('-')) {
        return 'long';
    }
    return '';
}
