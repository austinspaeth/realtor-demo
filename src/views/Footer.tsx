import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import RealtorInformation from '../components/footer/RealtorInformation';

type TSProps = {
	theme:string
}

const Footer:FunctionComponent<TSProps> = (props) => {

	return (
		<FooterContainer>
            <CenteredContent>
                <RealtorInformation/>
            </CenteredContent>
		</FooterContainer>
	)
}

// STYLED COMPONENTS //
const FooterContainer = styled.footer({
    width:'100%',
    background:'#fff',
    paddingTop:25,
    marginTop:25,
    paddingBottom:25,
    borderTop:'1px solid #DEDFEA',
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'center',
});
const CenteredContent = styled.footer({
    width:'calc(100% - 30px)',
    maxWidth:1300,
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
});

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

export default connect(mapStateToProps,mapDispatchToProps)(Footer);