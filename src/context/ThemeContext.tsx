import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type Brand = 'cleaning' | 'furniture';

interface ThemeContextType {
    brand: Brand;
    setBrand: (brand: Brand) => void;
    toggleBrand: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const location = useLocation();

    const getBrandFromPath = (): Brand => {
        if (location.pathname.startsWith('/furnitures')) return 'furniture';
        return 'cleaning';
    };

    const [brand, setBrandState] = useState<Brand>(getBrandFromPath);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', brand);
    }, [brand]);

    useEffect(() => {
        const newBrand = getBrandFromPath();
        if (newBrand !== brand) {
            setBrandState(newBrand);
        }
    }, [location.pathname]);

    const setBrand = (newBrand: Brand) => {
        setBrandState(newBrand);
        const path = newBrand === 'cleaning' ? '/cleanz' : '/furnitures';
        navigate(path);
    };

    const toggleBrand = () => {
        const newBrand = brand === 'cleaning' ? 'furniture' : 'cleaning';
        setBrand(newBrand);
    };

    return (
        <ThemeContext.Provider value={{ brand, setBrand, toggleBrand }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
