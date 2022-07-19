import { FunctionComponent } from "react";
import Image from "next/image";

const Index: FunctionComponent<void> = (): JSX.Element => {
    return (
        <div className='container home'>
            <div className='row'>
                <article>
                    <h1>Hungarian wines</h1>
                    <p>Unlike beer, wine has been essential all throughout Hungary's history. It was a key export and a vital sustenance available to rich and poor alike. Today, still, Hungary is a major wine producer globally with a total of 22 wine regions and 63,000 hectares of planted vines. Most of the country's vineyards are considered to be cool-climate and occupy the northeastern segment of Europe's wine-growing region. The most famous wines come from Tokaj, home to the world's oldest classified wine region.</p>
                </article>
                <Image src='/photo1.png' alt='Grape field.' width={706} height={470} />
            </div>
            <div className='row'>
                <Image src='/photo2.png' alt='Red grapes.' width={438} height={347} />
                <article>
                    <h1>Grape varieties</h1>
                    <p>Historically, Hungary has been a white-wine country as meaningful amounts of red wines only appeared in the 17th century with the kadarka grape. Many of Hungary's native grapes vanished in the 19th century when foreign varieties proved to be better and less vulnerable to diseases (furmint and hárslevelű are notable exceptions). Today, two-thirds of Hungary's wines are white by volume, but whites and reds are about equally represented within the premium segment.</p>
                </article>
            </div>
            <div className='row winelist'>
                <div>
                    <h3>Four major white grapes</h3>
                    <ul>
                        <li>Furmint</li>
                        <li>Hárslevelű</li>
                        <li>Olaszrizling</li>
                        <li>Juhfark</li>
                    </ul>
                </div>
                <div>
                    <h3>Three major red grapes</h3>
                    <ul>
                        <li>Kékfrankos</li>
                        <li>Kadarka</li>
                        <li>Bikavér</li>
                    </ul>
                </div>
                <div>
                    <h3>Tokaj's sweet wines</h3>
                    <ul>
                        <li>Szamorodni</li>
                        <li>Aszú</li>
                        <li>Esszencia</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <Image src='/photo3.png' alt='Fröccs' width={575} height={431} />
                <article>
                    <h1>Fröccs culture</h1>
                    <p>The old tradition of mixing wine and water has disappeared in most parts of the world, but not so in Hungary, where fröccs is the name of the local water-and-wine combo. A fröccs consists of a fresh rosé or white wine and sparkling water; traditionally, people have used a siphon dispenser to add the carbonated water and hence the drink's name ("fröccsen" means to "splash" in Hungarian). Thanks to its hydrating effect, fröccs is a popular summer drink, consumed at homes, cafés, and bars.</p>
                </article>
            </div>
        </div>
    );
}

export default Index;
