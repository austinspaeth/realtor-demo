import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import { propertyTabs } from '../../assets/mockData/propertyTabs';

type TSProps = {
    label:string,
    svg:string,
	theme:string,
    viewBox:string,
}

const PropertyDetails:FunctionComponent<TSProps> = (props) => {



	return (
		<PropertyDetailsContainer>
            {propertyTabs.map((tab) => 
                <Tab key={tab.label}>
                    <Title>
                        <Icon viewBox={tab.viewBox} dangerouslySetInnerHTML={{__html: tab.svg}} />
                        {tab.label}
                    </Title>
                    <Carat xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 129.9"><title>Carat</title><g id="_3LOSTa.tif" data-name="3LOSTa.tif"><path d="M120.7,108l2.5-3.1L224.4,3.6C227.7.3,231.9-.1,236,2.5a9.3,9.3,0,0,1,3.5,10.6,10.2,10.2,0,0,1-2.2,3.2L127.6,126.1c-5,5-10,5-15,.1L3.3,16.4C.4,13.5-.8,10.1.6,6.2S4.5.6,8.3.1a8.7,8.7,0,0,1,7.5,2.6l9.5,9.6,93.1,92.8C119.1,105.8,119.6,106.7,120.7,108Z"/></g></Carat>
                </Tab>
            )}
		</PropertyDetailsContainer>
	)
}

// STYLED COMPONENTS //
const PropertyDetailsContainer = styled.div((props) => ({
    width:'100%',
    marginTop:25,
}));
const Tab = styled.div((props) => ({
    width:'100%',
    paddingTop:20,
    paddingBottom:20,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    borderTop:'1px solid #DEDFEA'
}));
const Title = styled.div((props) => ({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
    color:props.theme.darkText,
    fontSize:16,
    fontWeight:600,
}));
const Icon = styled.svg((props) => ({
    height:30,
    fill:props.theme.darkText,
    marginRight:10,
}));
const Carat = styled.svg((props) => ({
    height:8,
    fill:props.theme.darkText
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