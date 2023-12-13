import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as dat from 'dat.gui'
import { MeshBasicMaterial } from 'three'



// Debug
console.log(screen.height)
let heightcont=screen.height
// const gui = new dat.GUI()
const objects=[]
// Canvas
const canvas = document.querySelector('canvas.webgl')

const loader = new THREE.TextureLoader();
const cross = loader.load('whitedots.png');

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.RingBufferGeometry(6.5,7,8);
const geo = new THREE.BoxGeometry(8,2,0)
const geo0 = new THREE.BoxGeometry(11,11,1)
const geoz = new THREE.BoxGeometry(3,3,3)
const geob = new THREE.SphereBufferGeometry(1)
const geoc = new THREE.SphereBufferGeometry(2)
const geow = new THREE.RingBufferGeometry(6,6.6,8);
const geowb = new THREE.RingBufferGeometry(0,5.7,8);
const geowe = new THREE.RingBufferGeometry(4,4.4,8);

const geometry1 = new THREE.RingBufferGeometry(1,1.25,8);
const geometry2 = new THREE.RingBufferGeometry(3.5,4,8);
// const geometry3 = new THREE.RingBufferGeometry(3.8,4,8);
// const geometry4 = new THREE.RingBufferGeometry(2.9,3,8);
// const geometry5 = new THREE.RingBufferGeometry(1.9,2,8);
const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 250;

const posArray = new Float32Array(particlesCnt*3);
const posArray1 = new Float32Array(particlesCnt);

for(let i=0; i<particlesCnt*3; i++){
    posArray[i] = (Math.random()-0.5) * 80
}
for(let i=0;i<particlesCnt;i++)
{
    posArray1[i]= (Math.random()-0.5)%80-40
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
particlesGeometry.setAttribute('position.z', new THREE.BufferAttribute(posArray1, 1));

// Materials
const texture = new THREE.TextureLoader().load('texta.png');
const texture1 = new THREE.TextureLoader().load('beg.png');
const texture2 = new THREE.TextureLoader().load('x4.png');
//const texture3 = new THREE.TextureLoader().load('x4.png');
const texture4 = new THREE.TextureLoader().load('x5.png');
//const texture5 = new THREE.TextureLoader().load('x7.png');
const texture6 = new THREE.TextureLoader().load('x10.png');

const material = new THREE.MeshBasicMaterial()
material.color = new THREE.Color(0x7df9ff)
const material1 = new THREE.MeshBasicMaterial()
material1.color = new THREE.Color(0x0000FF)

const material2 = new THREE.MeshBasicMaterial({map: texture});
material2.blending = THREE.NormalBlending;
material2.transparent = true
material2.opacity=0

const material0 = new THREE.MeshBasicMaterial({map: texture1});
material0.blending = THREE.NormalBlending;
material0.transparent = true
material0.opacity=1

const materialu = new THREE.MeshBasicMaterial({map: texture2});
materialu.blending = THREE.NormalBlending;
materialu.transparent = true
materialu.opacity=1

const materialz = new THREE.MeshBasicMaterial({map: texture6})
materialz.blending = THREE.NormalBlending;
materialz.transparent = true
materialz.opacity=1

const materialw = new THREE.MeshBasicMaterial({map: texture4});
materialw.blending = THREE.NormalBlending;
materialw.transparent = true
materialw.opacity=1

const material3 = new THREE.MeshBasicMaterial()
material3.color = new THREE.Color(0xe85655)
material3.wireframe = true

const material3x = new THREE.MeshBasicMaterial()
material3x.color = new THREE.Color(0xe85655)
material3x.side=THREE.DoubleSide


const materialx = new THREE.MeshBasicMaterial()
materialx.color = new THREE.Color(0x7df9ff)
materialx.wireframe = true

const material4 = new THREE.MeshBasicMaterial()
material4.color = new THREE.Color(0x0)

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.17, 
    map: cross, 
    transparent: true,
    blending: THREE.AdditiveBlending
})

// Mesh

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particlesMesh)
const ring1 = new THREE.Mesh(geometry,material)
scene.add(ring1)
ring1.position.x=0
const ring2 = new THREE.Mesh(geometry,material1)
scene.add(ring2)
ring2.position.z=5
const ring3 = new THREE.Mesh(geometry,material)
scene.add(ring3)
ring3.position.z=10
const ring4 = new THREE.Mesh(geometry,material1)
scene.add(ring4)
ring4.position.z=15
const ring5 = new THREE.Mesh(geometry,material)
scene.add(ring5)
ring5.position.z=20
const ring6 = new THREE.Mesh(geometry,material1)
scene.add(ring6)
ring6.position.z=25
const ring7 = new THREE.Mesh(geometry,material)
scene.add(ring7)
ring7.position.z=30
const ring8 = new THREE.Mesh(geometry,material1)
scene.add(ring8)
ring8.position.z=35
const ring9 = new THREE.Mesh(geometry,material)
scene.add(ring9)
ring9.position.z=40
const ring10 = new THREE.Mesh(geometry,material1)
scene.add(ring10)
ring10.position.z=45
const ring11 = new THREE.Mesh(geowe,material1)
//scene.add(ring11)
ring11.position.z=45

const octagon = new THREE.Mesh(geo,material2)
octagon.position.z=20
scene.add(octagon)

const octagon0 = new THREE.Mesh(geo0,material0)
octagon0.position.z=-4
octagon0.userData = {
    URL: "http://yahoo.com"
};
scene.add(octagon0)
objects.push(octagon0)


const octagon1 = new THREE.Mesh(geo,materialu)
octagon1.position.z=24
octagon1.position.y=-2
scene.add(octagon1)

const octagon3 = new THREE.Mesh(geo,materialw)
octagon3.position.z=29
scene.add(octagon3)

const octagon5 = new THREE.Mesh(geo,materialz)
octagon5.position.z=43
scene.add(octagon5)

const sphere1 = new THREE.Mesh(geob,material3)
sphere1.position.z=47
sphere1.position.y=-10
scene.add(sphere1)

const sphere2 = new THREE.Mesh(geoz,materialx)
sphere2.position.z=47
sphere2.position.y=-10
scene.add(sphere2)

const bg = new THREE.Mesh(geow,material)
bg.position.z=46
bg.position.y = -10
scene.add(bg)

const bgw = new THREE.Mesh(geowb,material4)
bgw.position.z=46
bgw.position.y = -10
scene.add(bgw)

const bg1 = new THREE.Mesh(geow,material)
bg1.position.z=45
bg1.position.y = -22
scene.add(bg1)

const bg1w = new THREE.Mesh(geowb,material4)
bg1w.position.z=45
bg1w.position.y = -22
scene.add(bg1w)

const bg2 = new THREE.Mesh(geow,material)
bg2.position.z=46
bg2.position.y = -33
scene.add(bg2)

const bg3 = new THREE.Mesh(geow,material)
bg3.position.z=45
bg3.position.y = -47
scene.add(bg3)

const bg2w = new THREE.Mesh(geowb,material4)
bg2w.position.z=46
bg2w.position.y = -33
scene.add(bg2w)

const bg3w = new THREE.Mesh(geowb,material4)
bg3w.position.z=45
bg3w.position.y = -47
scene.add(bg3w)

const ring1e = new THREE.Mesh(geometry1,material3x)
scene.add(ring1e)
ring1e.position.z=45
ring1e.position.x=-1.2
ring1e.position.y=-22

const ring2e = new THREE.Mesh(geometry1,material3x)
scene.add(ring2e)
ring2e.position.z=45
ring2e.position.x=1.2
ring2e.position.y=-22

const ring3e = new THREE.Mesh(geometry1,material3x)
scene.add(ring3e)
ring3e.position.z=46.5
ring3e.position.y=-32.5
ring3e.position.x=-1.5
const ring4e = new THREE.Mesh(geometry1,material3x)
scene.add(ring4e)
ring4e.position.z=46
ring4e.position.y=-34.5
const ring5e = new THREE.Mesh(geometry1,material3x)
scene.add(ring5e)
ring5e.position.z=46.5
ring5e.position.x=1.5
ring5e.position.y=-32.5


const ring1w = new THREE.Mesh(geometry1,material3x)
scene.add(ring1w)
ring1w.position.z=46
ring1w.position.y=-46
ring1w.position.x=-1
const ring2w = new THREE.Mesh(geometry1,material3x)
scene.add(ring2w)
ring2w.position.z=46
ring2w.position.y=-48
ring2w.position.x=-1
const ring3w = new THREE.Mesh(geometry1,material3x)
scene.add(ring3w)
ring3w.position.z=46
ring3w.position.y=-46
ring3w.position.x=1
const ring4w = new THREE.Mesh(geometry1,material3x)
scene.add(ring4w)
ring4w.position.z=46
ring4w.position.x=1
ring4w.position.y=-48

/**
 * Sizes
 */
const sizes = {
    width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    moveCamera()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    composer.setSize(sizes.width, sizes.height)
    composer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // sizes.height = max(document.getElementsById("control").clientHeight,window.innerHeight)

})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 7.5
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
const composer = new EffectComposer(renderer);
composer.setSize(sizes.width, sizes.height)
composer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/*
Post processing
*/
const renderpass = new RenderPass(scene,camera);
composer.addPass(renderpass);
const bloompass = new UnrealBloomPass(1,1,1,0);
const glitchpass = new GlitchPass()
// glitchpass.rendertoScreen=true;
bloompass.renderToScreen=true;
composer.addPass(bloompass);
// composer.addPass(glitchpass)


/**
 * Animate
 */
function moveCamera()
{
    const t =((document.body.getBoundingClientRect().top)/document.documentElement.clientHeight)*754;
    camera.position.z=(t*-0.015)+7.5;
    ring1.position.y=0
    ring2.position.y=0
    ring3.position.y=0
    ring4.position.y=0
    ring5.position.y=0
    ring6.position.y=0
    if (camera.position.z>=22)
    {   camera.position.z=((t*-0.015)-14.5)*(0.58)+22
        material2.opacity=(camera.position.z-22)*(0.3)
    }
 
    if(camera.position.z>=50)
    {
        camera.position.y=(camera.position.z-50)*-(0.86)
        camera.position.z=50
        if(camera.position.y<=-10)
        {
        ring1.position.y=(camera.position.y+10)*100
        ring2.position.y=(camera.position.y+10)*100
        ring3.position.y=(camera.position.y+10)*100
        ring4.position.y=(camera.position.y+10)*100
        ring5.position.y=(camera.position.y+10)*100
        ring6.position.y=(camera.position.y+10)*100
    }
    }
    else
    {
        camera.position.y =0
    }
}
const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    ring1.rotation.z = .4 * elapsedTime
    ring2.rotation.z = 1+ .4 * elapsedTime
    ring3.rotation.z = 2+ .4 * elapsedTime
    ring4.rotation.z = 3 + .4 * elapsedTime
    ring5.rotation.z = 4 + .4 * elapsedTime
    ring6.rotation.z = 5+ .4 * elapsedTime
    ring7.rotation.z = 6+ .4 * elapsedTime
    ring8.rotation.z = 7+ .4 * elapsedTime
    ring9.rotation.z = 8+ .4 * elapsedTime
    ring10.rotation.z = 9+ .4 * elapsedTime
    sphere1.rotation.set(-0.1*elapsedTime,-0.1*elapsedTime,-0.3*elapsedTime)
    sphere2.rotation.set(0.1*elapsedTime,0.1*elapsedTime,0.3*elapsedTime)
    particlesMesh.rotation.x=0.03*elapsedTime
    particlesMesh.rotation.y=0.03*elapsedTime

    ring1e.rotation.z = .5 * elapsedTime
    ring2e.rotation.z = -.5 * elapsedTime

    ring1w.rotation.z = .3 * elapsedTime
    ring2w.rotation.z = .3 * elapsedTime
    ring3w.rotation.z = -.3 * elapsedTime
    ring4w.rotation.z = -.3 * elapsedTime

    // Render


    //renderer.render(scene,camera)
    composer.render();

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

document.body.onscroll = moveCamera
tick()
