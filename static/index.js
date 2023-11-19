//Scene
const scene=new THREE.Scene();
// scene.background= new THREE.Color("#111")
scene.background= new THREE.Color("#161617")
scene.frustumCulled = true;
//Camera 
const camera=new THREE.PerspectiveCamera(45,(window.innerWidth)/(window.innerHeight),0.1,1000);
// const camera=new THREE.PerspectiveCamera(45,1080/500,0.1,1000);
camera.position.setZ(10);
camera.position.setX(1.07);
camera.position.setY(2.2);
camera.rotation.x = -0.2;
camera.rotation.y = 0.1;
camera.setFocalLength(50);  
camera.updateProjectionMatrix();	
//Lighting
const back_light=new THREE.PointLight("#BFA7D0",1.8,100); // back
back_light.position.set(0,-1,-10);
back_light.intensity = 1.2;

const right_light=new THREE.PointLight("#BFA7D0",1.8,100);   // right
right_light.position.set(8,5,3);
right_light.intensity = 0.6;
const left_light=new THREE.PointLight("#BFA7D0",1.8,100);   // left
left_light.position.set(-5,2,3);

scene.add(back_light,right_light,left_light);

const lighthelper1=new THREE.PointLightHelper(back_light);
const lighthelper2=new THREE.PointLightHelper(right_light);
const lighthelper3=new THREE.PointLightHelper(left_light);

const ambientlight=new THREE.AmbientLight("#9D937B");
scene.add(ambientlight);
// Renderer
const renderer=new THREE.WebGLRenderer({antialias: true, alpha: true });
renderer.shadows = true;
renderer.shadowType = 1;
renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);
// renderer.toneMapping = 0;
// renderer.toneMappingExposure = 1;
renderer.useLegacyLights  = false;
// renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.outputEcoding=THREE.sRGBEncoding;
// renderer.setSize(863,428.69);
// renderer.setSize(1536,763);
renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setSize(1080, 500,false);

// const hdrloader=new THREE.RGBELoader();
// hdrloader.load('../static/1.hdr',function(hdrtexture){
//     hdrtexture.mapping=THREE.EquirectangularReflectionMapping;

//     scene.environment=hdrtexture;
// });




// const controls=new THREE.OrbitControls(camera,renderer.domElement);




document.getElementById("pomodoro").appendChild(renderer.domElement);
// document.body.appendChild(renderer.domElement);

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize',function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    count_down.style.top = ((window.innerHeight/2)+280).toString()+"px";
});