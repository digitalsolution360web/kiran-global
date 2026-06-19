"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useLanguage } from "../context/LanguageContext";

const LocationsGlobe = () => {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);

  const locations = [
    { name: t.strategicHubs.egypt, lat: 26.8206, lon: 30.8025, color: "#3b82f6", region: t.strategicHubs.northAfrica },
    { name: t.strategicHubs.india, lat: 20.5937, lon: 78.9629, color: "#f97316", region: t.strategicHubs.southAsia },
    { name: t.strategicHubs.southAfrica, lat: -30.5595, lon: 22.9375, color: "#eab308", region: t.strategicHubs.southernAfrica },
    { name: t.strategicHubs.uae, lat: 24.4539, lon: 54.3773, color: "#10b981", region: t.strategicHubs.middleEast },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // Use a small delay to ensure clientWidth/Height are accurate
    const timer = setTimeout(() => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      // Increased distance to 200 to prevent ANY clipping from edges
      camera.position.z = 200;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      containerRef.current.appendChild(renderer.domElement);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
      hemiLight.position.set(0, 20, 0);
      scene.add(hemiLight);

      const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
      sunLight.position.set(5, 3, 5);
      scene.add(sunLight);

      // Texture Loading
      const loader = new THREE.TextureLoader();
      // Use a high-quality equirectangular texture for proper 3D wrapping
      const earthTexture = loader.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg");
      earthTexture.colorSpace = THREE.SRGBColorSpace;

      // Reduced radius further for a perfect fit without clipping
      const geometry = new THREE.SphereGeometry(38, 64, 64);
      const material = new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 10,
        specular: new THREE.Color(0x333333),
      });
      const earth = new THREE.Mesh(geometry, material);
      scene.add(earth);

      // Markers
      const markerGroup = new THREE.Group();
      earth.add(markerGroup);

      locations.forEach((loc) => {
        const latRad = (loc.lat * Math.PI) / 180;
        const lonRad = (loc.lon * Math.PI) / 180;
        const r = 38.5;

        const x = r * Math.cos(latRad) * Math.sin(lonRad);
        const y = r * Math.sin(latRad);
        const z = r * Math.cos(latRad) * Math.cos(lonRad);

        const dotGeo = new THREE.CircleGeometry(1.0, 32);
        const dotMat = new THREE.MeshBasicMaterial({ color: loc.color, side: THREE.DoubleSide });
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.set(x, y, z);
        dot.lookAt(new THREE.Vector3(0, 0, 0));
        dot.position.multiplyScalar(1.02);
        markerGroup.add(dot);

        const ringGeo = new THREE.RingGeometry(1.2, 1.8, 32);
        const ringMat = new THREE.MeshBasicMaterial({ color: loc.color, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.copy(dot.position);
        ring.lookAt(new THREE.Vector3(0, 0, 0));
        markerGroup.add(ring);
      });

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.0;
      controlsRef.current = controls;

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      const handleResize = () => {
        if (!containerRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        if (w && h) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      };
      window.addEventListener("resize", handleResize);

    }, 100);

    return () => {
      clearTimeout(timer);
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [language]);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !isHovered;
    }
  }, [isHovered]);

  return (
    <section className="py-16 bg-[#020617] relative" id="strategic-locations">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 font-bold text-[10px] mb-4 uppercase tracking-widest border border-blue-500/20"
          >
            <Globe size={12} />
            <span>{t.strategicHubs.label}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4"
          >
            {t.strategicHubs.title}
          </motion.h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto font-light">
            {t.strategicHubs.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">

          {/* Globe Container - Ensured zero clipping */}
          <div
            className="relative w-full aspect-square max-w-[380px] flex items-center justify-center overflow-visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing transform-gpu" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -initial z-[-1]" />
          </div>

          {/* Cards side */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 w-full lg:w-[340px]">
            {locations.map((loc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: `${loc.color}20`, color: loc.color }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg leading-tight">{loc.name}</h4>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">{loc.region}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationsGlobe;
