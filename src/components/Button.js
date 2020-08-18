import styled from 'styled-components'

export const ButtonContainer=styled.button`
text-transform:capitalize;

background:transparent;
border:0.01rem solid var(--mainWhite); 
border-color:${props=> 
    props.cart?"var(--mainYellow)":"var(--lightBlue)"};
color: ${prop => prop.cart ? "var(--mainYellow)":"var(--lightBlue)"};
border-radius: 0.5rem;
padding:0.1rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;
&:hover{
    background: ${prop=> prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color:var(--mainWhite);
}
&:focus{
    outline:none;
}
.navbar-brand{
margin-bottom:5%;
}
.cart-btn:hover{
    color:var(--mainBlue);
    cursor:pointer;
}
`;