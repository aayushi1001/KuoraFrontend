import React, { useState , useEffect} from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom'
const Header=(props)=>{

  const [options, setOptions] = useState([]);
    const [display, setDisplay] = useState(false)
    const [search, setSearch] = useState('');

    const display_post = (e) => {
      setSearch(e.target.value);

      props.onSelect(e.target.value);

      fetch('http://localhost:3001/post_get_title/'+e.target.value)
      .then(res => {
        return res.json();
      })
      .then(data => {
        
        console.log(data.post[0]);
        

        
        
        
      }).catch(err=> console.log(err))

    

  }

    const handleSearch = (e)=>{

        setSearch(e.target.value);

        if(e.target.value){
        fetch('http://localhost:3001/search_bar/'+e.target.value)
          .then(res => {
            return res.json();
          })
          .then(data => {
            
            console.log(data.post);
            const dataForOptions=[];

            for (let index = 0; index < data.post.length; index++) {
                const element = data.post[index].title;
                const arr=[element, index];
                dataForOptions.push(arr);
                console.log(element);
                
            }
            setOptions(dataForOptions);
          }).catch(err=> console.log(err))

        }

    }
    const close = () => {
      localStorage.clear();
      
      
      window.location.href="/"
      // <Link to ="/login"></Link>
    };

    

    return (
        <Container>
            <Content>
                <Logo>
                
                <span>kiitCommunity</span>
                
                </Logo>
                <Search>
                <form id="form">
                <div className="btn-group">
                <input className="btn btn-secondary dropdown-toggle search " data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="true" value={search} onChange={handleSearch} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="search"/>

    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
    {
        options.map(arr => (

        <li  key={arr[1]} >

                <button onClick={(e) => {
                      display_post(e);
                        // console.log(e.target.value);
                      }}
                      className="dropdown-item" type="button" value={arr[0]}>{arr[0]}</button>
                </li>        
      ))}
</ul>
</div>
    
      </form>
      <SearchIcon>
                        {/* <img src="/images/search-icon.svg" alt="" /> */}
                    </SearchIcon>
                    </Search>
                {/* <Search>
                    <div>
                        <input type="text" placeholder="Search" value={search} onChange={handleSearch} />
                    </div>
                    <SearchIcon>
                        <img src="/images/search-icon.svg" alt="" />
                    </SearchIcon>
                </Search> */}
                <Nav>
                    <NavListWrap>
                        <NavList>
                        <a>
                            <img src="/images/home.svg" alt="" />
                            <span>Home</span>
                        </a>
                        </NavList>
                        <NavList>
                        <a>
                          <Link to ="/profile">
                            <img src="/images/settings.svg" alt="" />
                            <span>Your Profile</span>
                            </Link>
                        </a>
                        </NavList>

                        <User>
                        <a>
                            <img src={localStorage.getItem("pic")} alt="" />
                            <span>{localStorage.getItem("Name")}</span>
                        </a>

                        <SignOut>
                            <a onClick={close}>Log Out</a>
                        </SignOut>
                        </User>

                        
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
  box-shadow : 2px 7px 8px #a1a4b8;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 20px;
  font-weight:800;
  text-decoration:none!important;
  color:black;
  position : absolute;
  left:10px;
  img {
    height : 40px;
    width : 40px;
  }
  span {
    font-size : 25px;
    margin-left:15px;
    font-weight:800;
    font-family: Comic Sans MS, Comic Sans, cursive;
    letter-spacing:1px;
    color:#1a237e;
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  left:15vw;
  & > div {
    max-width: 280px;
    form {
      border: none;
      box-shadow: 2px 2px 5px #c5cae9;
      background-color: #e8eaf6;
      border-radius: 5px;
      color: rgba(0, 0, 0, 0.9);
      width: 418px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
  @media(max-width: 1200px){
    margin-left:15vh;
  }
  @media(max-width: 600px){
    margin-left:20vh;
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  
  top: 10px;
  left: 14vw;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    img {
      margin-top: 10px;
      height:25px;
      width : 25px;
    }
    span {
      font-weight:normal;
      color: #1a237e;
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
export default Header;