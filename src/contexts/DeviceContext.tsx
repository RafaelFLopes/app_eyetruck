import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type DeviceContextType = {
    codigo: string;
    setCodigo: (value: string) => void;
    limparCodigo: () => void;
};

const DeviceContext = createContext<DeviceContextType>({
    codigo: "",
    setCodigo: () => {},
    limparCodigo: () => {},
});

export const DeviceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [codigo, setCodigoState] = useState("");

    useEffect(() => {
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

    const limparCodigo = async () => {
        setCodigoState("");
        await AsyncStorage.removeItem("@codigo_dispositivo");
    };

    return (
        <DeviceContext.Provider value={{ codigo, setCodigo, limparCodigo }}>
            {children}
        </DeviceContext.Provider>
    );
};

export const useDevice = () => useContext(DeviceContext);
