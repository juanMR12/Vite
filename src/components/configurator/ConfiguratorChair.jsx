import React from "react";
import { chairColors, useCustomization } from "../../contexts/Customization";

const slider = React.createRef() /* slider ref */
const material = React.createRef() /* material ref */
const Chair_interface = () => {
    const { chairTexture, setChairTexture, chairColor, setChairColor, setChairMaterial } = useCustomization();

    return (
        <div className="configuratorChair" data-shape={"interfaz"}>
            <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseChair" aria-expanded="false" aria-controls="collapseChair">
                chair
            </button>
            <div className="collapse" id="collapseChair">
                <div className="configurator__section">
                    <div className="configurator__section__title">
                        Material
                    </div>
                    <div className="configurator__section__values">
                        <select ref={material} onChange={() => setChairMaterial(material.current.value)} className="form-select" aria-label="Default select example" style={{width:'150px'}}>
                            <option value="standard" selected>Standard</option>
                            <option value="metallic">Metallic</option>
                        </select>
                    </div>
                </div>
                -------------------------
                <div className="configuratorChair__section">
                    <div className="configuratorChair__section__title">
                    textures
                    </div>
                    <div className="configuratorChair__section__values">
                    <div className={`item ${chairTexture === "original" ? "item--active" : ""}`} onClick={() => setChairTexture('original')}>
                            <div className="item__label">
                                {/* <!-- Add image inside the body of modal --> */}
                                <img id="image" src=
                                    "src/models/bridge2/texture1/Brick_wall_008_COLOR.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* original material */}
                            </div>
                        </div>
                        <div className={`item ${chairTexture === "ladrillos" ? "item--active" : ""}`} onClick={() => setChairTexture('ladrillos')}>
                            <div className="item__label">
                                <img id="image" src=
                                    "src/models/bridge2/texture2/Brick_Wall_019_basecolor.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${chairTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setChairTexture('metal')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_01.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${chairTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setChairTexture('aluminum')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_hor_01.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${chairTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setChairTexture('psico1')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_43.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${chairTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setChairTexture('psico2')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_hor_20.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${chairTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setChairTexture('psico3')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_02.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${chairTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setChairTexture('psico4')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_23.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${chairTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setChairTexture('psico5')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_44.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${chairTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setChairTexture('psico6')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_60.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${chairTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setChairTexture('psico7')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_30.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${chairTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setChairTexture('psico8')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_53.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${chairTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setChairTexture('psico9')}>
                            <div className="itemChair__label">
                                <img id="image" src=
                                    "src/textures/Psico_51.jpg"
                                    alt="Click on button" width={100} height={100} />
                                {/* Material */}
                            </div>
                        </div>
                        <div className={`itemChair ${chairTexture === "ladrillos" ? "itemChair--active" : ""}`} onClick={() => setChairTexture('psico10')}>
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
                <div className="configuratorChair__section">
                    <div className="configuratorChair__section__title">
                        Chair color
                    </div>
                    <div className="configuratorChair__section__values">
                        {chairColors.map((item, index) => (
                            <div key={index} className={`itemChair ${item.color === chairColor.color ? "itemChair--active" : ""}`} onClick={() => setChairColor(item)}>
                                <div className="itemChair__dot" style={{ backgroundColor: item.color, }} />
                                <div className="itemChair__label">
                                    {item.name}
                                </div>
                            </div>
                        ))
                        }
                    </div>
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
                            onChange={() => setChairColor(slider.current.value)} 
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default  Chair_interface