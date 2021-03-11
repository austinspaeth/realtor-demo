import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:string
}

const PropertyDetails:FunctionComponent<TSProps> = (props) => {

	return (
		<PropertyDetailsContainer>
		
		</PropertyDetailsContainer>
	)
}

// STYLED COMPONENTS //
const PropertyDetailsContainer = styled.div((props) => ({
    width:'100%',
    marginTop:25,
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

export default connect(mapStateToProps,mapDispatchToProps)(PropertyDetails);