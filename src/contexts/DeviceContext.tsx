import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type DeviceContextType = {
    codigo: string;
    setCodigo: (value: string) => void;
};

const DeviceContext = createContext<DeviceContextType>({
    codigo: "",
    setCodigo: () => { },
});

export const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [codigo, setCodigoState] = useState("");

    useEffect(() => {
        // Carrega código persistido do AsyncStorage
        const loadCodigo = async () => {
            const storedCodigo = await AsyncStorage.getItem("@codigo_dispositivo");
            if (storedCodigo) setCodigoState(storedCodigo);
        };
        loadCodigo();
    }, []);

    const setCodigo = async (value: string) => {
        setCodigoState(value);
        await AsyncStorage.setItem("@codigo_dispositivo", value);
    };

    return (
        <DeviceContext.Provider value={{ codigo, setCodigo }}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDevice = () => useContext(DeviceContext);
