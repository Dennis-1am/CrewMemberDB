import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types';

export const DataContext = createContext();

export function DataProvider({ children }) {
    const [data, setData] = useState({
        id: 0,
        Name: '',
        Color: '',
        Speed: 0,
    });

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function useData() {
    return useContext(DataContext);
}