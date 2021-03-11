import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    label:string,
	theme:string
}

const FormButton:FunctionComponent<TSProps> = (props) => {

	return (
		<FormButtonContainer>
            {props.label}
		</FormButtonContainer>
	)
}

// STYLED COMPONENTS //
const FormButtonContainer = styled.div((props) => ({
    width:'100%',
    height:50,
    color:'#fff',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize:15,
    borderRadius:45,
    marginTop:30,
    cursor:'pointer',
    background:props.theme.brand
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

export default connect(mapStateToProps,mapDispatchToProps)(FormButton);