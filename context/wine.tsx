import { createContext, Dispatch, FunctionComponent, ReactNode, SetStateAction, useState } from "react";
import Wine from "../interfaces/wine";

interface State {
    isFilterOpen: boolean;
    setFilterOpen: Dispatch<SetStateAction<boolean>>;
    selectedWine: Wine | null;
    setSelectedWine: Dispatch<SetStateAction<Wine | null>>;
}

const WineContext = createContext<Partial<State>>({});

interface Props {
    children: ReactNode | Array<ReactNode>;
}

export const WineContextProvider: FunctionComponent<Props> = ({ children }): JSX.Element => {
    const [ isFilterOpen, setFilterOpen ] = useState<boolean>(false);
    const [ selectedWine, setSelectedWine ] = useState<Wine | null>(null);

    return (
        <WineContext.Provider value={{ isFilterOpen, setFilterOpen, selectedWine, setSelectedWine }}>
            {children}
        </WineContext.Provider>
    );
}

export default WineContext;
