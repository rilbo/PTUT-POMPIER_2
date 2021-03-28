
import * as THREE from '../../node_modules/three/build/three.module.js';

import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from '../../node_modules/three/examples/jsm/loaders/RGBELoader.js';
import { RoughnessMipmapper } from '../../node_modules/three/examples/jsm/utils/RoughnessMipmapper.js';


const scene = new THREE.Scene()
//const axesHelper = new THREE.AxesHelper(5)
//scene.add(axesHelper)

/*
const skyColor = 0xFFFFFF;
const intensity = 1;
const groundColor = 0x000000;
const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
scene.add(light);
*/

const container = document.createElement( 'div' );
 document.body.appendChild( container );

const color = 0xFFFFFF;
    const intensity = 1.2;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(0, 10, 0);
    light.target.position.set(-5, 0, 0);
    scene.add(light);
    scene.add(light.target);

    const light2 = new THREE.DirectionalLight(color, intensity);
    light2.position.set(-20, -10, 0);
    light2.target.position.set(-5, 0, 0);
    scene.add(light2);
    scene.add(light2.target);


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 6

const renderer = new THREE.WebGLRenderer({ alpha: true })
//renderer.physicallyCorrectLights = true
//renderer.shadowMap.enabled = true
renderer.outputEncoding = THREE.sRGBEncoding
renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.4)
container.appendChild(renderer.domElement)
container.className = "container3D";

const controls = new OrbitControls(camera, renderer.domElement)
controls.minDistance = 4;
controls.maxDistance = 10;
controls.target.set( 0, 0, - 0.2 );

const loader = new GLTFLoader()
loader.load(
    '../../model/glTF/export.gltf',
    function (gltf) {
        // gltf.scene.traverse(function (child) {
        //     if ((<THREE.Mesh>child).isMesh) {
        //         let m = <THREE.Mesh>child
        //         m.receiveShadow = true
        //         m.castShadow = true
        //     }
        //     if ((<THREE.Light>child).isLight) {
        //         let l = <THREE.Light>child
        //         l.castShadow = true
        //         //l.shadow.bias = -.003
        //         l.shadow.mapSize.width = 2048
        //         l.shadow.mapSize.height = 2048
        //     }
        // })
        scene.add(gltf.scene);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded')
    },
    (error) => {
        console.log(error);
    }
);

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.4)
    render()
}


var animate = function () {
    requestAnimationFrame(animate)

    controls.update()

    render()

};

function render() {
    renderer.render(scene, camera)
}
animate();