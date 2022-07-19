export enum Color {
    red = 'red',
    white = 'white',
    rose = 'rose'
}

export enum Type {
    dry = 'dry',
    sweet = 'sweet',
    semisweet = 'semi-sweet'
}

interface Wine {
    color: Color;
    type: Type;
    name: string;
    brand: string;
    cuvee: boolean;
    location: string;
    img: string;
}

export default Wine;
