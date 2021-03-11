import React, {FunctionComponent, useState, useEffect} from "react";

// REDUX //
import { connect } from 'react-redux';
import { setView } from './redux/Actions';

// VIEWS //
import Header from './views/Header';
import Footer from './views/Footer';
import Property from './views/Property';

// COMPONENTS //
import { ThemeProvider } from 'styled-components';

// STYLES //
import './assets/css/styles.css';

type TSProps = {
    passedView: string,
    setView: Function,
    theme: any,
	view: string,
};

const App:FunctionComponent<TSProps> = (props) => {

    useEffect(() => {
        if(props.view !== props.passedView){
            props.setView(props.passedView);
        }
    }, [props.passedView]);

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
        theme: state.theme,
        view: state.view
    };
};

const mapDispatchToProps = (dispatch) => {
	return {
        setView: (view) => dispatch(setView(view))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);