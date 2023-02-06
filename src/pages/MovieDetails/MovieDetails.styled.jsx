import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContainerMovieDetails = styled.div`
  width: 600px;
  display: flex;
  padding: 30px;
  background-color: #ffffff;
  margin: 20px 30px 30px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const BtnGoBack = styled.button`
  border: none;
  background-color: transparent;
  margin: 20px 0 0 35px;
  padding: 0;
  font-weight: 700;
  cursor: pointer;
`;

export const InfoList = styled.ul`
  text-decoration: none;
  margin-left: 0;
  margin-top: 0;
`;

export const AddInfo = styled.h3`
  margin-left: 35px;
  margin-bottom: 5px;
`;

export const MovieInfo = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const HrMovieDetails = styled.hr`
margin-left: 30px;
width: 660px; 
`;

export const AddInfoLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  text-decoration: none;
  font-weight: 600;
  margin-top: 7px;

  &.active {
    color: #e6880f;
    font-weight: 700;
    transform: scale(1.1);
  }  
`;

export const AddInfoItem = styled.li`
    list-style: none;
`;

