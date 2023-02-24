
import { useThree } from "@react-three/fiber"; // Supuestamente esto me ayuda a obtener los parametros de la escena, no he logrado que funcione
import { cameraControler } from '../scripts/cameraControler.js' //importo el componente
import { OrbitControls} from '@react-three/drei'

const CameraControler = () => {

  // Create camera controlers
  //controler_ = new cameraControler(camera, renderer, controler_mode);
  //const cameraControler = cameraControler(useThree(state => state.camera), useThree(), true);
  //const controler_ = new cameraControler(useThree(state => state.camera), useThree(), true);

  // No estoy logrando instanciar la clase, por ahora creo que el problema es que se como obtener los parametros de la camara y el renderer usando r3f (React Trhee Fiber)

  return (
    // TEST Solo para que no me de errores al llamar al componente
    /*
    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
    */
    <OrbitControls 
    makeDefault 
    target={[0.5, -3, 0]} /* Target Camera at this position for better initial view of the test model */
    />
  )
}

export default CameraControler