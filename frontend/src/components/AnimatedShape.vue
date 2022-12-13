<template>
  <div id="app">
    <div class="shape">
      <div ref="threeContainer"></div>
    </div>
  </div>
</template>
  
  <script>
import * as THREE from "three";

export default {
  name: "ThreeScene",
  data() {
    return {
      camera: null,
      scene: null,
      mesh: null,
      renderer: null,
    };
  },
  mounted() {
    this.init();
    this.animate();
    // window.addEventListener("resize", this.onWindowResize, false);
  },
  methods: {
    init() {
      this.camera = new THREE.PerspectiveCamera(
        30,
        window.innerWidth / window.innerHeight,
        0.01,
        10
      );
      this.camera.position.z = 0.5;

      this.scene = new THREE.Scene();

      const geometry = new THREE.BoxGeometry(0.13, 0.13, 0.13);
      const material = new THREE.MeshNormalMaterial();

      this.mesh = new THREE.Mesh(geometry, material);
      this.scene.add(this.mesh);

      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      this.renderer.setSize(window.innerWidth / 7, window.innerHeight / 7);
      this.$refs.threeContainer.appendChild(this.renderer.domElement);
    },
    // onWindowResize() {
    //   this.camera.aspect = window.innerWidth / window.innerHeight;
    //   this.camera.updateProjectionMatrix();

    //   this.renderer.setSize(window.innerWidth / 4, window.innerHeight / 4);
    // },
    animate(time) {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.x = time / 2000;
      this.mesh.rotation.y = time / 1000;
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>