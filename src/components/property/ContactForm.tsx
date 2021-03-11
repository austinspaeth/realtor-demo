import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
	theme:string
}

const ContactForm:FunctionComponent<TSProps> = (props) => {

	return (
		<ContactFormContainer>
		
		</ContactFormContainer>
	)
}

// STYLED COMPONENTS //
const ContactFormContainer = styled.div((props) => ({

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

export default connect(mapStateToProps,mapDispatchToProps)(ContactForm);