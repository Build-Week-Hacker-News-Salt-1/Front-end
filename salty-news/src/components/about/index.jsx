import React from 'react';
// import { Card, Header } from "semantic-ui-react";
import Team from './team';
import styled from 'styled-components';

let Card = styled.div`
    margin: 0 20px;

    img {
        width: 250px;
        height: 250px;
        object-fit: cover;
    }
`;

const About = () => {
    return (
        <div>
            <h1 id="header" style={{
                textAlign: "center",
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
                            <h2>{name}</h2>
                            <h3>{role}</h3>
                            <p>{bio || "LambdaSchool Student"}</p>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}

export default About;