import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';
import ContactForm from "../property/ContactForm";
import PropertyPreview from './PropertyPreview';

type TSProps = {
    property:any,
	theme:string
}

const RealtorInformation:FunctionComponent<TSProps> = (props) => {

	return (
		<RealtorInformationContainer>
            <LeftContent>
                <PresentedBy>Presented By:</PresentedBy>
                <Realtor>REALTOR® {props.property?.realtor.name}</Realtor>
                <BrokeredBy>Brokered By:</BrokeredBy>
                <Company>{props.property?.realtor.company} {props.property?.phone}</Company>
                <AdditionalInfo>
                    <InfoLine>
                        <Key>Broker Location</Key>
                        <Value>{props.property?.realtor.location}</Value>
                    </InfoLine>
                    <InfoLine>
                        <Key>Data Source</Key>
                        <Value>{props.property?.realtor.dataSource}</Value>
                    </InfoLine>
                    <InfoLine>
                        <Key>Source's Property ID</Key>
                        <Value>{props.property?.realtor.sourcePropertyId}</Value>
                    </InfoLine>
                    <InfoLine>
                        <Key>Data Source Copyright</Key>
                        <Value>{props.property?.realtor.copyright}</Value>
                    </InfoLine>
                </AdditionalInfo>
                <OtherPropertyTitle>Other Properties From {props.property?.realtor.company}</OtherPropertyTitle>
                <OtherProperties>
                    <PropertyPreview price={'$470,000'} photo={'https://ap.rdcpix.com/f22d83d1ae43f725d13f7ae36f47cd19l-m118121713od-w480_h360.jpg'} beds={4} baths={3} sqft={'2,009'} address={'1610 Sarah Ave, Albany, OR'} />
                    <PropertyPreview price={'$600,000'} photo={'https://ap.rdcpix.com/1866331706f6b4821e7824a81e0157d8l-m3102554071od-w480_h360.jpg'} beds={4} baths={2} sqft={'2,517'} address={'3221 Yosemite Pl NE, Albany, OR'} />
                    <PropertyPreview price={'$564,000'} photo={'https://ap.rdcpix.com/2650351c08a941cd40583dc5b9001cb3l-m1672575480od-w480_h360.jpg'} beds={3} baths={2} sqft={'3,015'} address={'389 Cherry Ln, Albany, OR'} />
                    <PropertyPreview price={'$585,000'} photo={'https://ap.rdcpix.com/96e9b32271291beb033c687c95a92345l-m281046610od-w480_h360.jpg'} beds={5} baths={3} sqft={'2,240'} address={'2439 Violet Ave, Albany, OR'} />
                </OtherProperties>
            </LeftContent>
            <RightContent>
                <ContactForm static={true}/>
            </RightContent>
		</RealtorInformationContainer>
	)
}

// STYLED COMPONENTS //
const RealtorInformationContainer = styled.div((props) => ({
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    '@media(max-width:870px)':{
        flexDirection:'column-reverse',
    }
}));
const LeftContent = styled.div((props) => ({
   display:'flex',
   flexDirection:'column',
   alignItems:'flex-start',
   justifyContent:'center',
   width:'calc(100% - 360px)',
   '@media(max-width:870px)':{
        width:'100%',
        marginTop:15,
    }
}));
const RightContent = styled.div((props) => ({
   display:'flex',
   minWidth:400,
   '@media(max-width:600px)':{
       minWidth:'100%',
   }
}));
const PresentedBy = styled.div((props) => ({
   fontSize:14,
   color:props.theme.lightText,
}));
const Realtor = styled.div((props) => ({
   fontSize:20,
   color:props.theme.darkText,
   fontWeight:600,
}));
const BrokeredBy = styled.div((props) => ({
    fontSize:14,
    marginTop:15,
    color:props.theme.lightText,
}));
const Company = styled.div((props) => ({
    fontSize:20,
    color:props.theme.darkText,
    fontWeight:600,
}));
const AdditionalInfo = styled.div((props) => ({
    width:'calc(100% - 30px)',
    maxWidth:700,
    marginTop:15,
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    '@media(max-width:870px)':{
        width:'100%',
        maxWidth:'100%'
    }
}));
const InfoLine = styled.div((props) => ({
    width:'100%',
    borderTop:'1px solid #DEDFEA',
    height:40,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    '@media(max-width:870px)':{
        width:'100%',
    }
}));
const Key = styled.div((props) => ({
    fontSize:14,
    color:props.theme.lightText
}));
const Value = styled.div((props) => ({
    fontSize:14,
    color:props.theme.darkText,
    fontWeight:600
}));
const OtherPropertyTitle = styled.div((props) => ({
    fontSize:20,
    color: props.theme.darkText,
    marginBottom:5,
    fontWeight:600,
    marginTop:30,
    '@media(max-width:870px)':{
        display:'none',
    }
}));
const OtherProperties = styled.div((props) => ({
    height:200,
    width:'100%',
    display:'flex',
    marginTop:15,
    flexWrap:'wrap',
    '@media(max-width:870px)':{
        display:'none',
    }
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

export default connect(mapStateToProps,mapDispatchToProps)(RealtorInformation);