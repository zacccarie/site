'use strict';

/* global THREE */
var mouse, raycaster;

function main() {
  const canvas = document.querySelector('#c');

  
  const renderer = new THREE.WebGLRenderer({canvas});
  const fov = 45;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 100;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 10, 20);

  const controls = new THREE.OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('white');

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();

  {
    const skyColor = 0xB1E1FF;  // light blue
    const groundColor = 0xB97A20;  // brownish orange
    const intensity = 1;
    const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    scene.add(light);
  }

  {
    const color = 0xFFFFFF;
    const intensity = 1.5;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(5, 10, 2);
    scene.add(light);
    scene.add(light.target);
  }

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 1;
    const halfFovY = THREE.Math.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  const mixerInfos = [];
  {
    const gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load('testblendercube.gltf', (gltf) => {
      const root = gltf.scene;
      scene.add(root);


      // compute the box that contains all the stuff
      // from root and below
      const box = new THREE.Box3().setFromObject(root);

      const boxSize = box.getSize(new THREE.Vector3()).length();
      const boxCenter = box.getCenter(new THREE.Vector3());

      // set the camera to frame the box
      frameArea(boxSize * 0.5, boxSize, boxCenter, camera);

      // update the Trackball controls to handle the new size
      controls.maxDistance = boxSize * 10;
      controls.target.copy(boxCenter);
      controls.update();

      const mixer = new THREE.AnimationMixer(scene);

const cube1 = scene.getObjectByName("Cube");
const cube2 = scene.getObjectByName("Cube.001");
const cone = scene.getObjectByName("Cône");








const canvas = document.querySelector('#c');




// ...

canvas.addEventListener('mousemove', onMouseMove);

function onMouseMove(event) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, camera );

  // calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects( scene.children, true );

  // check if any object is intersected
  if ( intersects.length > 0 ) {

    // reset all object colors
    scene.traverse((object) => {
      if (object.isMesh) {
        object.material.color.set(0xffffff);
      }
    });

    // set the color of the intersected object to red
    intersects[0].object.material.color.set( 0xff0000 );

  } else {

    // reset all object colors
    scene.traverse((object) => {
      if (object.isMesh) {
        object.material.color.set(0xffffff);
      }
    });
  }
}






const cube1Clip = gltf.animations[0];
const cube2Clip = gltf.animations[1];
const coneClip = gltf.animations[2];

const cube1Action = mixer.clipAction(cube1Clip);
const cube2Action = mixer.clipAction(cube2Clip);
const coneAction = mixer.clipAction(coneClip);

cube1Action.play();
cube2Action.play();
coneAction.play();

function animate() {
  requestAnimationFrame(animate);
  mixer.update(0.01);
  renderer.render(scene, camera);
}
animate();
      

const actions = Object.values(gltf.animations).map((clip) => {
        return mixer.clipAction(clip);
      });
      const mixerInfo = {
        mixer,
        actions,
        actionNdx: -1,
      };
      mixerInfos.push(mixerInfo);
      playNextAction(mixerInfo);

    });
  }



 
 









function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  let then = 0;
  function render(now) {
    now *= 0.001;  // convert to sections
    const deltaTime = now - then;
    then = now;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    for (const {mixer} of mixerInfos) {
      mixer.update(deltaTime);
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}




main();
