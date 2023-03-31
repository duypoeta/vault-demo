"use client";

import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "@/components/header";
import Breadcrumb from "@/components/navigation/breadcrumbs";
import EquipmentDetail from "./equipment-detail";
import { ThemeContext, ThemeContextValue } from "@/contexts/theme";
import { useEffect, useState } from "react";
import { MediaInfoContext } from "@/contexts/MediaInfo";
import { useMediaQuery } from "react-responsive";

const Body = () => {
    return (
        <div className="xl:px-[155px] md:px-5">
            <Breadcrumb />
            <EquipmentDetail />
        </div>
    );
};

export default function Home() {
    const [theme, setTheme] = useState(ThemeContextValue[0]);

    useEffect(() => {
        const currentTheme = window.localStorage.getItem("theme")?.toLowerCase();
        if (currentTheme && theme !== currentTheme) {
            setTheme(currentTheme);
        }
    }, [theme]);

    const handleChangeTheme = (newValue: String) => {
        setTheme(newValue);
        window.localStorage.setItem("theme", newValue.toLowerCase());
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ThemeContext.Provider value={theme}>
                <div className={`theme-${theme.toLowerCase()}`}>
                    <Header handleChangeTheme={handleChangeTheme} />
                    <Body />
                </div>
            </ThemeContext.Provider>
        </>
    );
}
