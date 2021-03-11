import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    property:any,
	theme:string
}

const ImageExplorer:FunctionComponent<TSProps> = (props) => {

	return (
		<ImageExplorerContainer>
            <PresentedBy>
                <Label>Presented by</Label>
                <Realtor>{props.property?.realtor.name} with {props.property?.realtor.company}</Realtor>
            </PresentedBy>
            <Image src={props.property?.property.image} alt={props.property?.property.address} />
		</ImageExplorerContainer>
	)
}

// STYLED COMPONENTS //
const ImageExplorerContainer = styled.div((props) => ({
    marginTop:20,
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    '@media(max-width:600px)':{
        marginTop:0,
    }
}));
const PresentedBy = styled.div((props) => ({
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
}));
const Label = styled.div((props) => ({
    fontSize:10,
    color:props.theme.lightText
}));
const Realtor = styled.div((props) => ({
    fontSize:13,
    color:props.theme.link,
    borderBottom:'1px solid',
    paddingBottom:1,
}));
const Image = styled.img((props) => ({
    width:'100%',
    borderRadius:10,
    marginTop:15,
}));

// REDUX MAPPING //
const mapStateToProps = (state) => {
	return {
        property: state.property,
		theme: state.theme
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(ImageExplorer);