<template>
  <div ref="container"></div>
</template>

<script>

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";

export default {
  name: "LoaderComponent",
  mounted() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.container.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({ transparent: true, opacity: 0.8 });
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('/images/b7a452b1e41c58ccf367922b62b8a757.jpg');
    material.map = texture;
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -5;
    scene.add(cube);

    const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 5);
    light.position.set(1, 1, 10).normalize();
    scene.add(light);

    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
    const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    };
    animate();
    };
    animate();


    gsap.to(cube.position, {
      duration: 1,
      x: 0,
      y: 0,
      z: 0,
      ease: "elastic.out(1, 0.3)",
    });
    
  },
};
</script>

<style lang="scss">
#container {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    overflow: hidden;
}
</style>
