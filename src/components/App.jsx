import { Canvas } from '@react-three/fiber'
import React, { useState } from "react";
import '../styles/App.css'
import { OrbitControls, Stars } from '@react-three/drei'

//componentes

import Piso from './Piso' //import the component
import CameraControler from './CameraControler';
import { CustomizationProvider, useCustomization } from '../contexts/Customization';
import Camera from "./Camera"

//models
import Chair from './chair_model/chair';//import the model
import Pruebas from './Bridge_model/Pruebas' 
import Bell from './bell_model/bell';
import Boat from './boat_model/Boat';

//Configurator interface
import Configurator from './configurator/Configurator';//Interface
import Chair_interface from './configurator/ConfiguratorChair';
import Bell_interface from './configurator/ConfiguratorBell';
import Boat_interface from './configurator/ConfiguratorBoat';
import {ConfiAmbientlight, ConfiDirecLight, ConfiPointLight, ConfiHemisphereLight, ConfiSpotLight} from './configurator/ConfiguratorLight';

//light
import AddAmbientLight from './light/AmbientLight';
import DirectionalLight from './light/DirectionalLight.jsx';
import PointLight from './light/PointLight';
import SpotLight from './light/SpotLight';
import HemisphereLight from './light/HemisphereLight';
//Default light
import Ambient_light from './default_light/Ambient_light';
import Direccional_1 from './default_light/Direccional_1';
import Direccional_2 from './default_light/Direccional_2';
import Direccional_3 from './default_light/Direccional_3';
import DefaultPointLight from './default_light/DefaultPointLight';

let BridgeCount

/* model variables */
let dataBridge
let dataChair
let dataBell
let dataBoat

/* light variables */
let dataAmbientLight
let dataDirectionalLight
let dataPointLight
let dataHemisphereLight
let dataSpotLight

/* interface variables models */
let interBridge
let interChair
let interBell
let interBoat
/* interface variables light */
let interAmbient
let interDirectional
let interPoint
let interHemisphere
let interSpot

//functions
export const App = () => {
  /* variables to update models */
  const [shapeOnCanvas, setShapeOnCanvas] = useState([])//Bridge
  const [chairCanvas, setchairOnCanvas] = useState([])//chair
  const [bellCanvas, setbellOnCanvas] = useState([])//bell
  const [boatCanvas, setboatOnCanvas] = useState([])//boat

  /* variables to update lights */
  const [luzCanvas, setLuz] = useState([])//AmbientLight
  const [DirectionalLightCanvas, setDirectionalLight] = useState([])//DirectionalLight
  const [PointLightCanvas, setPointLight] = useState([])//PointLight
  const [HemisphereLightCanvas, setHemisphereLight] = useState([])//HemisphereLight
  const [SpotLightCanvas, setSpotLight] = useState([])//SpotLight

  /* variables to update interfaces models*/
  const [interfazCanvas, interfaz] = useState([])//interfaz Bridge
  const [interfaceChairCanvas, interfaceChair] = useState([])//interfaz chair
  const [interfaceBellCanvas, interfaceBell] = useState([])//interfaz bell
  const [interfaceBoatCanvas, interfaceBoat] = useState([])//interfaz boat
  /* variables to update interfaces light*/
  const [interAmbientLightCanvas, interAmbientLight] = useState([])//interfaz AmbientLight
  const [interDirectionalLightCanvas, interDirectionalLight] = useState([])//interfaz DirectionalLight
  const [interPointLightCanvas, interPointLight] = useState([])//interfaz PointLight
  const [interHemisphereLightCanvas, interHemisphereLight] = useState([])//interfaz HemisphereLight
  const [interSpotLightCanvas, interSpotLight] = useState([])//interfaz boat


  const addShape = (e) => {/* function to add bridges with their respective interface */
    //almacene la longitud de la shapeOnCanvas, para saber cuántos hay, también usamos esto para calcular la posición
    const shapeCount = shapeOnCanvas.length

    //accede al botón data-shape para saber qué forma estamos añadiendo
    const shape = e.target.getAttribute("data-shape")

    let name=shape+shapeCount

    BridgeCount=name

    //push un nuevo elemento de forma al estado shapeOnCanvas
    setShapeOnCanvas(/* Cargar el modelo */
      [
        ...shapeOnCanvas,
        <Pruebas
          shape={shape}
          key={shapeCount}
          name={name}
        />

      ]
    )
    interfaz(
      [
        ...interfazCanvas,
        <Configurator
          key={shapeCount}
          name={name}
        />,
        <button key={"delete"+name} className="btn" type="button" onClick={() => dellBridge(shapeCount)}>Delete</button>
      ]
    )

  }

  const chair = (e) => {/* function to add chairs with their respective interface */
    const chairCount = chairCanvas.length

    const chair = e.target.getAttribute("data-shape")

    let name=chair+chairCount

    setchairOnCanvas(
      [
        ...chairCanvas,
        <Chair
          shape={chair}
          key={chairCount}
        />

      ]
    )
    interfaceChair(
      [
        ...interfaceChairCanvas,
        <Chair_interface
          key={chairCount}
        />,
        <button key={"delete"+name} className="btn" type="button" onClick={() => dellChair(chairCount)}>Delete</button>
      ]
    )

  }

  const bell = (e) => {/* function to add bell with their respective interface */
    const bellCount = bellCanvas.length

    const bell = e.target.getAttribute("data-shape")

    let name = bell+bellCount

    setbellOnCanvas(
      [
        ...bellCanvas,
        <Bell
          shape={bell}
          key={bellCount}
        />

      ]
    )
    interfaceBell(
      [
        ...interfaceBellCanvas,
        <Bell_interface
          key={bellCount}
        />,
        <button key={"delete"+name} className="btn" type="button" onClick={() => dellBell(bellCount)}>Delete</button>
      ]
    )

  }

  const boat = (e) => {/* function to add bell with their respective interface */
    const boatCount = boatCanvas.length

    const boat = e.target.getAttribute("data-shape")

    let name = boat+boatCount

    setboatOnCanvas(
      [
        ...boatCanvas,
        <Boat
          shape={boat}
          key={boatCount}
        />

      ]
    )
    interfaceBoat(
      [
        ...interfaceBoatCanvas,
        <Boat_interface
          key={boatCount}
        />,
        <button key={"delete"+name} className="btn" type="button" onClick={() => dellBoat(boatCount)}>Delete</button>
      ]
    )

  }

  const selecLuz = React.createRef()//I create reference for the light select
  const AddLight = (e) => {

    let luz = selecLuz.current.value //I capture the kind of light

    if (luz == "AmbientLight") { //Valid which light I am selecting
      console.log("entre ambient");

      const luzCount = luzCanvas.length;

      let name = luz+luzCount

      setLuz(/* load light */
        [
          ...luzCanvas,
          <AddAmbientLight
            key={luzCount}
          />

        ]
      )

      interAmbientLight(
        [
          ...interAmbientLightCanvas,
          <ConfiAmbientlight
            key={luzCount}
          />,
          <button key={"delete"+name} className="btn" type="button" onClick={() => dellAmbientLight(luzCount)}>Delete</button>
        ]
      )

    } if (luz == "DirectionalLight") {

      const luzCount = DirectionalLightCanvas.length;

      let name = luz+luzCount

      setDirectionalLight(/* load light */
        [
          ...DirectionalLightCanvas,
          <DirectionalLight
            key={luzCount}
          />

        ]
      )

      interDirectionalLight(
        [
          ...interDirectionalLightCanvas,
          <ConfiDirecLight
            key={luzCount}
          />,
          <button key={"delete"+name} className="btn" type="button" onClick={() => dellDirectionalLight(luzCount)}>Delete</button>
  
        ]
      )

    } if (luz == "PointLight") {

      const luzCount = PointLightCanvas.length;

      let name = luz+luzCount

      setPointLight(/* load light */
        [
          ...PointLightCanvas,
          <PointLight
            key={luzCount}
          />

        ]
      )

      interPointLight(
        [
          ...interPointLightCanvas,
          <ConfiPointLight
            key={luzCount}
          />,
          <button key={"delete"+name} className="btn" type="button" onClick={() => dellPointLight(luzCount)}>Delete</button>
  
        ]
      )

    } if (luz == "HemisphereLight") {
      const luzCount = HemisphereLightCanvas.length;

      let name = luz+luzCount

      setHemisphereLight(/* load light */
        [
          ...HemisphereLightCanvas,
          <HemisphereLight
            key={luzCount}
          />

        ]
      )

      interHemisphereLight(
        [
          ...interHemisphereLightCanvas,
          <ConfiHemisphereLight
            key={luzCount}
          />,
          <button key={"delete"+name} className="btn" type="button" onClick={() => dellHemisphereLight(luzCount)}>Delete</button>
        ]
      )

    } if (luz == "SpotLight") {
      const luzCount = SpotLightCanvas.length;

      let name = luz+luzCount

      setSpotLight(/* load light */
        [
          ...SpotLightCanvas,
          <SpotLight
            key={luzCount}
          />

        ]
      )

      interSpotLight(
        [
          ...interSpotLightCanvas,
          <ConfiSpotLight
            key={luzCount}
          />,
          <button key={"delete"+name} className="btn" type="button" onClick={() => dellSpotLight(luzCount)}>Delete</button>
        ]
      )

    }

  }

  /* save the models in their respective variables */
  dataBridge = [...shapeOnCanvas]
  dataChair = [...chairCanvas]
  dataBell = [...bellCanvas]
  dataBoat = [...boatCanvas]
  /* save the light in their respective variables */
  dataAmbientLight = [...luzCanvas]
  dataDirectionalLight =[...DirectionalLightCanvas]
  dataPointLight = [...PointLightCanvas]
  dataHemisphereLight = [...HemisphereLightCanvas]
  dataSpotLight = [...SpotLightCanvas]

  /* save the interfaces models */
  interBridge = [...interfazCanvas]
  interChair = [...interfaceChairCanvas]
  interBell = [...interfaceBellCanvas]
  interBoat = [...interfaceBoatCanvas]
  /* save the interface light */
  interAmbient = [...interAmbientLightCanvas]
  interDirectional = [...interDirectionalLightCanvas]
  interPoint = [...interPointLightCanvas]
  interHemisphere = [...interHemisphereLightCanvas]
  interSpot = [...interSpotLightCanvas]

  /* functions to remove models start */
  /* Delete Bridge*/
  const dellBridge = (e) => {
    let dell = dataBridge.filter((item) => item.key != e)//filter the model to delete
    dataBridge = dell

    let dellIn = interBridge.filter((item) => item.key != e)//filter the model to delete
    interBridge = dellIn.filter((item) => item.key != "deleteBridge"+e)

    setShapeOnCanvas(dataBridge)//update the models on screen
    interfaz(interBridge)//update the models on screen
  }
  /* Delete Chair */
  const dellChair = (e) => {
    let dell = dataChair.filter((item) => item.key != e)//filter the model to delete
    dataChair = dell

    let dellIn = interChair.filter((item) => item.key != e)//filter the model to delete
    interChair = dellIn.filter((item) => item.key != "deleteChair"+e)

    setchairOnCanvas(dataChair)//update the models on screen
    interfaceChair(interChair)//update the models on screen
  }
  /* Delete Bell */
  const dellBell = (e) => {
    let dell = dataBell.filter((item) => item.key != e)//filter the model to delete
    dataBell = dell

    let dellIn = interBell.filter((item) => item.key != e)//filter the model to delete
    interBell = dellIn.filter((item) => item.key != "deleteBell"+e)

    setbellOnCanvas(dataBell)//update the models on screen
    interfaceBell(interBell)//update the models on screen
  }
  /* Delete Boat */
  const dellBoat = (e) => {
    let dell = dataBoat.filter((item) => item.key != e)//filter the model to delete
    dataBoat = dell

    let dellIn = interBoat.filter((item) => item.key != e)//filter the model to delete
    interBoat = dellIn.filter((item) => item.key != "deleteBoat"+e)

    setboatOnCanvas(dataBoat)//update the models on screen
    interfaceBoat(interBoat)//update the models on screen
  }
  /* functions to remove models end */

  /* functions to remove light start */
  const dellAmbientLight = (e) => {
    let dell = dataAmbientLight.filter((item) => item.key != e)//filter the model to delete
    dataAmbientLight = dell

    let dellIn = interAmbient.filter((item) => item.key != e)//filter the model to delete
    interAmbient = dellIn.filter((item) => item.key != "deleteAmbientLight"+e)

    setLuz(dataAmbientLight)//update the models on screen
    interAmbientLight(interAmbient)//update the models on screen
  }

  const dellDirectionalLight = (e) => {
    console.log(e);
    let dell = dataDirectionalLight.filter((item) => item.key != e)//filter the model to delete
    dataDirectionalLight = dell

    let dellIn = interDirectional.filter((item) => item.key != e)//filter the model to delete
    interDirectional = dellIn.filter((item) => item.key != "deleteDirectionalLight"+e)

    setDirectionalLight(dataDirectionalLight)//update the models on screen
    interDirectionalLight(interDirectional)//update the models on screen
  }

  const dellPointLight = (e) => {
    
    let dell = dataPointLight.filter((item) => item.key != e)//filter the model to delete
    dataPointLight = dell

    let dellIn = interPoint.filter((item) => item.key != e)//filter the model to delete
    interPoint = dellIn.filter((item) => item.key != "deletePointLight"+e)

    setPointLight(dataPointLight)//update the models on screen
    interPointLight(interPoint)//update the models on screen
  }

  const dellHemisphereLight = (e) => {
    
    let dell = dataHemisphereLight.filter((item) => item.key != e)//filter the model to delete
    dataHemisphereLight = dell

    let dellIn = interHemisphere.filter((item) => item.key != e)//filter the model to delete
    interHemisphere = dellIn.filter((item) => item.key != "deleteHemisphereLight"+e)

    setSpotLight(dataHemisphereLight)//update the models on screen
    interHemisphereLight(interHemisphere)//update the models on screen
  }

  const dellSpotLight = (e) => {
    
    let dell = dataSpotLight.filter((item) => item.key != e)//filter the model to delete
    dataSpotLight = dell

    let dellIn = interSpot.filter((item) => item.key != e)//filter the model to delete
    interSpot = dellIn.filter((item) => item.key != "deleteSpotLight"+e)

    setSpotLight(dataSpotLight)//update the models on screen
    interSpotLight(interSpot)//update the models on screen
  }

  /* functions to remove light end */

  return (
    <>
      <div style={{backgroundColor:'#4A4A4A' }}>
        {/* Bridge */}
        <button className='btn btn-primary' onClick={addShape} data-shape={"Bridge"} style={{marginRight:'0.5%'}}>Load Bridge</button>{/* Agrego un boton para llamas a la funcion que carga el modelo/objeto */}
        {/* Chair */}
        <button className='btn btn-primary' onClick={chair} data-shape={"Chair"} style={{marginRight:'0.5%'}}>Load Chair</button>
        {/* Bell */}
        <button className='btn btn-primary' onClick={bell} data-shape={"Bell"} style={{marginRight:'0.5%'}}>Load Bell</button>
        {/* boat */}
        <button className='btn btn-primary' onClick={boat} data-shape={"Boat"} style={{marginRight:'0.5%'}}>Load boat</button>
        <select
          className='btn btn-primary form-select-font-size:'
          ref={selecLuz}
          name="select-add-light"
          onChange={AddLight}
        >
          <option selected>Add Lights</option>
          <option  value="AmbientLight">AmbientLight</option>
          <option  value="DirectionalLight">DirectionalLight</option>
          <option  value="PointLight">PointLight</option>
          <option  value="SpotLight">SpotLight</option>
          <option  value="HemisphereLight">HemisphereLight</option>
        </select>
        {/*  <button onClick={AddLight()}>Add Light</button> {/* CAMBIAR PROPIEDADES PARA AÑADIR LUCES, POR AHORA ES PROVISIONAL */}
      </div>
      <CustomizationProvider>
        {/* Interface */}
        <div style={{ width: "20vw", height: "100vw", float: 'right', backgroundColor:'#4A4A4A' }}>
          {interBridge}
          {interChair}
          {interBell}
          {interBoat}
          {interAmbient}
          {interDirectional}
          {interPoint}
          {interHemisphere}
          {interSpot}
        </div>
        {/* Scene */}
        <div style={{ width: "80vw", height: "100vw", float: 'left', }}>
          <Canvas>{/* 3d environment */}
            {/* <color attach={"background"} args={["#2933A6"]} /> */}{/* Background color */}
            {/* <fog attach={"fog"} args={['#2933A6', 10, 20]} /> */}{/* fog */}
            {/* <OrbitControls makeDefault /> */} {/* MOVED TO CameraController Temporarily */}
            {/* Default light (start) */}
            {/* <Ambient_light />
            <Direccional_1 />
            <Direccional_2 />
            <Direccional_3 />
            <DefaultPointLight /> */}
            {/* Default light (end) */}
            <Camera/>
            <CameraControler /> {/* Create the Camera Controller */}
            <Piso />{/* I add in the scene the component of the floor */}
            {/* Models */}
            {dataBridge}
            {dataChair}
            {dataBell}
            {dataBoat}
            {dataAmbientLight}
            {dataDirectionalLight}
            {dataPointLight}
            {dataHemisphereLight}
            {dataSpotLight}
          </Canvas>
        </div>
      </CustomizationProvider>
    </>
  )
}

export const CountBridge = () =>{
  return (BridgeCount)
}
