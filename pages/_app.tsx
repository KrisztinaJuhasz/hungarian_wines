import { AppProps } from "next/app";
import { FunctionComponent } from "react";
import "../css/main.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Head from 'next/head';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }): JSX.Element => {
    return (
        <>
            <Head>
                <title>Hungarian Wines</title>
            </Head>
            <Carousel />
            <Navbar />
            <div className='container'>
                <Component { ...pageProps } />
            </div>
            <Footer />
        </>
    );
}

export default App;
