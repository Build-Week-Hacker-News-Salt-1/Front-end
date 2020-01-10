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
            <div id="header" textAlign="middle" as="h2">Hacker News Saltiest Comments Team</div>

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
                            <h5>{bio || "LambdaSchool Student"}</h5>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}

export default About;