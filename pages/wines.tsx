import { FunctionComponent } from "react";
import wines from '../data/wines';
import Wine from "../interfaces/wine";
import WineCard from "../components/WineCard";
import Filter from "../components/Filter";
import { WineContextProvider } from "../context/wine";
import WineModal from "../components/WineModal";

const Wines: FunctionComponent<void> = (): JSX.Element => {
    return (
        <WineContextProvider>
            <div className='wines-container'>
                <WineModal />
                <Filter />
                <div className='wine-cards'>
                    {wines.map((wine: Wine, index: number) => (
                        <WineCard wine={wine} key={index} />
                    ))}
                </div>
            </div>
        </WineContextProvider>
    );
}

export default Wines;
