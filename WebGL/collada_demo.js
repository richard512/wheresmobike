if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, stats;

var w = 300;
var h = 300;

var camera, scene, renderer, objects;
var particleLight, pointLight;
var dae, skin;

var loader = new THREE.ColladaLoader();
loader.options.convertUpAxis = true;
loader.load( './bicycle.dae', function ( collada ) {
    
    dae = collada.scene;
    skin = collada.skins[ 0 ];
    
    dae.scale.x = dae.scale.y = dae.scale.z = 0.15;
    dae.updateMatrix();
    
    init();
    animate();
    
} );

function init() {
    
    container = document.createElement( 'div' );
    document.body.appendChild( container );
    
    camera = new THREE.PerspectiveCamera( 45, w /
				          h, 1, 2000 );
    camera.position.set( 2, 2, 3 );
    
    scene = new THREE.Scene();
    
    // Grid
    
    var size = 14, step = 1;
    
    
    // Add the COLLADA
    
    scene.add( dae );
    
    //				particleLight = new THREE.Mesh( new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
    //				scene.add( particleLight );
    
    // Lights
    
    scene.add( new THREE.AmbientLight( 0xcccccc ) );
    
    //				var directionalLight = new THREE.DirectionalLight(/*Math.random() * 0xffffff*/0xeeeeee );
    //				directionalLight.position.x = Math.random() - 0.5;
    //				directionalLight.position.y = Math.random() - 0.5;
    //				directionalLight.position.z = Math.random() - 0.5;
//				directionalLight.position.normalize();
    //				scene.add( directionalLight );

//				pointLight = new THREE.PointLight( 0xffffff, 4 );
    //				pointLight.position = particleLight.position;
    //				scene.add( pointLight );

				renderer = new THREE.WebGLRenderer();
    renderer.setSize( w, h);
    
    container.appendChild( renderer.domElement );
    
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    //				container.appendChild( stats.domElement );
    
    //
    
    window.addEventListener( 'resize', onWindowResize, false );
    
}

function onWindowResize() {
    
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    
    renderer.setSize( w , h);
    
			}

//

var t = 0;
var clock = new THREE.Clock();

			function animate() {
                            
			    var delta = clock.getDelta();
                            
			    requestAnimationFrame( animate );
                            
			    if ( t > 1 ) t = 0;
                            
			    if ( skin ) {
                                
					// guess this can be done smarter...
                                
				// (Indeed, there are way more frames than needed and interpolation is not used at all
				//  could be something like - one morph per each skinning pose keyframe, or even less,
				//  animation could be resampled, morphing interpolation handles sparse keyframes quite well.
				//  Simple animation cycles like this look ok with 10-15 frames instead of 100 ;)
                                
				for ( var i = 0; i < skin.morphTargetInfluences.length; i++ ) {
                                    
				    skin.morphTargetInfluences[ i ] = 0;
                                    
				}

					skin.morphTargetInfluences[ Math.floor( t * 30 ) ] = 1;

					t += delta;

				}

				render();
				stats.update();

			}

			function render() {

				var timer = Date.now() * 0.0005;

				camera.position.x = Math.cos( timer ) * 10;
				camera.position.y = 2;
				camera.position.z = Math.sin( timer ) * 10;

				camera.lookAt( scene.position );

//				particleLight.position.x = Math.sin( timer * 4 ) * 3009;
//				particleLight.position.y = Math.cos( timer * 5 ) * 4000;
//				particleLight.position.z = Math.cos( timer * 4 ) * 3009;

				renderer.render( scene, camera );

			}