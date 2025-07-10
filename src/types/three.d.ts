export interface ThreeScene {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
  cleanup: () => void;
}

export interface AnimationMixer {
  mixer: THREE.AnimationMixer;
  update: (delta: number) => void;
}