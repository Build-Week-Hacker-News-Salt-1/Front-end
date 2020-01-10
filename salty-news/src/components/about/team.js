const Team = [
    {
        img: require("../../assets/images/ali.jpg"),
        role: "Front end",
        name: "Ali Sheikh",
        bio: ""
    },
    /*
    {
        img: require("../../assets/images/alvin"),
        role: "Data Science",
        name: "Alvin Walker",
        bio: ""
    },
    */
    {
        img: require("../../assets/images/aric.jpg"),
        role: "Data Science",
        name: "Aric Phelps",
        bio: ""
    },
    {
        img: require("../../assets/images/benjamin.jpg"),
        role: "Front end",
        name: "Benjamin Hall",
        bio: ""
    },
    {
        img: require("../../assets/images/christian.jpg"),
        role: "Front end",
        name: "Christian Auld",
        bio: ""
    },
    {
        img: require("../../assets/images/cori.jpg"),
        role: "Back end",
        name: "Cori Sternberg",
        bio: ""
    },
    {
        img: require("../../assets/images/dakota.jpg"),
        role: "Front end",
        name: "Dakota Pope",
        bio: ""
    },
    {
        img: require("../../assets/images/veto.jpg"),
        role: "Front end",
        name: "Veto Ramirez",
        bio: ""
    },
    {
        img: require("../../assets/images/jeffrey.jpg"),
        role: "Data Science",
        name: "Jeffrey Sheppard",
        bio: ""
    },
].sort(function sortByRole(a, b) {
    if (a.role < b.role) return -1;
    if (a.role > b.role) return 1;
    return 0;
});

export default Team;