import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type TSProps = {
    active:boolean,
    children:string,
	theme:string
}

const NavigationItem:FunctionComponent<TSProps> = (props) => {

	return (
        <Link style={{height:'100%',}} to={'/'}>
		    <NavigationItemContainer active={props.active}>
                {props.children}
		    </NavigationItemContainer>
        </Link>
	)
}

// STYLED COMPONENTS //
const NavigationItemContainer = styled.div((props) => ({
    color: props.active ? props.theme.brand : props.theme.darkText,
    fontSize:13,
    fontWeight:600,
    height:'100%',
    boxSizing:'border-box',
    display:'flex',
    alignItems:'center',
    paddingLeft:8,
    paddingRight:8,
    textTransform:'capitalize',
    justifyContent:'flex-start',
    paddingTop:0,
    borderBottom: '1px solid',
    cursor:'pointer',
    borderBottomColor: props.active ? props.theme.brand : 'transparent',
    transition:'all .2s ease-in-out',
    ':hover':{
        color:props.theme.brand
    }
}));

// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(NavigationItem);