import React from 'react';
import PropTypes from 'prop-types';


const Profile = props => {
const styleObject= {color:"blue", textAlign: "center" }
const buttonStyle ={
    marginLeft:'48%',
    backgroundColor: 'green',
    border: 'none',
    color: 'white',
    textAlign:"center",
    textDecoration: 'none',
    fontSize: '16px'
}
    return (
        <>
            <h1 style={styleObject}>FullName: {props.fullName}</h1>
            <h1 style={styleObject}>Bio: {props.bio}</h1>
            <h1 style={styleObject}>Profession: {props.profession}</h1>
            
            <button style={buttonStyle}  onClick={()=> props.handleName(props.fullName)} >Click me</button>
        <div style={{display:"block", textAlign:"center", marginTop:'20px'}}>
            <img src={props.children} alt={props.alt} />
            
        </div>        
        </>
    )
};

Profile.defaultProps = {
    fullName: 'Walid Khelil' ,
    bio: 'I am in love with coding!',
    profession: 'Junior Full Stack Web Developer',
}

Profile.propTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
};

export default Profile
