import React, {FunctionComponent, useState, useEffect} from "react";

// REDUX //
import { connect } from 'react-redux';
import {  } from './redux/Actions';

// VIEWS //
import Header from './views/Header';
import Footer from './views/Footer';
import Property from './views/Property';

// COMPONENTS //
import { ThemeProvider } from 'styled-components';

// STYLES //
import './assets/css/styles.css';

type TSProps = {
    theme: any
	view:string
};

const App:FunctionComponent<TSProps> = (props) => {

    switch(props.view){
        default:
            return (
                <ThemeProvider theme={props.theme}>
                    <Header />
                    <Property />
                    <Footer />
                </ThemeProvider>
            );
    }
}

// REDUX MAPPINGS //
const mapStateToProps = (state) => {
	return {
        theme: state.theme
    };
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps,mapDispatchToProps)(App);