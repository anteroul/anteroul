import { useRef, useEffect } from "react";
import * as THREE from "three";
import "./styles/content.css";

export const WelcomeText = () => {
    return (
        <>
            <p>Welcome to my personal website!</p>
            <p>
                My name is Antero Lindell. I'm a programmer and a professional nerd. I studied at
                Metropolia UAS majoring in Game Development. I'm especially experienced in
                game engine design, low-level programming languages, and graphics APIs and
                multimedia libraries such as OpenGL, WebGPU, SDL, Raylib, DirectX and
                Vulkan.
            </p>
            <p>
                The first programming language I learned was ActionScript at the early age of 12
                which was the language used for making Flash games. After experimenting some time with 
                Flash I quickly upgraded to languages such as C# and JavaScript eventually falling in love with C.
            </p>
        </>
    );
}

export const ImageGrid = () => {
    const images = [
        "./images/cpp.png",
        "./images/c.png",
        "./images/linux.png",
        "./images/go.png",
        "./images/unity.png",
        "./images/git.png",
        "./images/java.png",
        "./images/aws.png",
        "./images/cs.png",
        "./images/js.png",
        "./images/gl.png",
        "./images/vulkan.png",
        "./images/directx.png",
        "./images/wgpu.png",
        "./images/py.png",
    ];

    return (
        <div
            className="grid gap-4 p-4"
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)", // 5 images per row
                gridAutoRows: "auto", // Maintain image aspect ratio
                maxWidth: "600px",
                margin: "0 auto",
            }}
        >
            {images.map((src, index) => (
                <div
                    key={index}
                    className="bg-gray-200 rounded-xl"
                    style={{
                        width: "100%",
                        aspectRatio: "1", // Ensures a square container
                        overflow: "auto"
                    }}
                >
                    <img
                        src={src}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export const RotatingCube = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const mount = mountRef.current;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            mount.clientWidth / mount.clientHeight,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        mount.appendChild(renderer.domElement);

        // Geometry and Material for Cube
        const geometry = new THREE.BoxGeometry();
        const materials = [
            new THREE.MeshBasicMaterial({ color: "red" }),    // Front face
            new THREE.MeshBasicMaterial({ color: "blue" }),   // Back face
            new THREE.MeshBasicMaterial({ color: "green" }),  // Top face
            new THREE.MeshBasicMaterial({ color: "yellow" }), // Bottom face
            new THREE.MeshBasicMaterial({ color: "purple" }), // Right face
            new THREE.MeshBasicMaterial({ color: "orange" }), // Left face
        ];

        const cube = new THREE.Mesh(geometry, materials);
        scene.add(cube);

        // Camera Position
        camera.position.z = 3;

        // Animation Loop
        const animate = () => {
            cube.rotation.x += 0.01; // Rotate cube on X axis
            cube.rotation.y += 0.01; // Rotate cube on Y axis
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };
        animate();

        // Cleanup on Unmount
        return () => {
            mount.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <>
        <div ref={mountRef} style={{ width: "100%", height: "85%" }} />
        <div className="github-link-banner">
            <img src="./github.png" alt="GitHub icon" />
            <a href="https://github.com/anteroul">👉 ☕Link to my GitHub 🖥️ 👈</a>
            <img src="./github.png" alt="GitHub icon" />
        </div>
        </>
    );
};

export const ContactUs = () => {
    return (
        <>
            <h5>CONTACT ME!</h5>
            <br></br>
            <div class="socials">
                <a href="https://github.com/anteroul"><img src="./github_small.png"/> - GitHub</a>
                <a href="https://www.linkedin.com/in/uljas-lindell/"><img src="./linkedin.png"/> - LinkedIn</a>
                <a href="mailto:valiant.lindenvalley@proton.me"><img src="./email.png"/> - Email</a>
            </div>
        </>
    );
};


export default (ImageGrid, WelcomeText, RotatingCube, ContactUs);
