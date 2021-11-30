import React, { useContext } from 'react';
import { Button as ButtonRN} from 'react-native';
import {ThemeContext} from 'styled-components';

const Button: React.FC<{onPress: () => void}> = ({onPress}) => {
    const themeContext = useContext(ThemeContext);
    return( <ButtonRN 
        color={themeContext.colors.secondary}
        title='charge thema' 
        onPress={onPress} 
        />
    );
};

export default Button;