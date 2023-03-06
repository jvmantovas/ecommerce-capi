import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }  
    body {
        margin: 0;
        padding: 0;
        touch-action: manipulation;
    }

    @font-face {
    font-family: 'towerfont';
    src: url('//cdn.shopify.com/s/files/1/2976/0132/t/40/assets/Tower.eot?v=1389392086963714651669103801');
    src: url('//cdn.shopify.com/s/files/1/2976/0132/t/40/assets/Tower.otf??%23iefix&v=71951432964439362751669103801') format('embedded-opentype'),
    url('//cdn.shopify.com/s/files/1/2976/0132/t/40/assets/Tower.woff?v=167991780538931424131669103801') format('woff'),
    url('//cdn.shopify.com/s/files/1/2976/0132/t/40/assets/Tower.svg?v=93865916075647077321669103801') format('svg'),
    url('//cdn.shopify.com/s/files/1/2976/0132/t/40/assets/Tower.ttf?v=150127659126137160311669103801') format('truetype');
    font-weight: normal;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    }

    @font-face {font-family: "HarmoniaSansW01-Regular"; src: url("//db.onlinewebfonts.com/t/0dd7edde115ef38e7def4b16e93b5884.eot"); src: url("//db.onlinewebfonts.com/t/0dd7edde115ef38e7def4b16e93b5884.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/0dd7edde115ef38e7def4b16e93b5884.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/0dd7edde115ef38e7def4b16e93b5884.woff") format("woff"), url("//db.onlinewebfonts.com/t/0dd7edde115ef38e7def4b16e93b5884.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/0dd7edde115ef38e7def4b16e93b5884.svg#HarmoniaSansW01-Regular") format("svg"); }

    @font-face {font-family: "HarmoniaSansW01-Semibold"; src: url("//db.onlinewebfonts.com/t/56bd6cd7c8d4b467838b5b2971fd6ee5.eot"); src: url("//db.onlinewebfonts.com/t/56bd6cd7c8d4b467838b5b2971fd6ee5.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/56bd6cd7c8d4b467838b5b2971fd6ee5.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/56bd6cd7c8d4b467838b5b2971fd6ee5.woff") format("woff"), url("//db.onlinewebfonts.com/t/56bd6cd7c8d4b467838b5b2971fd6ee5.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/56bd6cd7c8d4b467838b5b2971fd6ee5.svg#HarmoniaSansW01-Semibold") format("svg"); }

    @font-face {font-family: "HarmoniaSansW01-Bold"; src: url("//db.onlinewebfonts.com/t/99f44be299d4608af6fbe99aa38ce446.eot"); src: url("//db.onlinewebfonts.com/t/99f44be299d4608af6fbe99aa38ce446.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/99f44be299d4608af6fbe99aa38ce446.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/99f44be299d4608af6fbe99aa38ce446.woff") format("woff"), url("//db.onlinewebfonts.com/t/99f44be299d4608af6fbe99aa38ce446.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/99f44be299d4608af6fbe99aa38ce446.svg#HarmoniaSansW01-Bold") format("svg"); }

    @font-face {font-family: "HarmoniaSansMonoW01"; src: url("//db.onlinewebfonts.com/t/50dad81c845b2ebeb52e34e5497736d1.eot"); src: url("//db.onlinewebfonts.com/t/50dad81c845b2ebeb52e34e5497736d1.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/50dad81c845b2ebeb52e34e5497736d1.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/50dad81c845b2ebeb52e34e5497736d1.woff") format("woff"), url("//db.onlinewebfonts.com/t/50dad81c845b2ebeb52e34e5497736d1.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/50dad81c845b2ebeb52e34e5497736d1.svg#HarmoniaSansMonoW01-") format("svg"); }

    @font-face {font-family: "HarmoniaSansMonoW01-Bold"; src: url("//db.onlinewebfonts.com/t/c74330a6dd30a3d8efa0ed361cf6f98f.eot"); src: url("//db.onlinewebfonts.com/t/c74330a6dd30a3d8efa0ed361cf6f98f.eot?#iefix") format("embedded-opentype"), url("//db.onlinewebfonts.com/t/c74330a6dd30a3d8efa0ed361cf6f98f.woff2") format("woff2"), url("//db.onlinewebfonts.com/t/c74330a6dd30a3d8efa0ed361cf6f98f.woff") format("woff"), url("//db.onlinewebfonts.com/t/c74330a6dd30a3d8efa0ed361cf6f98f.ttf") format("truetype"), url("//db.onlinewebfonts.com/t/c74330a6dd30a3d8efa0ed361cf6f98f.svg#HarmoniaSansMonoW01-Bold") format("svg"); }
`;

export default GlobalStyle;
