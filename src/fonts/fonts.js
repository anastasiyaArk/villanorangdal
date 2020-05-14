import { createGlobalStyle } from 'styled-components';

import NeutraTextLightalt from './neutratext-lightalt.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Neutra Light';
        src: local('Neutra Light'), local('NeutraLight'),
        url(${NeutraTextLightalt}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;