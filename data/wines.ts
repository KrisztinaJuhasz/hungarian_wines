import Wine, { Color, Type } from "../interfaces/wine";

const wines: Array<Wine> = [
    {
        color: Color.red,
        type: Type.dry,
        name: "Cabernet Sauvignon",
        brand: "Koch",
        cuvee: false,
        location: "Villány",
        img: '/wines/koch_cabernet_sauvignon.png'
    },
    {
        color: Color.red,
        type: Type.dry,
        name: "Cabernet Franc",
        brand: "Koch",
        cuvee: false,
        location: "Villány",
        img: '/wines/koch_cabernet_franc.png'
    },
    {
        color: Color.white,
        type: Type.dry,
        name: "Budai Sauvignon Blanc",
        brand: "Nyakas",
        cuvee: false,
        location: "Tök",
        img: '/wines/nyakas_budai_sauvignon_blanc.png'
    },
    {
        color: Color.white,
        type: Type.dry,
        name: "Alig Várom",
        brand: "Nyakas",
        cuvee: true,
        location: "Tök",
        img: '/wines/nyakas_alig_varom.png'
    },
    {
        color: Color.white,
        type: Type.dry,
        name: "Budai Irsai Olivér",
        brand: "Nyakas",
        cuvee: false,
        location: "Tök",
        img: '/wines/nyakas_irsai_oliver.png'
    },
    {
        color: Color.red,
        type: Type.dry,
        name: "Cabernet Sauvignon-Pinot Noir",
        brand: "Koch",
        cuvee: true,
        location: "Villány",
        img: '/wines/koch_cabernet_sauvignon_pinot_noir.png'
    },
    {
        color: Color.white,
        type: Type.dry,
        name: "Egri Csillag",
        brand: "Ostoros",
        cuvee: true,
        location: "Ostoros",
        img: '/wines/ostoros_egri_csillag.png'
    },
    {
        color: Color.red,
        type: Type.dry,
        name: "Egri Bikavér",
        brand: "Ostoros",
        cuvee: true,
        location: "Ostoros",
        img: '/wines/ostoros_egri_bikaver.png'
    },
    {
        color: Color.red,
        type: Type.dry,
        name: "Szekszárdi Bikavér",
        brand: "Bodri",
        cuvee: true,
        location: "Szekszárd",
        img: '/wines/bodri_szekszardi_bikaver.png'
    },
    {
        color: Color.rose,
        type: Type.dry,
        name: "Kakas",
        brand: "Vylyan",
        cuvee: true,
        location: "Villány",
        img: '/wines/vylyan_kakas.png'
    },
    {
        color: Color.white,
        type: Type.dry,
        name: "Chardonnay",
        brand: "Koch",
        cuvee: false,
        location: "Villány",
        img: '/wines/koch_chardonnay.png'
    },
    {
        color: Color.rose,
        type: Type.dry,
        name: "Egri Merlot-Pinot Noir",
        brand: "Ostoros",
        cuvee: true,
        location: "Ostoros",
        img: '/wines/ostoros_egri_merlot_pinot_noir.png'
    },
    {
        color: Color.white,
        type: Type.dry,
        name: "Flört",
        brand: "Takler",
        cuvee: true,
        location: "Szekszárd",
        img: '/wines/takler_flort.png'
    },
    {
        color: Color.white,
        type: Type.dry,
        name: "Irsai Olivér",
        brand: "Koch",
        cuvee: false,
        location: "Villány",
        img: '/wines/koch_irsai _oliver.png'
    }
]

export default wines;
