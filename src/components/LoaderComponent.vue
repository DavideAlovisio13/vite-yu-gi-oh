<template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from "three";
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
    camera.position.z = 3;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$refs.container.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("/public/images/tcg-banner-hero.webp");
    const material = new THREE.MeshBasicMaterial({ map: texture });
    material.userData = { elastic: true };
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -5;
    scene.add(cube);
    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
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
      onComplete: () => {
        this.$emit("loader");
        animate();
      }
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
    z-index: 10000;
    overflow: hidden;
}
</style>
