const Pet = ({ name, animal, breed }) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, animal),
        React.createElement("h2", {}, breed),
    ])
}


const App = () => {
    return React.createElement(
        "div",
        {},
        [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, { 
            name: "Rosie", 
            animal: "Dog", 
            breed: "Mixed"
        }),
        React.createElement(Pet, { 
            name: "Murphy", 
            animal: "Dog", 
            breed: "Trash-Dog"
        }),
        React.createElement(Pet, { 
            name: "Scotia", 
            animal: "Dog", 
            breed: "Mountian Dog"
        }),
        ]
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);