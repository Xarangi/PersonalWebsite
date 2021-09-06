import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as dat from 'dat.gui'
import { MeshBasicMaterial } from 'three'

// Debug
// const gui = new dat.GUI()
const objects=[]
// Canvas
const canvas = document.querySelector('canvas.webgl')

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

// const geometry1 = new THREE.RingBufferGeometry(5.6,6,8);
// const geometry2 = new THREE.RingBufferGeometry(4.7,5,8);
// const geometry3 = new THREE.RingBufferGeometry(3.8,4,8);
// const geometry4 = new THREE.RingBufferGeometry(2.9,3,8);
// const geometry5 = new THREE.RingBufferGeometry(1.9,2,8);


// Materials
const texture = new THREE.TextureLoader().load('texta.png');
const texture1 = new THREE.TextureLoader().load('beg.png');
const texture2 = new THREE.TextureLoader().load('x3.png');
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

// const materialv = new THREE.MeshBasicMaterial({map: texture3});
// materialv.blending = THREE.NormalBlending;
// materialv.transparent = true
// materialv.opacity=1

const materialw = new THREE.MeshBasicMaterial({map: texture4});
materialw.blending = THREE.NormalBlending;
materialw.transparent = true
materialw.opacity=1

// const materialy = new THREE.MeshBasicMaterial({map: texture5});
// materialy.blending = THREE.NormalBlending;
// materialy.transparent = true
// materialy.opacity=1

const material3 = new THREE.MeshBasicMaterial()
material3.color = new THREE.Color(0xe85655)
material3.wireframe = true

const materialx = new THREE.MeshBasicMaterial()
materialx.color = new THREE.Color(0x7df9ff)
materialx.wireframe = true

const material4 = new THREE.MeshBasicMaterial()
material4.color = new THREE.Color(0x0)

// Mesh
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

// const octagon2 = new THREE.Mesh(geo,materialv)
// octagon2.position.z=29
// octagon2.position.y=6
// octagon2.position.x=-4
// scene.add(octagon2)

const octagon3 = new THREE.Mesh(geo,materialw)
octagon3.position.z=29
scene.add(octagon3)

// const octagon4 = new THREE.Mesh(geo0,materialy)
// octagon4.position.z=29
// scene.add(octagon4)

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

// const sphere3 = new THREE.Mesh(geob,material3)
// sphere3.position.z=47
// sphere3.position.y=-10
// scene.add(sphere3)

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

// const ring1e = new THREE.Mesh(geometry,material)
// scene.add(ring1e)
// ring1e.position.z=25
// ring1e.position.x=13
// const ring2e = new THREE.Mesh(geometry1,material2)
// scene.add(ring2e)
// ring2e.position.z=25
// ring2e.position.x=13
// const ring3e = new THREE.Mesh(geometry2,material)
// scene.add(ring3e)
// ring3e.position.z=25
// ring3e.position.x=13
// const ring4e = new THREE.Mesh(geometry3,material2)
// scene.add(ring4e)
// ring4e.position.z=25
// ring4e.position.x=13
// const ring5e = new THREE.Mesh(geometry4,material)
// scene.add(ring5e)
// ring5e.position.z=25
// ring5e.position.x=13
// const ring6e = new THREE.Mesh(geometry5,material2)
// scene.add(ring6e)
// ring6e.position.z=25
// ring6e.position.x=13

// const ring1w = new THREE.Mesh(geometry,material)
// scene.add(ring1w)
// ring1w.position.z=25
// ring1w.position.x=-13
// const ring2w = new THREE.Mesh(geometry1,material2)
// scene.add(ring2w)
// ring2w.position.z=25
// ring2w.position.x=-13
// const ring3w = new THREE.Mesh(geometry2,material)
// scene.add(ring3w)
// ring3w.position.z=25
// ring3w.position.x=-13
// const ring4w = new THREE.Mesh(geometry3,material2)
// scene.add(ring4w)
// ring4w.position.z=25
// ring4w.position.x=-13
// const ring5w = new THREE.Mesh(geometry4,material)
// scene.add(ring5w)
// ring5w.position.z=25
// ring5w.position.x=-13
// const ring6w = new THREE.Mesh(geometry5,material2)
// scene.add(ring6w)
// ring6w.position.z=25
// ring6w.position.x=-13

// const ring1n = new THREE.Mesh(geometry,material)
// scene.add(ring1n)
// ring1n.position.z=25
// ring1n.position.y=13
// const ring2n = new THREE.Mesh(geometry1,material2)
// scene.add(ring2n)
// ring2n.position.z=25
// ring2n.position.y=13
// const ring3n = new THREE.Mesh(geometry2,material)
// scene.add(ring3n)
// ring3n.position.z=25
// ring3n.position.y=13
// const ring4n = new THREE.Mesh(geometry3,material2)
// scene.add(ring4n)
// ring4n.position.z=25
// ring4n.position.y=13
// const ring5n = new THREE.Mesh(geometry4,material)
// scene.add(ring5n)
// ring5n.position.z=25
// ring5n.position.y=13
// const ring6n = new THREE.Mesh(geometry5,material2)
// scene.add(ring6n)
// ring6n.position.z=25
// ring6n.position.y=13

// const ring1s = new THREE.Mesh(geometry,material)
// scene.add(ring1s)
// ring1s.position.z=25
// ring1s.position.y=-13
// const ring2s = new THREE.Mesh(geometry1,material2)
// scene.add(ring2s)
// ring2s.position.z=25
// ring2s.position.y=-13
// const ring3s = new THREE.Mesh(geometry2,material)
// scene.add(ring3s)
// ring3s.position.z=25
// ring3s.position.y=-13
// const ring4s = new THREE.Mesh(geometry3,material2)
// scene.add(ring4s)
// ring4s.position.z=25
// ring4s.position.y=-13
// const ring5s = new THREE.Mesh(geometry4,material)
// scene.add(ring5s)
// ring5s.position.z=25
// ring5s.position.y=-13
// const ring6s = new THREE.Mesh(geometry5,material2)
// scene.add(ring6s)
// ring6s.position.z=25
// ring6s.position.y=-13

// const ring1en = new THREE.Mesh(geometry,material)
// scene.add(ring1en)
// ring1en.position.z=25
// ring1en.position.x=6.5
// ring1en.position.y=6.5
// const ring2en = new THREE.Mesh(geometry1,material2)
// scene.add(ring2en)
// ring2en.position.x=6.5
// ring2en.position.y=6.5
// const ring3en = new THREE.Mesh(geometry2,material)
// scene.add(ring3en)
// ring3en.position.z=25
// ring2en.position.x=6.5
// ring3en.position.y=6.5
// const ring4en = new THREE.Mesh(geometry3,material2)
// scene.add(ring4en)
// ring4en.position.z=25
// ring4en.position.x=6.5
// ring4en.position.y=6.5
// const ring5en = new THREE.Mesh(geometry4,material)
// scene.add(ring5en)
// ring5en.position.z=25
// ring5en.position.x=6.5
// ring5en.position.y=6.5
// const ring6en = new THREE.Mesh(geometry5,material2)
// scene.add(ring6en)
// ring6en.position.z=25
// ring6en.position.x=6.5
// ring6en.position.y=6.5

// const ring1wn = new THREE.Mesh(geometry,material)
// scene.add(ring1wn)
// ring1wn.position.z=25
// ring1wn.position.x=-6.5
// ring1wn.position.y=6.5
// const ring2wn = new THREE.Mesh(geometry1,material2)
// scene.add(ring2wn)
// ring2wn.position.z=25
// ring2wn.position.x=-6.5
// ring2wn.position.y=6.5
// const ring3wn = new THREE.Mesh(geometry2,material)
// scene.add(ring3wn)
// ring3wn.position.z=25
// ring3wn.position.x=-6.5
// ring3wn.position.y=6.5
// const ring4wn = new THREE.Mesh(geometry3,material2)
// scene.add(ring4wn)
// ring4wn.position.z=25
// ring4wn.position.x=-6.5
// ring4wn.position.y=6.5
// const ring5wn = new THREE.Mesh(geometry4,material)
// scene.add(ring5wn)
// ring5wn.position.z=25
// ring5wn.position.x=-6.5
// ring5wn.position.y=6.5
// const ring6wn = new THREE.Mesh(geometry5,material2)
// scene.add(ring6wn)
// ring6wn.position.z=25
// ring6wn.position.x=-6.5
// ring6wn.position.y=6.5

// const ring1ws = new THREE.Mesh(geometry,material)
// scene.add(ring1ws)
// ring1ws.position.z=25
// ring1ws.position.y=-6.5
// ring1ws.position.x=-6.5
// const ring2ws = new THREE.Mesh(geometry1,material2)
// scene.add(ring2ws)
// ring2ws.position.z=25
// ring2ws.position.y=-6.5
// ring2ws.position.x=-6.5
// const ring3ws = new THREE.Mesh(geometry2,material)
// scene.add(ring3ws)
// ring3n.position.z=25
// ring3ws.position.y=-6.5
// ring3ws.position.x=-6.5
// const ring4ws = new THREE.Mesh(geometry3,material2)
// scene.add(ring4ws)
// ring4ws.position.z=25
// ring4ws.position.y=-6.5
// ring4ws.position.x=-6.5
// const ring5ws = new THREE.Mesh(geometry4,material)
// scene.add(ring5ws)
// ring5ws.position.z=25
// ring5ws.position.y=-6.5
// ring5ws.position.x=-6.5
// const ring6ws = new THREE.Mesh(geometry5,material2)
// scene.add(ring6ws)
// ring6ws.position.z=25
// ring6ws.position.y=-6.5
// ring6ws.position.x=-6.5

// const ring1se = new THREE.Mesh(geometry,material)
// scene.add(ring1s)
// ring1se.position.z=25
// ring1se.position.y=-6.5
// ring1se.position.x=6.5
// const ring2se = new THREE.Mesh(geometry1,material2)
// scene.add(ring2se)
// ring2se.position.z=25
// ring2se.position.y=-6.5
// ring2se.position.x=6.5
// const ring3se = new THREE.Mesh(geometry2,material)
// scene.add(ring3se)
// ring3se.position.z=25
// ring3se.position.y=-6.5
// ring3se.position.x=6.5
// const ring4se = new THREE.Mesh(geometry3,material2)
// scene.add(ring4se)
// ring4se.position.z=25
// ring4se.position.y=-6.5
// ring4se.position.x=6.5
// const ring5se = new THREE.Mesh(geometry4,material)
// scene.add(ring5se)
// ring5se.position.z=25
// ring5se.position.y=-6.5
// ring5se.position.x=6.5
// const ring6se = new THREE.Mesh(geometry5,material2)
// scene.add(ring6se)
// ring6se.position.z=25
// ring6se.position.y=-6.5
// ring6se.position.x=6.5



// Lights

// const pointLight = new THREE.PointLight(0xffffff, 0.1)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
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

//Controls
//  const controls = new OrbitControls(camera, canvas)
//  controls.enableDamping = true

//Import

// const loaderx = new GLTFLoader()

// loaderx.load(
// 	// resource URL
// 	'untitled.glb',
// 	// called when the resource is loaded
// 	function ( gltf ) {   mixer= new THREE.AnimationMixer(gltf.scene);
//         gltf.animations.forEach((clip) => {mixer.clipAction(clip).play(); });
//      scene.add(gltf.scene)})

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
bloompass.renderToScreen=true;
composer.addPass(bloompass);


/**
 * Animate
 */
function moveCamera()
{
    const t =((document.body.getBoundingClientRect().top)/sizes.height)*754;
    camera.position.z=(t*-0.015)+7.5;
    ring1.position.y=0
    ring2.position.y=0
    ring3.position.y=0
    ring4.position.y=0
    ring5.position.y=0
    ring6.position.y=0
    if (camera.position.z>=22)
    {   camera.position.z=((t*-0.015)-14.5)*(0.5)+22
        if (camera.position.z>=30)
        {
            camera.position.z=(((t*-0.015)-14.5)*(0.5)-8)*(2)+30;
        }
        else
        {    material2.opacity=(camera.position.z-22)*(0.3)}
    }
 
    if(camera.position.z>=50)
    {
        camera.position.y=(camera.position.z-50)*-0.5
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
    // octagon.rotation.z = 0.4* elapsedTime

    // ring1s.rotation.z = .2 * elapsedTime
    // ring2s.rotation.z = .3 * elapsedTime
    // ring3s.rotation.z = .4 * elapsedTime
    // ring4s.rotation.z = .5 * elapsedTime
    // ring5s.rotation.z = .6 * elapsedTime
    // ring6s.rotation.z = .7 * elapsedTime

    // ring1n.rotation.z = .2 * elapsedTime
    // ring2n.rotation.z = .3 * elapsedTime
    // ring3n.rotation.z = .4 * elapsedTime
    // ring4n.rotation.z = .5 * elapsedTime
    // ring5n.rotation.z = .6 * elapsedTime
    // ring6n.rotation.z = .7 * elapsedTime

    // ring1e.rotation.z = .2 * elapsedTime
    // ring2e.rotation.z = .3 * elapsedTime
    // ring3e.rotation.z = .4 * elapsedTime
    // ring4e.rotation.z = .5 * elapsedTime
    // ring5e.rotation.z = .6 * elapsedTime
    // ring6e.rotation.z = .7 * elapsedTime

    // ring1w.rotation.z = .2 * elapsedTime
    // ring2w.rotation.z = .3 * elapsedTime
    // ring3w.rotation.z = .4 * elapsedTime
    // ring4w.rotation.z = .5 * elapsedTime
    // ring5w.rotation.z = .6 * elapsedTime
    // ring6w.rotation.z = .7 * elapsedTime

    // ring1s.rotation.z = .2 * elapsedTime
    // ring2s.rotation.z = .3 * elapsedTime
    // ring3s.rotation.z = .4 * elapsedTime
    // ring4s.rotation.z = .5 * elapsedTime
    // ring5s.rotation.z = .6 * elapsedTime
    // ring6s.rotation.z = .7 * elapsedTime


    // Update Orbital Controls
    // controls.update()

    // Render


    //renderer.render(scene,camera)
    composer.render();

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

document.body.onscroll = moveCamera
tick()
