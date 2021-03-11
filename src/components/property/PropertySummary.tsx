import React, {FunctionComponent, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    property:any,
	theme:string
}

const PropertySummary:FunctionComponent<TSProps> = (props) => {

	return (
        <>
            <PropertySummaryContainer>
                <LeftContent>
                    <Pricing>
                        <Price>${props.property?.property.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Price>
                        <Estimate>Est. Payment: <Span>$2,250/mo</Span></Estimate>
                    </Pricing>
                    <PropertyFacts>
                        <Fact>
                            <Bold>{props.property?.property.beds}</Bold>
                            Bed{props.property?.property.beds > 1 && 's'}
                        </Fact>
                        <Fact>
                            <Bold>{props.property?.property.baths}</Bold>
                            Bath{props.property?.property.baths > 1 && 's'}
                        </Fact>
                        <Fact>
                            <Bold>{props.property?.property.sqft.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Bold>
                            SqFt
                        </Fact>
                        <Fact>
                            <Bold>{props.property?.property.lot.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Bold>
                            SqFt Lot
                        </Fact>
                    </PropertyFacts>
                    <Address>
                        {props.property?.property.address}, {props.property?.property.city}, {props.property?.property.state}
                    </Address>
                </LeftContent>
                <RightContent>
                    <GoogleMap src={'https://s3-us-west-2.amazonaws.com/austinspaeth.com/storage/googlemap.png'} alt={'Google Map of '+props.property?.property.address} />
                    <ExtraInfoLine>
                        <Info>Commute Time</Info>
                        <Info>Noise Level: <Strong>{props.property?.property.noise}</Strong></Info>
                    </ExtraInfoLine>
                    <ExtraInfoLine>
                        <Info>Flood Factor: <Strong>{props.property?.property.floodFactor}/10</Strong></Info>
                    </ExtraInfoLine>
                </RightContent>
            </PropertySummaryContainer>
            <Divider />
            <Row>
                <Column>
                    <InfoLine>
                        <Key>Property Type</Key>
                        <Value>{props.property?.property.type}</Value>
                    </InfoLine>
                    <InfoLine>
                        <Key>Year Built</Key>
                        <Value>{props.property?.property.year}</Value>
                    </InfoLine>
                </Column>
                <Column>
                    <InfoLine>
                        <Key>Last Sold</Key>
                        <Value>{props.property?.property.lastSold.price} in {props.property?.property.lastSold.year}</Value>
                    </InfoLine>
                    <InfoLine>
                        <Key>Price/SqFt</Key>
                        <Value>${props.property?.property.pricePerSqFt}</Value>
                    </InfoLine>
                </Column>
                <Column>
                    <InfoLine>
                        <Key>Days on Realtor.com</Key>
                        <Value>{props.property?.property.daysOnRealtor} Day{props.property?.property.daysOnRealtor > 1 && 's'}</Value>
                    </InfoLine>
                    <InfoLine>
                        <Key>Garage</Key>
                        <Value>{props.property?.property.garage} Car{props.property?.property.garage > 1 && 's'}</Value>
                    </InfoLine>
                </Column>
            </Row>
        </>
	)
}

// STYLED COMPONENTS //
const PropertySummaryContainer = styled.div((props) => ({
    width:'100%',
    marginTop:25,
    display:'flex',
    justifyContent:'space-between',
    alignItems:'flex-start',
}));
const Divider = styled.div((props) => ({
    width:'100%',
    height:1,
    background:'#DEDFEA',
    marginTop:25,
}));
const Row = styled.div((props) => ({
    width:'100%',
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'center',
}));
const Column = styled.div((props) => ({
    width:'calc(33% - 1px)',
    borderRight: '1px solid #DEDFEA',
    paddingTop:15,
    boxSizing:'border-box',
    paddingLeft:15,
    paddingRight:15,
    ':first-child':{
        paddingLeft:0,
    },
    ':last-child':{
        paddingRight:0,
        borderRight:'none',
    }
}));
const InfoLine = styled.div((props) => ({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    marginBottom:15,
}));
const Key = styled.div((props) => ({
    fontSize:14,
    color:props.theme.lightText,
}));
const Value = styled.div((props) => ({
    fontSize:14,
    color:props.theme.darkText,
    fontWeight:600,
}));
const LeftContent = styled.div((props) => ({
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
}));
const RightContent = styled.div((props) => ({
    display:'flex',
    flexDirection:'column',
    alignItems:'flex-end',
    justifyContent:'flex-start'
}));
const ExtraInfoLine = styled.div((props) => ({
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
}));
const Info = styled.div((props) => ({
    fontSize:13,
    color:props.theme.link,
    display:'flex',
    marginLeft:10,
    marginTop:8,
    borderBottom:'1px solid'
}));
const Strong = styled.div((props) => ({
    textTransform:'capitalize',
    fontWeight:600,
    marginLeft:5,
}));
const GoogleMap = styled.img((props) => ({
    height:90,
    borderRadius:10,
}));
const Pricing = styled.div((props) => ({
    display:'flex',
    justifyContent:'flex-start',
}));
const Price = styled.div((props) => ({
    fontSize:38,
    color:props.theme.darkText,
    fontWeight:900,
}));
const Estimate = styled.div((props) => ({
    display:'flex',
    marginLeft:10,
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'center',
    fontSize:11,
    color:props.theme.lightText,
}));
const Span = styled.div((props) => ({
    fontSize:16,
    color:props.theme.link,
    fontWeight:600,
    borderBottom:'1px solid',
    marginTop:-2,
}));
const PropertyFacts = styled.div((props) => ({
    display:'flex',
    justifyContent:'flex-start',
}));
const Fact = styled.div((props) => ({
    display:'flex',
    color:props.theme.lightText,
    fontSize:14,
    marginRight:10,
}));
const Bold = styled.div((props) => ({
    fontWeight:600,
    color:props.theme.darkText,
    marginRight:5,
}));
const Address = styled.div((props) => ({
    marginTop:6,
    fontSize:18,
    fontWeight:600,
    color:props.theme.darkText,
    marginRight:5,
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

export default connect(mapStateToProps,mapDispatchToProps)(PropertySummary);