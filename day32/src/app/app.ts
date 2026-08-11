/** #-------------------------- #
    # ######### DAY 32 ######## #
    # ------------------------- # */

/**
 * TOPIC: Today you'll see that with JavaScript you can create interesting things, even 3d game.
 * There will no tasks today - just explore this program and midify it if you want.
 */

import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

import * as THREE from 'three';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent implements AfterViewInit {

  // Angular will find the <canvas #canvas> element for us.
  //
  // The "!" means:
  // "TypeScript, trust me — this value will exist."
  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;


  // Angular calls this function after the HTML has been created. Remember this function is one of the Angular lifecycle hooks
  //
  // We need this because our canvas must exist before
  // we can give it to Three.js.
  ngAfterViewInit(): void {


    // =========================================================
    // 1. CREATE OUR 3D WORLD
    // =========================================================

    // "new" creates a new object.
    //
    // THREE.Scene is a class provided by Three.js.
    //
    // So this means:
    //
    // "Create a new Scene object and put it into the
    //  variable called scene."
    const scene = new THREE.Scene();


    // We can change properties of objects using ".".
    //
    // scene.background means:
    // "the background property of the scene object".
    //
    // 0x87ceeb is a hexadecimal color.
    scene.background = new THREE.Color(0x87ceeb);



    // =========================================================
    // 2. CREATE THE CAMERA
    // =========================================================

    // A camera is simply another Three.js object.
    //
    // It describes what part of our 3D world we can see.
    //
    // We pass several values to the constructor.
    const camera = new THREE.PerspectiveCamera(

      // Field of view.
      70,

      // Width / height of the screen.
      window.innerWidth / window.innerHeight,

      // Objects closer than this are not shown.
      0.1,

      // Objects farther than this are not shown.
      1000
    );


    // The camera also has a "position" object.
    //
    // position.set(x, y, z)
    //
    // is a method call.
    //
    // It is basically saying:
    //
    // "Put the camera at this 3D position."
    camera.position.set(0, 5, 10);



    // =========================================================
    // 3. CREATE THE THING THAT DRAWS OUR WORLD
    // =========================================================

    // Three.js needs something that can take our 3D world
    // and turn it into pixels on the screen.
    //
    // This object is called the renderer.
    const renderer = new THREE.WebGLRenderer({

      // this.canvas is the Angular object.
      //
      // .nativeElement gives us the real HTML <canvas>
      // element inside it.
      canvas: this.canvas.nativeElement,

      antialias: true
    });


    // Tell the renderer how big our drawing area is.
    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );



    // =========================================================
    // 4. ADD LIGHT
    // =========================================================

    // Without light, 3D objects would be difficult to see.
    //
    // We create a light object.
    const light = new THREE.DirectionalLight(

      // White light.
      0xffffff,

      // Brightness.
      3
    );


    // Move the light somewhere above the world.
    light.position.set(5, 10, 5);


    // IMPORTANT:
    //
    // Creating an object does NOT automatically put it
    // into our 3D world.
    //
    // We have to add it to the scene.
    scene.add(light);


    // Another, weaker light.
    //
    // This makes dark areas easier to see.
    scene.add(
      new THREE.AmbientLight(0xffffff, 0.5)
    );



    // =========================================================
    // 5. CREATE THE GROUND
    // =========================================================

    // A 3D object usually consists of two main things:
    //
    // 1. Geometry  -> what shape is it?
    // 2. Material  -> what does it look like?
    //
    // BoxGeometry makes a box.
    // MeshStandardMaterial gives it a visible surface.

    const ground = new THREE.Mesh(

      // The shape:
      //
      // width = 20
      // height = 1
      // depth = 20
      new THREE.BoxGeometry(20, 1, 20),

      // The appearance.
      new THREE.MeshStandardMaterial({
        color: 0x228b22
      })
    );


    // Move the ground down by 0.5.
    //
    // Why?
    //
    // Our ground is 1 unit tall.
    // Its center is at y = 0.
    //
    // Therefore its top is at y = 0.5.
    ground.position.y = -0.5;


    // Put the ground into our world.
    scene.add(ground);



    // =========================================================
    // 6. CREATE OUR PLAYER
    // =========================================================

    // Our player is just a red cube.
    //
    // Later we could replace this cube with a person,
    // spaceship, monster, car, etc.
    const player = new THREE.Mesh(

      // Shape = cube.
      new THREE.BoxGeometry(1, 1, 1),

      // Appearance = red material.
      new THREE.MeshStandardMaterial({
        color: 0xff4444
      })
    );


    // Put the player on top of the ground.
    player.position.y = 0.5;


    // Add the player to the world.
    scene.add(player);



    // =========================================================
    // 7. CREATE SOME OBSTACLES
    // =========================================================

    // We already know "for of" and "for in".
    //
    // This is another type of for loop.
    //
    // It means:
    //
    // "Do this 8 times."
    for (let i = 0; i < 8; i++) {


      // Create one blue cube.
      const obstacle = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),

        new THREE.MeshStandardMaterial({
          color: 0x4444ff
        })
      );


      // Math.random() gives us a random number
      // between 0 and 1.
      //
      // Math.random() * 14
      // gives us a number between 0 and 14.
      //
      // Math.random() * 14 - 7
      // gives us a number between -7 and +7.
      //
      // So every obstacle gets a random position.
      obstacle.position.set(
        Math.random() * 14 - 7,
        0.5,
        Math.random() * 14 - 7
      );


      // Add this obstacle to the world.
      scene.add(obstacle);
    }



    // =========================================================
    // 8. REMEMBER WHICH KEYS ARE PRESSED
    // =========================================================

    // An object can be used like a little dictionary.
    //
    // For example:
    //
    // keys["w"] = true
    //
    // means:
    //
    // "The W key is currently pressed."
    const keys: Record<string, boolean> = {};


    // The browser tells us when a key is pressed.
    //
    // addEventListener means:
    //
    // "When this event happens, run this function."
    window.addEventListener('keydown', event => {

      // event.key contains the key that was pressed.
      //
      // .toLowerCase() converts "W" into "w".
      //
      // We then save true in our keys object.
      keys[event.key.toLowerCase()] = true;
    });


    // This event happens when the key is released.
    window.addEventListener('keyup', event => {

      // Now we remember that the key is no longer pressed.
      keys[event.key.toLowerCase()] = false;
    });



    // =========================================================
    // 9. THE GAME LOOP
    // =========================================================

    // This function is going to run again and again.
    //
    // This is the heart of almost every real-time game.
    const animate = () => {


      // Ask the browser:
      //
      // "Please run animate() again before the next
      // screen refresh."
      //
      // Usually this happens around 60 times per second.
      requestAnimationFrame(animate);



      // =======================================================
      // MOVE THE PLAYER
      // =======================================================

      // "if" checks whether something is true.
      //
      // keys['w'] is true when the W key is pressed.
      if (keys['w']) {

        // Move the player forward.
        //
        // -= means:
        //
        // player.position.z = player.position.z - 0.1
        //
        // We change the player's position a tiny amount
        // on every frame.
        player.position.z -= 0.1;
      }


      // Move backwards.
      if (keys['s']) {
        player.position.z += 0.1;
      }


      // Move left.
      if (keys['a']) {
        player.position.x -= 0.1;
      }


      // Move right.
      if (keys['d']) {
        player.position.x += 0.1;
      }

      // =======================================================
      // MAKE THE CAMERA FOLLOW THE PLAYER
      // =======================================================

      // Put the camera above the same X position as the player.
      camera.position.x = player.position.x;


      // Put the camera 10 units behind the player.
      camera.position.z = player.position.z + 10;


      // Tell the camera:
      //
      // "Look at the player."
      camera.lookAt(player.position);



      // =======================================================
      // ROTATE THE PLAYER
      // =======================================================

      // Every frame, rotate the player a little bit.
      //
      // += means:
      //
      // player.rotation.y =
      //     player.rotation.y + 0.02
      //
      // Since this happens many times every second,
      // the cube appears to rotate smoothly.
      player.rotation.y += 0.02;



      // =======================================================
      // DRAW ONE FRAME
      // =======================================================

      // Take our 3D world and camera
      // and turn them into pixels.
      renderer.render(scene, camera);
    };


    // Start the game loop.
    animate();
  }
}