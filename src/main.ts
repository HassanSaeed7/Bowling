





import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setPixelRatio(devicePixelRatio);  
  document.body.appendChild( renderer.domElement );

  const ball = new THREE.TextureLoader().load('/textures/1.jpg')

  //light

  const pointLight = new THREE.PointLight(0xff0000, 30);
  pointLight.position.set(400, 1060, 10);
  

	const geometry = new THREE.SphereGeometry(1, 100, 10);


  // const material = new THREE.MeshPhysicalMaterial({
  //   map: ball,
  //   reflectivity: 0.78,
  //   roughness: 0,
  //   metalness: 1,
  //   clearcoat: 0.4,
  //   clearcoatRoughness: 0.25,
  //   transmission: 1,
 // });

  const material = new THREE.MeshPhongMaterial({
    map: ball,
    shininess: 0.6,
   
  });

//   const material = new THREE.MeshPhysicalMaterial({})
// material.reflectivity = 0
// material.transmission = 1.0
// material.roughness = 0
// material.metalness = 0
// material.clearcoat = 0.6
// material.clearcoatRoughness = 0.4
// material.map = ball
// material.ior = 1
// material.thickness = 10.0


	const cube = new THREE.Mesh( geometry, material );




	camera.position.z = 2;
  camera.position.y = 0.5;		

  scene.add( cube, pointLight );
       
function animate() {
		requestAnimationFrame( animate );
			cube.rotation.x -= 0.01;
			// cube.rotation.y += 0.005;
			renderer.render( scene, camera );
};



//responsiveness
const onWindowResize = () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
};

window.addEventListener("resize", onWindowResize, false);
animate();