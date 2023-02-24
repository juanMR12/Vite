import { createContext, useContext, useState } from "react";
const CustomizationContext = createContext({});//bridge context

/* bridge colors */
export const bridgeColors = [
    {
        color:"#FFFFFF",
        name:"White"
    },
    {
        color:"#808080",
        name:"Grey"
    },
    {
        color:"#000000",
        name:"Black"
    }
]

/* chair colors */
export const chairColors = [
    {
        color:"#FFFFFF",
        name:"White"
    },
    {
        color:"#808080",
        name:"Grey"
    },
    {
        color:"#000000",
        name:"Black"
    }
]

/* bell colors */
export const bellColors = [
    {
        color:"#FFFFFF",
        name:"White"
    },
    {
        color:"#808080",
        name:"Grey"
    },
    {
        color:"#000000",
        name:"Black"
    }
]

/* boat colors */
export const boatColors = [
    {
        color:"#FFFFFF",
        name:"White"
    },
    {
        color:"#808080",
        name:"Grey"
    },
    {
        color:"#000000",
        name:"Black"
    }
]

export const CustomizationProvider = (props) => {
    /* texture change start */
    const [bridgeTexture, setBridgeTexture] = useState('original');//bridge texture
    const [chairTexture, setChairTexture] = useState('original');//chair texture
    const [BellTexture, setBellTexture] = useState('original');//Bell texture
    const [BoutTexture, setBoutTexture] = useState('original');//Bout texture
    /* texture change end */

    /* material change start */
    const [bridgeMaterial, setBridgeMaterial] = useState('standard');//bridge Material
    const [chairMaterial, setChairMaterial] = useState('standard');//chair Material
    const [BellMaterial, setBellMaterial] = useState('standard');//Bell Material
    const [BoutMaterial, setBoutMaterial] = useState('standard');//Bout Material
    /* material change end */

    /* bridge texture stard */
    const [bridgeColor, setBridgeColor] = useState(bridgeColors[0]);//bridge color change
    const [chairColor, setChairColor] = useState(chairColors[0]);//chair color change
    const [bellColor, setbellColor] = useState(bellColors[0]);//bell color change
    const [boatColor, setboatColor] = useState(boatColors[0]);//boat color change
    /* bridge texture end */

    /* Light change (start) */
    const [switchAmbientLight, setAmbientLight] = useState(true);
    const [switchDirectionalLight, setDirectionalLight] = useState(true);
    const [switchPointLight, setPointLight] = useState(true);
    const [switchHemisphereLight, setHemisphereLight] = useState(true);
    const [switchSpotLight, setSpotLight] = useState(true);
    /* Light change (end) */

    return (
        <CustomizationContext.Provider 
            value={{
                bridgeTexture, setBridgeTexture, /* bridge texture */
                chairTexture, setChairTexture, /* chair texture */
                BellTexture, setBellTexture, /* Bell texture */
                BoutTexture, setBoutTexture, /* Bout texture */
                switchAmbientLight, setAmbientLight, /* AmbientLight */
                switchDirectionalLight, setDirectionalLight, /* DirectionalLight */
                switchPointLight, setPointLight, /* PointLight */
                switchHemisphereLight, setHemisphereLight, /* HemisphereLight */
                switchSpotLight, setSpotLight, /* SpotLight */
                bridgeColor, setBridgeColor, /* bridge color */
                chairColor, setChairColor, /* chair color */
                bellColor, setbellColor, /* bell color */
                boatColor, setboatColor, /* boat color */
                bridgeMaterial, setBridgeMaterial, /* bridge Material */
                chairMaterial, setChairMaterial, /* chair Material */
                BellMaterial, setBellMaterial, /* bell Material */
                BoutMaterial, setBoutMaterial /* boat Material */
            }}
        >
            {props.children}
        </CustomizationContext.Provider>
    )
}

export const useCustomization = () =>{
    const context = useContext(CustomizationContext);
    return context;
}