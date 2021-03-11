import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import NavigationItem from './navigation/NavigationItem';

type TSProps = {
	theme:string,
    view:string,
}

const Navigation:FunctionComponent<TSProps> = (props) => {

    const navItems = ['buy','sell','rent','mortgage','find realtors®','my home'];

	return (
		<NavigationContainer>
            {navItems.map((item) => 
                <NavigationItem active={props.view === item} key={item}>
                    {item}
                </NavigationItem>
            )}
		</NavigationContainer>
	)
}

// STYLED COMPONENTS //
const NavigationContainer = styled.div({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    height:'100%',
    marginLeft:8,
    '@media(max-width:1000px)':{
        display:'none',
    }
});

// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
		theme: state.theme,
        view: state.view
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Navigation);