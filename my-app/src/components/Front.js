import styled from 'styled-components'
import {Route,Link} from 'react-router-dom';

const Front = (props)=>{
  function handleSignin()
  {
    window.location.href="signin";
  }
    return (
        <Container>
            <Nav>
                <a href="/">
                {/* <img src="/images/login-logo.svg" alt="" /> */}
                </a>
                <div>
                  <Link to={'/signup'}>
                      <Join>Join now</Join>
                  </Link>
                    <Link to={'/login'}>
                      <SignIn>Sign in</SignIn>
                    </Link>
                      
                </div>
            </Nav>
            <Section>
            <Hero>
            {/* <h1>Welcome to your professional community</h1> */}
            {/* <img src="/images/login-hero.svg" alt="" /> */}
            <img src="/images/col.png" alt="" />
            {/* <img src="/images/community.png" alt="" /> */}
            </Hero>
            <Form>
            <Google>
                <div>
                <span><img src="/images/Kiit.png" alt="icon pic" /></span>
                <div>
                <h1>kiitCommunity</h1>
                <p>An Interactive Web Application</p>
                </div>
                </div>
            </Google>
            </Form>
      </Section>
        </Container>
    )
}
const Container = styled.div`
  padding: 0px;
  background:white;
  /* background:#ede7f6; */
`;
const Google = styled.div`
  border:none;
  display: flex;
  align-items:center;
  flex-direction:column;
  justify-content: center;
  background:transparent;
  align-items: center;
  height: 56px;
  width: 100%;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  h1{
        font-weight: normal;
        margin-left: 0.2vw;
        font-size: 50px;
  }
  h1,p{
   //margin: 150px 50px -10px 5px;
  font-weight: bold;
  letter-spacing: 2px;
  word-spacing: 3px;
  color: #311b92;
  font-family:Comic Sans MS, Comic Sans, cursive;
  }
  p{
    font-weight:700;
    margin-top: 5px;
  font-size: 15px;
  font-weight: normal;
  margin-left: 0.2vw;
  }
  div{
    span{
      img{
        //width:120px;
        //height:80px;
        margin-top: 5px;
        
        //margin: 140px 15px 0px 150px;
        height: 100px;
        width: 150px;
      }
    }
  }
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  //box-shadow: inset 0 0 0 1px #0a66c2;
  
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  border:none;
  color: white;
  border-radius: 8px; 
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color:#3f51b5;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  margin-left:10px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  color: white;
  border-radius: 8px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: #7e57c2;
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }

  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;




export default Front;