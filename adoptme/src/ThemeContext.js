import { createContext } from "react";
// empty function is placeholder if theres no provider above it
// state and updater
const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;