import { FunctionComponent, useContext } from 'react';
import WineContext from '../context/wine';
import { uppercase } from '../utils/stringFormat';

const WineModal: FunctionComponent<{}> = (): JSX.Element => {
    const { selectedWine, setSelectedWine } = useContext(WineContext);

    if (selectedWine) {
        return (
            <>
                <div className='overlay'></div>
                <div className={'wine-modal open'}>
                    <main>
                        <h1>{selectedWine.name}</h1>
                        <p>{selectedWine.brand}</p>
                        <p>{uppercase(selectedWine.type)} {selectedWine.color} {selectedWine.cuvee ? 'cuvee' : 'wine'} from {selectedWine.location}</p>
                        <div className='justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit massa sit velit fusce magna convallis curabitur quis. Ipsum massa egestas vel sit. Feugiat vitae elit porta augue vel. Turpis viverra dolor aliquet imperdiet dolor, lobortis. In platea ipsum non ut vitae magna aenean.
                            Quisque sit mi massa et dui adipiscing auctor ac vestibulum. Venenatis et imperdiet lacinia fames. Pellentesque vulputate odio id eget arcu, neque id fusce. Ut mauris congue massa pellentesque a. Ultrices rhoncus, cursus tempor pulvinar interdum. Cursus at arcu et morbi hendrerit cursus nullam massa mattis.
                            Nisi a, tristique eget non. Pretium etiam eu nisl orci vehicula id auctor. Mauris morbi nulla ullamcorper fermentum rhoncus neque. Tristique dignissim at viverra id vitae mollis magna. Condimentum tortor tempor iaculis facilisis in.
                        </div>
                    </main>
                    <img src={selectedWine.img} alt={selectedWine.name} />
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 20.2929C-0.097631 20.6834 -0.0976311 21.3166 0.292893 21.7071C0.683417 22.0976 1.31658 22.0976 1.70711 21.7071L0.292893 20.2929ZM21.7071 1.70711C22.0976 1.31659 22.0976 0.683422 21.7071 0.292898C21.3166 -0.0976264 20.6834 -0.0976265 20.2929 0.292898L21.7071 1.70711ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.097631 0.292893 0.292893C-0.0976311 0.683418 -0.097631 1.31658 0.292893 1.70711L1.70711 0.292893ZM20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L20.2929 21.7071ZM1.70711 21.7071L21.7071 1.70711L20.2929 0.292898L0.292893 20.2929L1.70711 21.7071ZM0.292893 1.70711L20.2929 21.7071L21.7071 20.2929L1.70711 0.292893L0.292893 1.70711Z" fill="#6C6C6C"/>
                    </svg>
                </div>
            </>
        );
    } else {
        return (
            <div className='wine-modal'>Select a wine to see additional information about it.</div>
        );
    }
}

export default WineModal;
