const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Rosie"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Mixed"),
    ])
}


const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Adopt Me!")
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);