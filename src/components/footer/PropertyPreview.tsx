import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    address:string,
    baths:number,
    beds:number,
    photo:string,
    price:string,
    sqft:string,
	theme:string
}

const PropertyPreview:FunctionComponent<TSProps> = (props) => {

	return (
		<PropertyPreviewContainer>
            <Photo src={props.photo} alt={'Property Photo'} />
            <Details>
                <Price>{props.price}</Price>
                <Specifications>
                    <Item>{props.beds} Beds</Item>
                    <Item>{props.baths} Baths</Item>
                    <Item>{props.sqft} SqFt</Item>
                </Specifications>
                <Address>
                    {props.address}
                </Address>
            </Details>
		</PropertyPreviewContainer>
	)
}

// STYLED COMPONENTS //
const PropertyPreviewContainer = styled.div((props) => ({
    width:200,
    height:200,
    marginRight:15,
    background:'#fff',
    border:'1px solid #DEDFEA',
    borderRadius:10,
    overflow:'hidden',
    position:'relative',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
}));
const Photo = styled.img((props) => ({
    position:'absolute',
    left:0,
    top:0,
    height:'100%',
}));
const Details = styled.div((props) => ({
    position:'absolute',
    bottom:0,
    width:'100%',
    background:'rgba(32,32,33,.65)',
    backdropFilter:'blur(15px)',
    boxSizing:'border-box',
    padding:5,
}));
const Price = styled.div((props) => ({
    fontSize:19,
    color:'#fff',
    fontWeight:700,
}));
const Specifications = styled.div((props) => ({
    display:'flex',
    justifyContent:'space-between',
}));
const Item = styled.div((props) => ({
    fontSize:13,
    color:'#fff',
    fontWeight:600,
}));
const Address = styled.div((props) => ({
    fontSize:12,
    fontWeight:500,
    color:'#fff',
    whiteSpace:'nowrap',
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

export default connect(mapStateToProps,mapDispatchToProps)(PropertyPreview);