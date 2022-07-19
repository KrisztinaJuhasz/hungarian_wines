import { FunctionComponent, MutableRefObject, useContext, useEffect, useRef } from "react";
import WineContext from "../context/wine";
import { Color, Type } from '../interfaces/wine';
import { uppercase } from "../utils/stringFormat";
import gsap from 'gsap';

const Filter: FunctionComponent<{}> = (): JSX.Element => {
    const { isFilterOpen, setFilterOpen } = useContext(WineContext);
    const filterButtonRef: MutableRefObject<HTMLButtonElement> = useRef<HTMLButtonElement | null>(null);
    const filterFormRef: MutableRefObject<HTMLFormElement> = useRef<HTMLFormElement | null>(null);
    const filterSVGRef: MutableRefObject<SVGSVGElement> = useRef<SVGSVGElement | null>(null);

    let enableAnim: MutableRefObject<boolean> = useRef<boolean>(false);

    const toggleFilter = (): void => {
        enableAnim.current = true;
        setFilterOpen(!isFilterOpen);
    }

    useEffect(() => {
        if (enableAnim.current) {
            if (isFilterOpen) {
                animateOpen();
            } else {
                animateClose();
            }
        } else {
            gsap.set(filterFormRef.current, {
                y: -150,
                opacity: 0,
                height: 0
            });
        }
    }, [isFilterOpen]);

    const openedContent: JSX.Element = (
        <form ref={filterFormRef}>
            <input type="text" placeholder='Name'/>
            <select name="filter-color">
                <option value="all">All</option>
                {Object.values(Color).map((c: string, i: number) => (
                    <option key={i} value={c}>{uppercase(c)}</option>
                ))}
            </select>
            <select name="filter-type">
                <option value="all">All</option>
                {Object.values(Type).map((t: string, i: number) => (
                    <option key={i} value={t}>{uppercase(t)}</option>
                ))}
            </select>
        </form>
    );

    const animateOpen = (): void => {
        const items: Array<HTMLElement | string> = [filterButtonRef.current, '.wine-cards', 'footer'];

        items.map((item: HTMLElement | string) => {
            gsap.to(item, {
                duration: 0.5,
                y: 200
            });
        });

        gsap.to(filterSVGRef.current, {
            duration: 0.5,
            rotate: 180
        });

        gsap.fromTo(filterFormRef.current, {
            opacity: 0,
            y: -150,
            height: 0
        }, {
            duration: 0.5,
            opacity: 1,
            y: 100
        });
    }

    const animateClose = (): void => {
        const items: Array<HTMLElement | string> = [filterButtonRef.current, '.wine-cards', 'footer'];
        
        items.map((item: HTMLElement | string) => {
            gsap.to(item, {
                duration: 0.5,
                y: 0
            });
        });

        gsap.to(filterSVGRef.current, {
            duration: 0.5,
            rotate: 0
        });

        gsap.fromTo(filterFormRef.current, {
            opacity: 1,
            y: 100
        }, {
            duration: 0.5,
            opacity: 0,
            y: -150,
            height: 0
        });
    }

    return (
        <div className='filter-container'>
            {openedContent}
            <button ref={filterButtonRef} onClick={toggleFilter}>
                <svg ref={filterSVGRef} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM6.36803 8.03135C5.98882 7.62983 5.35591 7.61174 4.95439 7.99096C4.55287 8.37017 4.53479 9.00307 4.914 9.40459L9.27298 14.02C9.46189 14.22 9.72486 14.3334 9.99999 14.3334C10.2751 14.3334 10.5381 14.22 10.727 14.02L15.086 9.40459C15.4652 9.00307 15.4471 8.37017 15.0456 7.99096C14.6441 7.61174 14.0112 7.62983 13.632 8.03135L9.99999 11.877L6.36803 8.03135Z" fill="#E2D34B"/>
                </svg>
                <p>Filter</p>
            </button>
        </div>
    );
}

export default Filter;
