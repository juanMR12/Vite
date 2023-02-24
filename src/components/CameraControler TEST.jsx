import { Camera } from '/node_modules/three';
// Include camera Controlers Libraries
import {
  FirstPersonControls
} from '/node_modules/three/examples/jsm/controls/FirstPersonControls.js';
import {
  OrbitControls
} from '/node_modules/three/examples/jsm/controls/OrbitControls.js';

import { useThree } from "@react-three/fiber";

const CameraControler = () => {
//const CameraControler = (_camera, _renderer, _controler_mode) => {
//const CameraControler = (_controler_mode) => {

  // Store object variables
  //this.camera = _camera;
  //this.renderer = _renderer;
  //this.controler_mode = _controler_mode;

  this.camera = useThree(state => state.camera)
  this.renderer = useThree();
  this.controler_mode = true;

  // Init one contorler for FirstPersonControler and other contorler for OrbitControler
  this.setupControls = function (_renderer) {

    // Instanciate the First Person Controller
    this.controler_FP = new FirstPersonControls(this.camera, _renderer.domElement);

    // The look around speed.
    this.controler_FP.lookSpeed = 0.25;

    // The movement speed.
    this.controler_FP.movementSpeed = 0;
    // If movementSpeed is greater than 0, then the camera can be moved alone with WASD, leading into an unsynchronized camera and model movement.

    // Initial Tested Values for First Person Camera:

    // Whether or not looking around is vertically constrained by [.verticalMin, .verticalMax].
    this.controler_FP.constrainVertical = true;
    // How far you can vertically look around, upper limit. Range is 0 to Math.PI radians.
    this.controler_FP.verticalMax = 2.5;
    // How far you can vertically look around, lower limit. Range is 0 to Math.PI radians.
    this.controler_FP.verticalMin = 0.5;

    // Whether or not the controls are enabled. Default is true.
    this.controler_FP.enabled = true;

    // Instanciate the Orbit Controller
    this.controler_Ob = new OrbitControls(this.camera, _renderer.domElement);
    this.controler_Ob.enabled = false;
  }

  // Set CAMERA control to FirstPerson
  this.setControlsFirstPerson = function () {
    console.log("FirstPersonControler Active\n");

    // Enable First Person Controler
    this.controler_FP.enabled = true;

    // Disable Orbit Controler
    this.controler_Ob.enabled = false;

    // Set the current Controler to First Person Controler
    this.controler_ = this.controler_FP;
    this.controler_mode = true;
  }

  // Set CAMERA control to Orbit
  this.setControlsOrbit = function () {
    console.log("OrbitControler Active\n");

    // Disable First Person Controler
    this.controler_FP.enabled = false;

    // Enable Orbit Controler
    this.controler_Ob.enabled = true;

    // Set the current Controler to Orbit Controler
    this.controler_ = this.controler_Ob;
    this.controler_mode = false;
  }

  // Update for animations
  this.update = function (UpdateDelta) {

    //Orbit Controler
    if (this.controler_Ob.enabled) {
      this.controler_Ob.update(UpdateDelta);
    }
    //First Person Controler
    if (this.controler_FP.enabled) {
      this.controler_FP.update(UpdateDelta);
    }
  }

  // Optionally, the x, y and z components of the world space position. Rotates the object to face a point in world space. This method does not support objects having non-uniformly-scaled parent(s).
  this.CameraLookAt = function (x, y, z) {
    console.log("Controler Camera LookAt: " + x + ", " + y + ", " + z + "\n");
    this.camera.lookAt(x, y, z);
  }

  // Set Camera position to (x, y, z)
  this.CameraSetPosition = function (x, y, z) {
    console.log("Controler Camera Position: " + x + ", " + y + ", " + z + "\n");
    this.camera.position.set(x, y, z);
  }

  // Change beetween camera control modes
  this.SwitchControlMode = function () {
    console.log("Controler mode:" + this.controler_mode + "\n");
    if (this.controler_mode == false) {
      this.setControlsFirstPerson();
    } else {
      this.setControlsOrbit();
    }
  }

  // Create the controlers
  this.setupControls(_renderer);
  if (this.controler_mode) {
    this.setControlsFirstPerson();
  } else {
    this.setControlsOrbit();
  }

  return (
    <div>
      TEST
    </div>
  )
}

export default CameraControler