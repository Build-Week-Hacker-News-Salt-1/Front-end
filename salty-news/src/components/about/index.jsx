import React from 'react';
// import { Card, Header } from "semantic-ui-react";
import Team from './team';
import styled from 'styled-components';
import Header from '../Header';

let Card = styled.div`
    margin: 0 20px 10px;
    background: lightgray;

    img {
        width: 250px;
        height: 250px;
        object-fit: cover;
    }

    .padded {
        padding: 0 15px 5px;
    }
`;

const About = () => {
    return (
        <div>
            <Header />
            <h1 id="header" style={{
                margin: "0 0 20px",
                textAlign: "center",
                background: "grey",
            }}>Hacker News Saltiest Comments Team</h1>

            <div style={{
                display: "flex",
                flexFlow: "wrap",
                justifyContent: "space-evenly",
            }}>

                {Team.map(function renderTeam({name, img, role, bio}) {
                    return (
                        <Card key={name}>
                            <img src={img} alt={name}/>
                            <div className="padded">
                                <h2>{name}</h2>
                                <h3>{role}</h3>
                                <p>{bio || "LambdaSchool Student"}</p>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}

export default About;