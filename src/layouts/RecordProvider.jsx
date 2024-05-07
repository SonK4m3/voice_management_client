import React, { createContext, useState, useContext } from "react";

const RecordContext = createContext();

export const RecordProvider = ({ children }) => {
  const [recordPath, setRecordPath] = useState(null);

  const setRecord = (path) => {
    setRecordPath(path);
  };

  const value = {
    recordPath,
    setRecord,
  };

  return (
    <RecordContext.Provider value={value}>{children}</RecordContext.Provider>
  );
};

export const useRecord = () => {
  return useContext(RecordContext);
};
