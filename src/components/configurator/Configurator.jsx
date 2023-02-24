import React from "react";
import { bridgeColors, useCustomization } from "../../contexts/Customization";
import { CountBridge } from "../App";

/* bridge interface */
const slider = React.createRef() /* slider ref */
const material = React.createRef() /* material ref */
const Configurator = () => {
    const { bridgeTexture, setBridgeTexture, bridgeColor, setBridgeColor, setBridgeMaterial } = useCustomization();
    
    let count=CountBridge()
    
    return (
        <div className="configurator" data-shape={count}>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={"#"+count} aria-expanded="false" aria-controls={count}>
                Bridge
            </button>
            <div className="collapse" id={count}>
                <div className="configurator__section">
                    <div className="configurator__section__title">
                        Material
                    </div>
                    <div className="configurator__section__values">
                        <select ref={material} onChange={() => setBridgeMaterial(material.current.value)} className="form-select" aria-label="Default select example" style={{width:'150px'}}>
                            <option value="standard" selected>Standard</option>
                            <option value="metallic">Metallic</option>
                        </select>
                    </div>
                </div>
                -------------------------
                <div className="configurator__section">
                    <div className="configurator__section__title">
                    textures
                    </div>
                    <div className="configurator__section__values">
                        <div className={`item ${bridgeTexture === "original" ? "item--active" : ""}`} onClick={() => setBridgeTexture('original')}>
                            <div className="item__label">
                                {/* <!-- Add image inside the body of modal --> */}
                                <img id="image" src=
                                    "src/models/bridge2/texture1/Brick_wall_008_COLOR.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* original material */}
                            </div>
                        </div>
                        <div className={`item ${bridgeTexture === "ladrillos" ? "item--active" : ""}`} onClick={() => setBridgeTexture('ladrillos')}>
                            <div className="item__label">
                                <img id="image" src=
                                    "src/models/bridge2/texture2/Brick_Wall_019_basecolor.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${bridgeTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBridgeTexture('metal')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_01.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${bridgeTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBridgeTexture('aluminum')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_hor_01.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${bridgeTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBridgeTexture('psico1')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_43.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${bridgeTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBridgeTexture('psico2')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_hor_20.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${bridgeTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBridgeTexture('psico3')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_02.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${bridgeTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBridgeTexture('psico4')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_23.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${bridgeTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBridgeTexture('psico5')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_44.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${bridgeTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBridgeTexture('psico6')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_60.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${bridgeTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBridgeTexture('psico7')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_30.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${bridgeTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBridgeTexture('psico8')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_53.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${bridgeTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBridgeTexture('psico9')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_51.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${bridgeTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBridgeTexture('psico10')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_32.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                    </div>
                </div>
                -------------------------
                <div className="configurator__section">
                    <div className="configurator__section__title">
                        Base color
                    </div>
                    <div className="configurator__section__values">
                        {bridgeColors.map((item, index) => (
                            <div key={index} className={`item ${item.color === bridgeColor.color ? "item--active" : ""}`} onClick={() => setBridgeColor(item)}>
                                <div className="item__dot" style={{ backgroundColor: item.color, }} />
                                <div className="item__label">
                                    {item.name}
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
                -------------------------
                <div className="configurator__section">
                    <div className="configurator__section__values">
                        <input
                            ref={slider}
                            type="range" 
                            className="form-range" 
                            min="1" max="3" 
                            defaultValue={1} 
                            step="1" 
                            id="customRange" 
                            style={{paddingLeft:"5%", paddingRight:"40%", marginTop:"-6%"}} 
                            onChange={() => setBridgeColor(slider.current.value)} 
                        />
                    </div>
                </div>
                -------------------------
            </div>
        </div >
    )
}




export default Configurator