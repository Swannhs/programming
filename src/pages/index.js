import React, {useEffect} from 'react';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Cta from "../components/Cta";
import {useColorMode} from "theme-ui"

const Index = () => {
    const [colorMode, setColorMode] = useColorMode()
    const isDark = colorMode === `light`
    useEffect(() => {
        setColorMode(isDark ? `light` : `light`)
    })

    return (
        <Layout>
            <Hero/>
            <Feature/>
            <Cta/>
        </Layout>
    );
};

export default Index;
