import React from 'react';
import { Card, Header } from "semantic-ui-react";
//profile images
//import defaultImage from "../../assets/images/default.png"
import ali from "../../assets/images/ali.jpg";
import alvin from "../../assets/images/alvin.jpg"
import aric from "../../assets/images/aric.jpg";
import benjamin from "../../assets/images/benjamin.jpg";
import christian from "../../assets/images/christian.jpg";
import cori from "../../assets/images/cori.jpg";
import dakota from "../../assets/images/dakota.jpg";
import veto from "../../assets/images/veto.jpg";
import jeffrey from "../../assets/images/jeffrey.jpg"



const About = () => {
    var team = teamData();

    return (
        <div>
            <Header id="header" textAlign="center" as="h1">The Dream Team</Header>

            <div style={{ display: "flex", flexFlow: "wrap" }}>

                {team.map(function renderTeam(member) {
                    return (
                        <Card key={member.name} image={member.img}
                            description={<><h3>{member.role}</h3><h5>{member.bio || "LambdaSchool Student"}</h5><br /></>}
                            header={member.name} style={{ margin: "10px" }}>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}

export default About;


function teamData() {
    return [
        { img: ali, role: "Front end", name: "Ali Sheikh"},
        { img: alvin, role: "Data Science", name: "Alvin Walker"},
        { img: aric, role: "Data Science", name: "Aric Phelps"},
        { img: benjamin, role: "Front end", name: "Benjamin Hall"},
        { img: christian, role: "Front end", name: "Christian Auld"},
        { img: cori, role: "Back end", name: "Cori Sternberg"},
        { img: dakota, role: "Front end", name: "Dakota Pope"},
        { img: veto, role: "Front end", name: "Veto Ramirez"},
        { img: jeffrey, role: "Data Science", name: "Jeffrey Sheppard"},
    ].sort(function sortByRole(desc, name) {
        if (desc.role < name.role) return -1;
        if (desc.role > name.role) return 1;
        return 0;
    })
}
