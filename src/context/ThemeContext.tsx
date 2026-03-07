import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type Brand = 'cleaning' | 'furniture' | 'manpower';

interface ThemeContextType {
    brand: Brand;
    setBrand: (brand: Brand) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const location = useLocation();

    const getBrandFromPath = (): Brand => {
        if (location.pathname.startsWith('/furnitures')) return 'furniture';
        if (location.pathname.startsWith('/manpower')) return 'manpower';
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
        const paths: Record<Brand, string> = {
            cleaning: '/cleanz',
            furniture: '/furnitures',
            manpower: '/manpower',
        };
        navigate(paths[newBrand]);
    };

    return (
        <ThemeContext.Provider value={{ brand, setBrand }}>
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
