import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas,  } from "@react-three/fiber";

import { FunctionComponent } from "react";
interface StarsProps {
    
}
 

interface BoxProps {
    
}
 
const Box: FunctionComponent<BoxProps> = () => {
    return ( 
        <mesh>
            <boxBufferGeometry attach="geometry"></boxBufferGeometry>
            <meshLambertMaterial attach="material" color="hotpink"></meshLambertMaterial>
        </mesh>
     );
}
 

const StarsField: FunctionComponent<StarsProps> = () => {
    return ( 
        <>
        <Canvas style={{ background:"black"}}>
            <Stars></Stars>
        <ambientLight />
    <pointLight position={[10, 10, 10]} />
            <OrbitControls>
                <Box></Box>
            </OrbitControls>
        </Canvas>
        </>
     );
}
 
export default StarsField;