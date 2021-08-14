import React, {Component} from 'react';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Cta from "../components/Cta";

class Index extends Component {
    render() {
        return (
            <Layout>
                <Hero/>
                <Feature/>
                <Cta/>
            </Layout>
        );
    }
}

export default Index;
