import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Appearance } from 'react-native';
import { themeDark } from '../../constants/styles/themes/dark';
import { themelight } from '../../constants/styles/themes/light';
import { colorSchemeProps, Props,themeType } from './types';

// import { Container } from './styles';

const useApearance = (): Props => {
    const [currentTheme, setCurrentTheme] = useState<themeType>(Appearance.getColorScheme()||'light')
    
    const handleChangeAppearance = useCallback(
        ({colorScheme}:colorSchemeProps) => {
        if(colorScheme) {
            setCurrentTheme(colorScheme);
        }
    }, []);

    const theme = useMemo(()=>{
        if(currentTheme == 'light'){
            return themelight;
        }
        return themeDark;
    }, [currentTheme]);

    useEffect(()=>{
        Appearance.addChangeListener(handleChangeAppearance);

        return () => Appearance.addChangeListener(handleChangeAppearance);
    }, [handleChangeAppearance]);

    return {currentTheme, theme};
};

export default useApearance;