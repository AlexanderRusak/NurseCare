import React, {createContext, useState} from 'react';

export interface ContextProps {
  coordinates: [number, number] | null;
  title: string | null;
}

export interface CoordinatesContextProps {
  children: React.ReactElement;
}

export const Coordinates = createContext<{
  coordinatesData: ContextProps;
  update?: React.Dispatch<React.SetStateAction<ContextProps>>;
}>({
  coordinatesData: {
    coordinates: null,
    title: null,
  },
});

export const clearCoordinatesData: ContextProps = {
  coordinates: null,
  title: null,
};

export const CoordinatesContext = ({children}: CoordinatesContextProps) => {
  const [contextValue, setContextValue] =
    useState<ContextProps>(clearCoordinatesData);

  return (
    <Coordinates.Provider
      value={{coordinatesData: contextValue, update: setContextValue}}>
      <React.Fragment>{children}</React.Fragment>
    </Coordinates.Provider>
  );
};
