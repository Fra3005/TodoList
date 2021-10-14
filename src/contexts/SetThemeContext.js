import React, { createContext, useContext } from "react";

const SetThemeContext = createContext({});

const useSetThemeContext = () => {
  return useContext(SetThemeContext);
};

const SetThemeContextProvider = SetThemeContext.Provider;

export { useSetThemeContext, SetThemeContext, SetThemeContextProvider };
