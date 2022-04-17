





import * as THREE from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ antialias: true });

  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setPixelRatio(devicePixelRatio);  
  document.body.appendChild( renderer.domElement );

  const ball = new THREE.TextureLoader().load('./textures/ball2.jpg')

  //light
  const dirLight = new THREE.DirectionalLight(0xff0000, 0.95)
  dirLight.position.set(0, 0, 1)
  const dirLight1 = new THREE.DirectionalLight(0xff0000, 0.95)
  dirLight1.position.set(0, 0, -1)
  const ambLight = new THREE.AmbientLight(0xff0000); // soft white light
  const pointLight = new THREE.PointLight(0xff0000, 1);
  pointLight.position.set(30, 30, 60);

  const spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(100, 2000, 90);
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.width = 1024;
  spotLight.shadow.mapSize.height = 1024;
  spotLight.shadow.camera.near = 100;
  spotLight.shadow.camera.far = 1000;
  spotLight.shadow.camera.fov = 100;

	const geometry = new THREE.SphereGeometry();
  const material = new THREE.MeshStandardMaterial({
    map: ball,
    metalness: 0.4,
  });
	const cube = new THREE.Mesh( geometry, material );





	camera.position.z = 1.2;
  camera.position.y = 0.5;		

  scene.add( cube, spotLight );
       
function animate() {
		requestAnimationFrame( animate );
			cube.rotation.x -= 0.005;
			// cube.rotation.y += 0.01;
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