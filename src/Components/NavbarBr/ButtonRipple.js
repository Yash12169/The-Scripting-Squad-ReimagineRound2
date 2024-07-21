import React from 'react';
import styled from 'styled-components';

const PopupComponent = () => {
    return (

                    <PopupButton href="#0">Submit</PopupButton>

    );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin: 0;
`;

const Popup = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 10px 40px -14px rgba(0,0,0,0.25);
  text-align: center;
`;

const PopupContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const PopupTitle = styled.h2`
  color: #32325d;
  font-size: 1.8em;
  line-height: 1.5em;
  font-weight: 900;
  margin-top: 0;
`;

const PopupBody = styled.p`
  font-size: 1.1em;
  line-height: 1.6em;
  color: #6b7c93;
  font-weight: 500;
  margin-bottom: 2.1em;
`;

const PopupButton = styled.a`
  display: flex;
  text-align: center;
  text-decoration: none;
  font-weight: 800;
  font-size: 14px;
    width: 120px;
    height: 50px;
    margin-left: -125px;
    justify-content: center;
    align-items: center;
    
  color: #fff;
  border-radius: 30px;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  background-image: linear-gradient(to right, #895cf2 0%, #ffabf4 50%, #895cf2 100%);
  transition: 0.5s;

  &:hover {
    background-position: right center;
  }
`;

export default PopupComponent;