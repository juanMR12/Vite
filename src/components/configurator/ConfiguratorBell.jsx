import React from "react";
import { bellColors, useCustomization } from "../../contexts/Customization";

const slider = React.createRef() /* slider ref */
const material = React.createRef() /* material ref */
const Bell_interface = () => {
    const { BellTexture, setBellTexture, bellColor, setbellColor, setBellMaterial } = useCustomization();

    return (
        <div className="configuratorbell" data-shape={"interfaz"}>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBell" aria-expanded="false" aria-controls="collapseBell">
                Bell
            </button>
            <div className="collapse" id="collapseBell">
                <div className="configurator__section">
                    <div className="configurator__section__title">
                        Material
                    </div>
                    <div className="configurator__section__values">
                        <select ref={material} onChange={() => setBellMaterial(material.current.value)} className="form-select" aria-label="Default select example" style={{width:'150px'}}>
                            <option value="standard" selected>Standard</option>
                            <option value="metallic">Metallic</option>
                        </select>
                    </div>
                </div>
                -------------------------
                <div className="configuratorbell__section">
                    <div className="configuratorbell__section__title">
                    textures
                    </div>
                    <div className="configuratorbell__section__values">
                    <div className={`item ${BellTexture === "original" ? "item--active" : ""}`} onClick={() => setBellTexture('original')}>
                            <div className="item__label">
                                {/* <!-- Add image inside the body of modal --> */}
                                <img id="image" src=
                                    "src/models/bridge2/texture1/Brick_wall_008_COLOR.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* original material */}
                            </div>
                        </div>
                        <div className={`item ${BellTexture === "ladrillos" ? "item--active" : ""}`} onClick={() => setBellTexture('ladrillos')}>
                            <div className="item__label">
                                <img id="image" src=
                                    "src/models/bridge2/texture2/Brick_Wall_019_basecolor.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${BellTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBellTexture('metal')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_01.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${BellTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBellTexture('aluminum')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_hor_01.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${BellTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBellTexture('psico1')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_43.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${BellTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBellTexture('psico2')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_hor_20.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${BellTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBellTexture('psico3')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_02.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${BellTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBellTexture('psico4')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_23.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${BellTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBellTexture('psico5')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_44.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${BellTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBellTexture('psico6')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_60.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${BellTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBellTexture('psico7')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_30.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${BellTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBellTexture('psico8')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_53.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${BellTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBellTexture('psico9')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_51.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${BellTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setBellTexture('psico10')}>
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
                <div className="configuratorbell__section">
                    <div className="configuratorbell__section__title">
                        Base color
                    </div>
                    <div className="configuratorbell__section__values">
                        {bellColors.map((item, index) => (
                            <div key={index} className={`itemBell ${item.color === bellColor.color ? "itemBell--active" : ""}`} onClick={() => setbellColor(item)}>
                                <div className="itemBell__dot" style={{ backgroundColor: item.color, }} />
                                <div className="itemBell__label">
                                    {item.name}
                                </div>
                            </div>
                        ))
                        }
                    </div>
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
                                onChange={() => setbellColor(slider.current.value)} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default  Bell_interface