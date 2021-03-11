import React, {FunctionComponent, useEffect, useState} from "react";

// REDUX //
import { connect } from "react-redux";

// COMPONENTS //
import styled from 'styled-components';

type TSProps = {
    scrollPosition:Function,
    property:any,
	theme:string
}

const StickyHeader:FunctionComponent<TSProps> = (props) => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        window.document.querySelector('body').scrollTo({top:0, behavior:'smooth'});
        // @ts-ignore
        window.document.querySelector('body').addEventListener('scroll', (e) => setScrollPosition(e.target.scrollTop), {passive:true});
        // @ts-ignore
        return  window.document.querySelector('body').removeEventListener('scroll', (e) => setScrollPosition(e.target.scrollTop));
    }, []);

    useEffect(() => {
        if(scrollPosition > 60){
            props.scrollPosition(scrollPosition);
        } else {
            props.scrollPosition(0);
        }
    }, [scrollPosition]);

	return (
		<StickyHeaderContainer scrollPosition={scrollPosition}>
            <CenteredContent>
                <LeftContent>
                    <Back xmlns="http://www.w3.org/2000/svg" viewBox="0 0 236 212.2"><title>Go back to the previous view</title><polygon points="236 91.5 56.9 92.3 128.3 21.3 108.2 0 0 107.3 105.6 212.2 126.3 191.5 57.6 122.1 236 121.3 236 91.5"/></Back>
                    <Divider/>
                    <HomeAvatar src={props.property?.property.avatar} />
                    <Address>
                        {props.property?.property.address}, {props.property?.property.city}, {props.property?.property.state}
                    </Address>
                </LeftContent>
                <RightContent>
                    <Share>
                        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 222.5 284.3"><title>Share property</title><g id="uBvqa1.tif"><path d="M61.8,86.7v24.4H25V259.3H197.5V111.2H160.8V86.9l.5-.3c12.8,0,25.6-.2,38.4.1s22,10.8,22.7,23.6a16.2,16.2,0,0,1,.1,2.2V258.3c0,8.2-2.9,15.1-9.3,20.4-4.8,4.1-10.5,5.5-16.7,5.6H26.1C10.6,284.3,0,273.6,0,258.2V112.4C0,100.8,6,91.7,16.3,88a23.2,23.2,0,0,1,7.8-1.3c12.1-.2,24.2-.1,36.2-.1Z"/><path d="M123.7,42.5v3.4c0,37.6-.1,75.3,0,113,0,4.2-1,8.1-4.3,11a12.2,12.2,0,0,1-12.6,2.2,11.8,11.8,0,0,1-7.6-9.2,21.2,21.2,0,0,1-.3-4.4c-.1-37.5-.1-75.1-.1-112.6V42.5a19.2,19.2,0,0,0-2,1.9c-4.1,4-8.1,8.1-12.3,12a11.9,11.9,0,0,1-16.3.2,12.3,12.3,0,0,1-2-16.3,18.7,18.7,0,0,1,2.6-3L101.2,4.8c6.4-6.4,13.5-6.4,19.9,0l33.1,32.9c4.5,4.6,5.6,10.4,2.8,15.5A12.2,12.2,0,0,1,138.6,57l-2.8-2.5L124.6,43.2Z"/></g></Icon>
                        Share
                    </Share>
                    <Save>
                        <Icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 231.6 202.2"><title>Save for later</title><g id="aMZA6b.tif"><path d="M115.2,24C122,18.9,128.1,13.5,135,9.3,153.5-2,172.8-3,192.5,6.3A65.5,65.5,0,0,1,219,28.7a70.2,70.2,0,0,1,12.4,44.9c-.8,13.8-5.5,26.2-13,37.7a218.7,218.7,0,0,1-27.3,33.4c-18.9,19.5-40.1,36.3-62,52.3-4.9,3.6-10,6.1-16.1,4.8a22.9,22.9,0,0,1-8.8-3.7c-12.7-9.5-25.5-19-37.7-29.2C48.9,154.3,32.6,138.3,19,119.7,10.9,108.6,3.7,97,1.3,83.1-3.1,57.9,3.6,35.9,21.9,17.9a62.5,62.5,0,0,1,33-17A57.4,57.4,0,0,1,90.6,6a83.1,83.1,0,0,1,23.2,16.7Zm.6,35.9-5.1-7.7c-6.3-10.1-14-18.7-24.3-24.9-6.6-4-13.8-6.7-21.6-6.4-13.7.5-24.7,6.5-33.2,17.1S19.4,62.6,21.4,77c1.2,9,5.1,16.8,10,24.2,13.7,20.7,31.5,37.7,50.4,53.5,10.4,8.6,21.4,16.6,32.2,25,1.2.9,2,1.2,3.4.2,16.6-12.2,32.8-24.9,47.9-39s27.7-27.8,37.9-44.8a50.2,50.2,0,0,0,7.5-29.4c-.9-14.6-6.6-26.9-18.1-36s-23.3-12.4-37.1-8.1S132.3,36,124.2,47.2C121.3,51.2,118.7,55.4,115.8,59.9Z"/></g></Icon>
                        Save
                    </Save>
                    <Contact scrollPosition={scrollPosition}>
                        Contact Agent
                    </Contact>
                </RightContent>
            </CenteredContent>
		</StickyHeaderContainer>
	)
}

// STYLED COMPONENTS //
const StickyHeaderContainer = styled.div((props) => ({
    position: 'fixed',
    top:Math.max(60 - props.scrollPosition, 0),
    width:'100%',
    height:45,
    boxSizing:'border-box',
    borderBottom: props.scrollPosition > 60 ? '1px solid #DEDFEA' : '1px solid transparent',
    background: props.scrollPosition > 60 ? '#fff' : '#FAFBFD',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    transition: 'background .2s ease-in-out, border .2s ease-in-out',
}));
const CenteredContent = styled.div((props) => ({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    height:'100%',
    width:'calc(100% - 30px)',
    maxWidth:1300,
}));
const LeftContent = styled.div((props) => ({
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'center',
}));
const RightContent = styled.div((props) => ({
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
}));
const Back = styled.svg((props) => ({
    height:14,
    paddingTop:5,
    paddingBottom:5,
    fill: props.theme.darkText,
    stroke:1,
}));
const Divider = styled.div((props) => ({
    height:23,
    width:1,
    background:'#DEDFEA',
    marginLeft:10,
    marginRight:10,
}));
const HomeAvatar = styled.img((props) => ({
    height:27,
    width:27,
    borderRadius:45,
    background:props.theme.lightText
}));
const Address = styled.div((props) => ({
    fontSize:14,
    fontWeight:600,
    color:props.theme.darkText,
    marginLeft:10,
}));
const Share = styled.div((props) => ({
    fontSize:13,
    fontWeight:600,
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end',
    color:props.theme.darkText,
}));
const Save = styled.div((props) => ({
    fontSize:13,
    fontWeight:600,
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-end',
    color:props.theme.darkText,
    marginLeft:12,
}));
const Icon = styled.svg((props) => ({
    height:18,
    fill:props.theme.darkText,
    marginRight:6,
}));
const Contact = styled.div((props) => ({
    fontSize:13,
    color:'#fff',
    background:props.theme.brand,
    fontWeight:600,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginLeft:12,
    borderRadius:45,
    height:32,
    boxSizing:'border-box',
    overflow:'hidden',
    whiteSpace:'nowrap',
    width: props.scrollPosition > 60 ? 115:0,
    transition:'all .3s cubic-bezier(.24,.67,.56,.99)',
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

export default connect(mapStateToProps,mapDispatchToProps)(StickyHeader);