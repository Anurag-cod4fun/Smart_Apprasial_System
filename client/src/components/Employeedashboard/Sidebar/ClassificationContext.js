// ClassificationContext.js
import React, { createContext, useContext, useState } from "react";

export const ClassificationContext = createContext();
export const useClassification = () => useContext(ClassificationContext);

export const ClassificationProvider = ({ children }) => {
  const [classificationTag, setClassificationTag] = useState(null);

  return (
    <ClassificationContext.Provider
      value={{ classificationTag, setClassificationTag }}>
      {children}
    </ClassificationContext.Provider>
  );
};
