import { FunctionComponent, MutableRefObject, useEffect, useRef } from "react";
import Link from 'next/link';
import { NextRouter, useRouter } from "next/router";

const Navbar: FunctionComponent<{}> = (): JSX.Element => {
    const router: NextRouter = useRouter();

    const homeRef: MutableRefObject<HTMLButtonElement> = useRef<HTMLButtonElement | null>(null);
    const winesRef: MutableRefObject<HTMLButtonElement> = useRef<HTMLButtonElement | null>(null);
    const regionsRef: MutableRefObject<HTMLButtonElement> = useRef<HTMLButtonElement | null>(null);

    const activeMenu = (): void => {
        switch(router.pathname) {
            default:
                homeRef.current.classList.add('active');
                winesRef.current.classList.remove('active');
                regionsRef.current.classList.remove('active');
                break;
            case '/wines':
                homeRef.current.classList.remove('active');
                winesRef.current.classList.add('active');
                regionsRef.current.classList.remove('active');
                break;
            case '/regions':
                homeRef.current.classList.remove('active');
                winesRef.current.classList.remove('active');
                regionsRef.current.classList.add('active');
                break;
        }
    }

    useEffect(() => {
        activeMenu();
    }, [router.pathname]);

    return (
        <nav>
            <Link href='/'><button ref={homeRef}>Home</button></Link>
            <Link href='/wines'><button ref={winesRef}>Wines</button></Link>
            <Link href='/regions'><button ref={regionsRef}>Regions</button></Link>
        </nav>
    );
}

export default Navbar;
