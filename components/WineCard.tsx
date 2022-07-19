import { FunctionComponent, useContext } from "react";
import Wine from "../interfaces/wine";
import { uppercase, stringLength } from "../utils/stringFormat";
import WineContext from "../context/wine";

interface Props {
    wine: Wine;
}

const WineCard: FunctionComponent<Props> = ({ wine }): JSX.Element => {
    const { setSelectedWine } = useContext(WineContext);

    const selectWine = (wine: Wine): void => {
        setSelectedWine(wine);
    }

    return (
        <div className='wine-card'>
            <section>
                <h3 className={stringLength(wine.name)}>{wine.name}</h3>
                <main>
                    <p>{wine.brand}</p>
                    <p>{uppercase(wine.type)} {wine.color} {wine.cuvee ? 'cuvee' : 'wine'} from {wine.location}</p>
                </main>
                <button onClick={() => selectWine(wine)}>More</button>
            </section>
            <img src={wine.img} alt={wine.name} />
        </div>
    );
}

export default WineCard;
