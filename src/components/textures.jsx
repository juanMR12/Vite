import * as THREE from "three";
import { useTexture } from "@react-three/drei";

const Bricks1 = () => {
    const bridgeTexture1 = useTexture({
        map: 'src/models/bridge2/texture1/Brick_wall_008_COLOR.jpg',
        //displacementMap: 'src/models/bridge2/texture1/Brick_wall_008_DISP.png',
        normalMap: 'src/models/bridge2/texture1/Brick_wall_008_NORM.jpg',
        roughnessMap: 'src/models/bridge2/texture1/Brick_wall_008_SPEC.jpg',
        aoMap: 'src/models/bridge2/texture1/Brick_wall_008_OCC.jpg',
    })

    //Para ajustar la textura (altera los valores al gusto)
    bridgeTexture1.map.repeat.set(6,6);
    //bridgeTexture1.displacementMap.repeat.set(6,6);
    bridgeTexture1.normalMap.repeat.set(6,6);
    bridgeTexture1.roughnessMap.repeat.set(6,6);
    bridgeTexture1.aoMap.repeat.set(6,6);

    bridgeTexture1.map.wrapS = 
    bridgeTexture1.map.wrapT = 
    bridgeTexture1.normalMap.wrapS = 
    bridgeTexture1.normalMap.wrapT = 
    bridgeTexture1.roughnessMap.wrapS = 
    bridgeTexture1.roughnessMap.wrapT = 
    bridgeTexture1.aoMap.wrapS = 
    bridgeTexture1.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(bridgeTexture1)

}

const Bricks2 = () => {
    const bridgeTexture2 = useTexture({
        map: 'src/models/bridge2/texture2/Brick_Wall_019_basecolor.jpg',
        //displacementMap: 'src/models/bridge2/texture1/Brick_wall_008_DISP.png',
        normalMap: 'src/models/bridge2/texture2/Brick_Wall_019_normal.jpg',
        roughnessMap: 'src/models/bridge2/texture2/Brick_Wall_019_roughness.jpg',
        aoMap: 'src/models/bridge2/texture2/Brick_Wall_019_ambientOcclusion.jpg',
    })

    //Para ajustar la textura (altera los valores al gusto)
    bridgeTexture2.map.repeat.set(6,6);
    //bridgeTexture2.displacementMap.repeat.set(6,6);
    bridgeTexture2.normalMap.repeat.set(6,6);
    bridgeTexture2.roughnessMap.repeat.set(6,6);
    bridgeTexture2.aoMap.repeat.set(6,6);

    bridgeTexture2.map.wrapS = 
    bridgeTexture2.map.wrapT = 
    bridgeTexture2.normalMap.wrapS = 
    bridgeTexture2.normalMap.wrapT = 
    bridgeTexture2.roughnessMap.wrapS = 
    bridgeTexture2.roughnessMap.wrapT = 
    bridgeTexture2.aoMap.wrapS = 
    bridgeTexture2.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(bridgeTexture2)

}

const Metal = () => {
    const metal = useTexture({
        map: 'src/textures/Psico_01.jpg',
        //displacementMap: 'src/models/bridge2/texture1/Brick_wall_008_DISP.png',
        normalMap: 'src/textures/Psico_01.jpg',
        roughnessMap: 'src/textures/Psico_01.jpg',
        aoMap: 'src/textures/Psico_01.jpg',
    })

    //To adjust the texture (alter the values to taste)
    metal.map.repeat.set(50,50);
    //metal.displacementMap.repeat.set(50,50);
    metal.normalMap.repeat.set(50,50);
    metal.roughnessMap.repeat.set(50,50);
    metal.aoMap.repeat.set(50,50);

    metal.map.wrapS = 
    metal.map.wrapT = 
    metal.normalMap.wrapS = 
    metal.normalMap.wrapT = 
    metal.roughnessMap.wrapS = 
    metal.roughnessMap.wrapT = 
    metal.aoMap.wrapS = 
    metal.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(metal)

}

const Aluminum = () => {
    const aluminum = useTexture({
        map: 'src/textures/Psico_hor_01.jpg',
        //displacementMap: 'src/textures/Psico_hor_01.jpg',
        normalMap: 'src/textures/Psico_hor_01.jpg',
        roughnessMap: 'src/textures/Psico_hor_01.jpg',
        aoMap: 'src/textures/Psico_hor_01.jpg',
    })

    //To adjust the texture (alter the values to taste)
    aluminum.map.repeat.set(40,40);
    //aluminum.displacementMap.repeat.set(6,6);
    aluminum.normalMap.repeat.set(40,40);
    aluminum.roughnessMap.repeat.set(40,40);
    aluminum.aoMap.repeat.set(40,40);

    aluminum.map.wrapS = 
    aluminum.map.wrapT = 
    aluminum.normalMap.wrapS = 
    aluminum.normalMap.wrapT = 
    aluminum.roughnessMap.wrapS = 
    aluminum.roughnessMap.wrapT = 
    aluminum.aoMap.wrapS = 
    aluminum.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(aluminum)

}

const Psico1 = () => {
    const aluminum = useTexture({
        map: 'src/textures/Psico_43.jpg',
        //displacementMap: 'src/textures/Psico_43.jpg',
        normalMap: 'src/textures/Psico_43.jpg',
        roughnessMap: 'src/textures/Psico_43.jpg',
        aoMap: 'src/textures/Psico_43.jpg',
    })

    //To adjust the texture (alter the values to taste)
    aluminum.map.repeat.set(10,10);
    //aluminum.displacementMap.repeat.set(6,6);
    aluminum.normalMap.repeat.set(10,10);
    aluminum.roughnessMap.repeat.set(10,10);
    aluminum.aoMap.repeat.set(10,10);

    aluminum.map.wrapS = 
    aluminum.map.wrapT = 
    aluminum.normalMap.wrapS = 
    aluminum.normalMap.wrapT = 
    aluminum.roughnessMap.wrapS = 
    aluminum.roughnessMap.wrapT = 
    aluminum.aoMap.wrapS = 
    aluminum.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(aluminum)

}

const Psico2 = () => {
    const aluminum = useTexture({
        map: 'src/textures/Psico_hor_20.jpg',
        //displacementMap: 'src/textures/Psico_hor_20.jpg',
        normalMap: 'src/textures/Psico_hor_20.jpg',
        roughnessMap: 'src/textures/Psico_hor_20.jpg',
        aoMap: 'src/textures/Psico_hor_20.jpg',
    })

    //To adjust the texture (alter the values to taste)
    aluminum.map.repeat.set(5,5);
    //aluminum.displacementMap.repeat.set(6,6);
    aluminum.normalMap.repeat.set(5,5);
    aluminum.roughnessMap.repeat.set(5,5);
    aluminum.aoMap.repeat.set(5,5);

    aluminum.map.wrapS = 
    aluminum.map.wrapT = 
    aluminum.normalMap.wrapS = 
    aluminum.normalMap.wrapT = 
    aluminum.roughnessMap.wrapS = 
    aluminum.roughnessMap.wrapT = 
    aluminum.aoMap.wrapS = 
    aluminum.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(aluminum)

}

const Psico3 = () => {
    const aluminum = useTexture({
        map: 'src/textures/Psico_02.jpg',
        //displacementMap: 'src/textures/Psico_02.jpg',
        normalMap: 'src/textures/Psico_02.jpg',
        roughnessMap: 'src/textures/Psico_02.jpg',
        aoMap: 'src/textures/Psico_02.jpg',
    })

    //To adjust the texture (alter the values to taste)
    aluminum.map.repeat.set(5,5);
    //aluminum.displacementMap.repeat.set(6,6);
    aluminum.normalMap.repeat.set(5,5);
    aluminum.roughnessMap.repeat.set(5,5);
    aluminum.aoMap.repeat.set(5,5);

    aluminum.map.wrapS = 
    aluminum.map.wrapT = 
    aluminum.normalMap.wrapS = 
    aluminum.normalMap.wrapT = 
    aluminum.roughnessMap.wrapS = 
    aluminum.roughnessMap.wrapT = 
    aluminum.aoMap.wrapS = 
    aluminum.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(aluminum)

}

const Psico4 = () => {
    const aluminum = useTexture({
        map: 'src/textures/Psico_23.jpg',
        //displacementMap: 'src/textures/Psico_23.jpg',
        normalMap: 'src/textures/Psico_23.jpg',
        roughnessMap: 'src/textures/Psico_23.jpg',
        aoMap: 'src/textures/Psico_23.jpg',
    })

    //To adjust the texture (alter the values to taste)
    aluminum.map.repeat.set(5,5);
    //aluminum.displacementMap.repeat.set(6,6);
    aluminum.normalMap.repeat.set(5,5);
    aluminum.roughnessMap.repeat.set(5,5);
    aluminum.aoMap.repeat.set(5,5);

    aluminum.map.wrapS = 
    aluminum.map.wrapT = 
    aluminum.normalMap.wrapS = 
    aluminum.normalMap.wrapT = 
    aluminum.roughnessMap.wrapS = 
    aluminum.roughnessMap.wrapT = 
    aluminum.aoMap.wrapS = 
    aluminum.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(aluminum)

}

const Psico5 = () => {
    const aluminum = useTexture({
        map: 'src/textures/Psico_44.jpg',
        //displacementMap: 'src/textures/Psico_44.jpg',
        normalMap: 'src/textures/Psico_44.jpg',
        roughnessMap: 'src/textures/Psico_44.jpg',
        aoMap: 'src/textures/Psico_44.jpg',
    })

    //To adjust the texture (alter the values to taste)
    aluminum.map.repeat.set(5,5);
    //aluminum.displacementMap.repeat.set(6,6);
    aluminum.normalMap.repeat.set(5,5);
    aluminum.roughnessMap.repeat.set(5,5);
    aluminum.aoMap.repeat.set(5,5);

    aluminum.map.wrapS = 
    aluminum.map.wrapT = 
    aluminum.normalMap.wrapS = 
    aluminum.normalMap.wrapT = 
    aluminum.roughnessMap.wrapS = 
    aluminum.roughnessMap.wrapT = 
    aluminum.aoMap.wrapS = 
    aluminum.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(aluminum)

}

const Psico6 = () => {
    const aluminum = useTexture({
        map: 'src/textures/Psico_60.jpg',
        //displacementMap: 'src/textures/Psico_60.jpg',
        normalMap: 'src/textures/Psico_60.jpg',
        roughnessMap: 'src/textures/Psico_60.jpg',
        aoMap: 'src/textures/Psico_60.jpg',
    })

    //To adjust the texture (alter the values to taste)
    aluminum.map.repeat.set(5,5);
    //aluminum.displacementMap.repeat.set(6,6);
    aluminum.normalMap.repeat.set(5,5);
    aluminum.roughnessMap.repeat.set(5,5);
    aluminum.aoMap.repeat.set(5,5);

    aluminum.map.wrapS = 
    aluminum.map.wrapT = 
    aluminum.normalMap.wrapS = 
    aluminum.normalMap.wrapT = 
    aluminum.roughnessMap.wrapS = 
    aluminum.roughnessMap.wrapT = 
    aluminum.aoMap.wrapS = 
    aluminum.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(aluminum)

}

const Psico7 = () => {
    const aluminum = useTexture({
        map: 'src/textures/Psico_30.jpg',
        //displacementMap: 'src/textures/Psico_30.jpg',
        normalMap: 'src/textures/Psico_30.jpg',
        roughnessMap: 'src/textures/Psico_30.jpg',
        aoMap: 'src/textures/Psico_30.jpg',
    })

    //To adjust the texture (alter the values to taste)
    aluminum.map.repeat.set(5,5);
    //aluminum.displacementMap.repeat.set(6,6);
    aluminum.normalMap.repeat.set(5,5);
    aluminum.roughnessMap.repeat.set(5,5);
    aluminum.aoMap.repeat.set(5,5);

    aluminum.map.wrapS = 
    aluminum.map.wrapT = 
    aluminum.normalMap.wrapS = 
    aluminum.normalMap.wrapT = 
    aluminum.roughnessMap.wrapS = 
    aluminum.roughnessMap.wrapT = 
    aluminum.aoMap.wrapS = 
    aluminum.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(aluminum)

}

const Psico8 = () => {
    const aluminum = useTexture({
        map: 'src/textures/Psico_53.jpg',
        //displacementMap: 'src/textures/Psico_30.jpg',
        normalMap: 'src/textures/Psico_53.jpg',
        roughnessMap: 'src/textures/Psico_53.jpg',
        aoMap: 'src/textures/Psico_53.jpg',
    })

    //To adjust the texture (alter the values to taste)
    aluminum.map.repeat.set(5,5);
    //aluminum.displacementMap.repeat.set(6,6);
    aluminum.normalMap.repeat.set(5,5);
    aluminum.roughnessMap.repeat.set(5,5);
    aluminum.aoMap.repeat.set(5,5);

    aluminum.map.wrapS = 
    aluminum.map.wrapT = 
    aluminum.normalMap.wrapS = 
    aluminum.normalMap.wrapT = 
    aluminum.roughnessMap.wrapS = 
    aluminum.roughnessMap.wrapT = 
    aluminum.aoMap.wrapS = 
    aluminum.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(aluminum)

}

const Psico9 = () => {
    const aluminum = useTexture({
        map: 'src/textures/Psico_51.jpg',
        //displacementMap: 'src/textures/Psico_30.jpg',
        normalMap: 'src/textures/Psico_51.jpg',
        roughnessMap: 'src/textures/Psico_51.jpg',
        aoMap: 'src/textures/Psico_51.jpg',
    })

    //To adjust the texture (alter the values to taste)
    aluminum.map.repeat.set(5,5);
    //aluminum.displacementMap.repeat.set(6,6);
    aluminum.normalMap.repeat.set(5,5);
    aluminum.roughnessMap.repeat.set(5,5);
    aluminum.aoMap.repeat.set(5,5);

    aluminum.map.wrapS = 
    aluminum.map.wrapT = 
    aluminum.normalMap.wrapS = 
    aluminum.normalMap.wrapT = 
    aluminum.roughnessMap.wrapS = 
    aluminum.roughnessMap.wrapT = 
    aluminum.aoMap.wrapS = 
    aluminum.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(aluminum)

}

const Psico10 = () => {
    const aluminum = useTexture({
        map: 'src/textures/Psico_32.jpg',
        //displacementMap: 'src/textures/Psico_30.jpg',
        normalMap: 'src/textures/Psico_32.jpg',
        roughnessMap: 'src/textures/Psico_32.jpg',
        aoMap: 'src/textures/Psico_32.jpg',
    })

    //To adjust the texture (alter the values to taste)
    aluminum.map.repeat.set(5,5);
    //aluminum.displacementMap.repeat.set(6,6);
    aluminum.normalMap.repeat.set(5,5);
    aluminum.roughnessMap.repeat.set(5,5);
    aluminum.aoMap.repeat.set(5,5);

    aluminum.map.wrapS = 
    aluminum.map.wrapT = 
    aluminum.normalMap.wrapS = 
    aluminum.normalMap.wrapT = 
    aluminum.roughnessMap.wrapS = 
    aluminum.roughnessMap.wrapT = 
    aluminum.aoMap.wrapS = 
    aluminum.aoMap.wrapT = 
    THREE.RepeatWrapping;

    return(aluminum)

}

export {Bricks1, Bricks2, Metal, Aluminum, Psico1, Psico2, Psico3, Psico4, Psico5, Psico6, Psico7, Psico8, Psico9, Psico10}