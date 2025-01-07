import * as THREE from 'three'; //importerer THREE for å lage 3D objekter
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; //importerer THREELoader for å kunne loade egne 3D objekter

const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({alpha: true}); //lager sleve renndereren / det man ser
renderer.setClearColor(0x000000, 0 );
renderer.setSize( window.innerWidth, window.innerHeight );

const mainContainer = document.getElementById('main') 

let sun, mercury, venus, earth, moon, mars, jupiter, saturn, uranus, neptune, pluto; //opretter en global variabel for alle planetene 

const loader = new GLTFLoader(); //opretter en loader for alle 3D objekter
loader.load('../dist/3Dmodels/Sun.glb', function(gltf){ //lager sola
    sun = gltf.scene
    sun.rotation.x = 90;
    sun.position.z = -1000
    sun.scale.set (0.25,0.25,0.25)
    scene.add(gltf.scene); 
    scene.add(sun)
});
loader.load('../dist/3Dmodels/Mercury.glb', function(gltf){ //lager merkur
    mercury = gltf.scene
    mercury.rotation.x = 90;
    mercury.position.x = 230
    mercury.position.y = 100
    mercury.position.z = -1000
    mercury.scale.set (0.07,0.07,0.07)
    scene.add(gltf.scene);
    scene.add(mercury)
});
loader.load('../dist/3Dmodels/Venus.glb', function(gltf){ //lager venus
    venus = gltf.scene
    venus.rotation.x = 90;
    venus.position.x = -100
    venus.position.y = -330
    venus.position.z = -1000
    venus.scale.set (0.1,0.1,0.1)
    scene.add(gltf.scene);
    scene.add(venus)
});
loader.load('../dist/3Dmodels/Earth.glb', function(gltf){ //lager jorda
    earth = gltf.scene
    earth.rotation.x = 90;
    earth.position.x = -430
    earth.position.y = 180
    earth.position.z = -1000
    earth.scale.set (0.1,0.1,0.1)
    scene.add(gltf.scene);
    scene.add(earth)
});
loader.load('../dist/3Dmodels/Moon.glb', function(gltf){ //lager månen
    moon = gltf.scene
    moon.rotation.x = 90;
    moon.position.x = -330
    moon.position.y = 200
    moon.position.z = -1000
    moon.scale.set (0.03,0.03,0.03)
    scene.add(gltf.scene);
    scene.add(moon)
});
loader.load('../dist/3Dmodels/Mars.glb', function(gltf){ //lager mars
    mars = gltf.scene
    mars.rotation.x = 90;
    mars.position.x = 540
    mars.position.y = -160
    mars.position.z = -1000
    mars.scale.set (0.1,0.1,0.1)
    scene.add(gltf.scene);
    scene.add(mars)
});
loader.load('../dist/3Dmodels/Jupiter.glb', function(gltf){ //lager jupiter
    jupiter = gltf.scene
    jupiter.rotation.x = 90;
    jupiter.position.x = -110
    jupiter.position.y = 550
    jupiter.position.z = -1000
    jupiter.scale.set (0.2,0.2,0.2)
    scene.add(gltf.scene);
    scene.add(jupiter)
});
loader.load('../dist/3Dmodels/Saturn.glb', function(gltf){ //lager saturn
    saturn = gltf.scene
    saturn.rotation.x = 90;
    saturn.position.x = -650
    saturn.position.y = -230
    saturn.position.z = -1000
    saturn.scale.set (0.15,0.15,0.15)
    scene.add(gltf.scene);
    scene.add(saturn)
});
loader.load('../dist/3Dmodels/Uranus.glb', function(gltf){ //lager uranus
    uranus = gltf.scene
    uranus.rotation.x = 90;
    uranus.position.x = 470
    uranus.position.y = -500
    uranus.position.z = -1000
    uranus.scale.set (0.15,0.15,0.15)
    scene.add(gltf.scene);
    scene.add(uranus)
});
loader.load('../dist/3Dmodels/Neptune.glb', function(gltf){ //lager neptun
    neptune = gltf.scene
    neptune.rotation.x = 90;
    neptune.position.x = 800
    neptune.position.y = 500
    neptune.position.z = -1000
    neptune.scale.set (0.15,0.15,0.15)
    scene.add(gltf.scene);
    scene.add(neptune)
});
loader.load('../dist/3Dmodels/Pluto.glb', function(gltf){ //lager pluto
    pluto = gltf.scene
    pluto.rotation.x = 90;
    pluto.position.x = -1000
    pluto.position.y = 200
    pluto.position.z = -1000
    pluto.scale.set (0.05,0.05,0.05)
    scene.add(gltf.scene);
    scene.add(pluto)
});

mainContainer.append(renderer.domElement);

camera.position.z = 5; //oppretter kameraet / der vi ser scenen far 

const light = new THREE.AmbientLight( 0xffffff, 0.2 ); //lager et svakt lys for alt
scene.add( light );

const mercuryspotLight = new THREE.SpotLight (0xffffff, 500000); //lager lyset for merkur
    mercuryspotLight.position.set  (0, 0, -1000 )
    mercuryspotLight.target.position.set (230, 100, -1000)
    scene.add(mercuryspotLight.target, mercuryspotLight);
const mercuryspotLightHelper = new THREE.SpotLightHelper( mercuryspotLight );
    scene.add( mercuryspotLightHelper );

const venusspotLight = new THREE.SpotLight (0xffffff, 200000); //lager lyset for venus
    venusspotLight.position.set  (0, 0, -1000 )
    venusspotLight.target.position.set (-100, -330, -1000)
    scene.add(venusspotLight.target, venusspotLight);
const venusspotLightHelper = new THREE.SpotLightHelper( venusspotLight );
    scene.add( venusspotLightHelper );

const earthspotLight = new THREE.SpotLight (0xffffff, 700000); //lager lyset for jorda
    earthspotLight.position.set  (0, 0, -1000 )
    earthspotLight.target.position.set (-430, 180, -1000)
    scene.add(earthspotLight.target, earthspotLight);
const earthspotLightHelper = new THREE.SpotLightHelper( earthspotLight );
    scene.add( earthspotLightHelper );

const marsspotLight = new THREE.SpotLight (0xffffff, 700000); //lager lyset for mars
    marsspotLight.position.set  (0, 0, -1000 )
    marsspotLight.target.position.set (540, -160, -1000)
    scene.add(marsspotLight.target, marsspotLight);
const marsspotLightHelper = new THREE.SpotLightHelper( marsspotLight );
    scene.add( marsspotLightHelper );

const jupiterspotLight = new THREE.SpotLight (0xffffff, 700000); //lager lyset for jupiter
    jupiterspotLight.position.set  (0, 0, -1000 )
    jupiterspotLight.target.position.set (-110, 550, -1000)
    scene.add(jupiterspotLight.target, jupiterspotLight);
const jupiterspotLightHelper = new THREE.SpotLightHelper( jupiterspotLight );
    scene.add( jupiterspotLightHelper );

const saturnspotLight = new THREE.SpotLight (0xffffff, 700000); //lager lyset for saturn
    saturnspotLight.position.set  (0, 0, -1000 )
    saturnspotLight.target.position.set (-650, -220, -1000)
    scene.add(saturnspotLight.target, saturnspotLight);
const saturnspotLightHelper = new THREE.SpotLightHelper( saturnspotLight );
    scene.add( saturnspotLightHelper );

const uranusspotLight = new THREE.SpotLight (0xffffff, 700000); //lager lyset for uranus
    uranusspotLight.position.set  (0, 0, -1000 )
    uranusspotLight.target.position.set (470, -500, -1000)
    scene.add(uranusspotLight.target, uranusspotLight);
const uranusspotLightHelper = new THREE.SpotLightHelper( uranusspotLight );
    scene.add( uranusspotLightHelper );

const neptunespotLight = new THREE.SpotLight (0xffffff, 700000); //lager lyset for neptun
    neptunespotLight.position.set  (0, 0, -1000 )
    neptunespotLight.target.position.set (800, 500, -1000)
    scene.add(neptunespotLight.target, neptunespotLight);
const neptunespotLightHelper = new THREE.SpotLightHelper( neptunespotLight );
    scene.add( neptunespotLightHelper );

const plutospotLight = new THREE.SpotLight (0xffffff, 700000); //lager lyset for pluto
    plutospotLight.position.set  (0, 0, -1000 )
    plutospotLight.target.position.set (-1000, 200, -1000)
    scene.add(plutospotLight.target, plutospotLight);
const plutospotLightHelper = new THREE.SpotLightHelper( plutospotLight );
    scene.add( plutospotLightHelper );


function animate() { //roterer alle planetene 
	    requestAnimationFrame( animate );
	    renderer.render( scene, camera );
    sun.rotation.y -=0.005;
    mercury.rotation.y -=0.005;  
    venus.rotation.y -= 0.005;
    earth.rotation.y -= 0.005;
    moon.rotation.y -= 0.005;
    mars.rotation.y -= 0.005;
    jupiter.rotation.y -= 0.005;
    saturn.rotation.y -= 0.005;
    uranus.rotation.y -=0.005;
    neptune.rotation.y -=0.005;
    pluto.rotation.y -= 0.005;
}

animate(); //kjører animasjonene
