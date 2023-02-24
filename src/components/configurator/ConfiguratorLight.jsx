import { useCustomization } from "../../contexts/Customization";
import React from "react";

const check = React.createRef()

const ConfiAmbientlight = () => {
    const { setAmbientLight } = useCustomization();

    return (
        <div className="configuratorChair" data-shape={"Ambientlight"}>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAmbient" aria-expanded="false" aria-controls="collapseAmbient">
                Ambient light
            </button>
            <div className="collapse" id="collapseAmbient">
                <div className="configuratorChair__section">
                    <div className="configuratorChair__section__title">
                        on/off
                    </div>
                    <div className="configuratorChair__section__values">
                        <div className="item__label">
                            <input ref={check} className="form-check-input" type="checkbox" id="flexCheckDefault" onClick={() => setAmbientLight(check.current.checked)} defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const check2 = React.createRef()
const ConfiDirecLight = () => {
    const { setDirectionalLight } = useCustomization();

    return (
        <div className="configuratorChair" data-shape={"DirecLight"}>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDirectional" aria-expanded="false" aria-controls="collapseDirectional">
                Directional Light
            </button>
            <div className="collapse" id="collapseDirectional">
                <div className="configuratorChair__section">
                    <div className="configuratorChair__section__title">
                        on/off
                    </div>
                    <div className="configuratorChair__section__values">
                        <div className="item__label">
                            <input ref={check2} className="form-check-input" type="checkbox" id="flexCheckDefault" onClick={() => setDirectionalLight(check2.current.checked)} defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const check3 = React.createRef()
const ConfiPointLight = () => {
    const { setPointLight } = useCustomization();

    return (
        <div className="configuratorChair" data-shape={"PointLight"}>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePoint" aria-expanded="false" aria-controls="collapsePoint">
                Point Light
            </button>
            <div className="collapse" id="collapsePoint">
                <div className="configuratorChair__section">
                    <div className="configuratorChair__section__title">
                        on/off
                    </div>
                    <div className="configuratorChair__section__values">
                        <div className="item__label">
                            <input ref={check3} className="form-check-input" type="checkbox" id="flexCheckDefault" onClick={() => setPointLight(check3.current.checked)} defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const check4 = React.createRef()
const ConfiHemisphereLight = () => {
    const { setHemisphereLight } = useCustomization();

    return (
        <div className="configuratorChair" data-shape={"HemisphereLight"}>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHemisphere" aria-expanded="false" aria-controls="collapseHemisphere">
                Hemisphere Light
            </button>
            <div className="collapse" id="collapseHemisphere">
                <div className="configuratorChair__section">
                    <div className="configuratorChair__section__title">
                        on/off
                    </div>
                    <div className="configuratorChair__section__values">
                        <div className="item__label">
                            <input ref={check4} className="form-check-input" type="checkbox" id="flexCheckDefault" onClick={() => setHemisphereLight(check4.current.checked)} defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const check5 = React.createRef()
const ConfiSpotLight = () => {
    const { setSpotLight } = useCustomization();

    return (
        <div className="configuratorChair" data-shape={"SpotLigh"}>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSpot" aria-expanded="false" aria-controls="collapseSpot">
                Spot Light
            </button>
            <div className="collapse" id="collapseSpot">
                <div className="configuratorChair__section">
                    <div className="configuratorChair__section__title">
                        on/off
                    </div>
                    <div className="configuratorChair__section__values">
                        <div className="item__label">
                            <input ref={check5} className="form-check-input" type="checkbox" id="flexCheckDefault" onClick={() => setSpotLight(check5.current.checked)} defaultChecked />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {ConfiAmbientlight, ConfiDirecLight, ConfiPointLight, ConfiHemisphereLight, ConfiSpotLight}