"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Globe } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { useLanguage } from "../context/LanguageContext";

const LocationsGlobe = () => {
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const labelContainerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);

  const locations = [
    { name: t.strategicHubs.egypt, lat: 26.0, lon: 30.0, color: "#3b82f6", region: t.strategicHubs.northAfrica },
    { name: t.strategicHubs.uae, lat: 24.0, lon: 54.0, color: "#10b981", region: t.strategicHubs.middleEast },
    { name: t.strategicHubs.india, lat: 21.0, lon: 78.0, color: "#f97316", region: t.strategicHubs.southAsia },
    { name: t.strategicHubs.southAfrica, lat: -30.0, lon: 25.0, color: "#eab308", region: t.strategicHubs.southernAfrica },
  ];

  useEffect(() => {
    if (!containerRef.current || !labelContainerRef.current) return;

    const timer = setTimeout(() => {
      if (!containerRef.current || !labelContainerRef.current) return;

      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
      camera.position.z = 200;

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      containerRef.current.appendChild(renderer.domElement);

      const labelRenderer = new CSS2DRenderer();
      labelRenderer.setSize(width, height);
      labelRenderer.domElement.style.position = 'absolute';
      labelRenderer.domElement.style.top = '0';
      labelRenderer.domElement.style.pointerEvents = 'none';
      labelContainerRef.current.appendChild(labelRenderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
      scene.add(ambientLight);

      const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
      sunLight.position.set(5, 3, 5);
      scene.add(sunLight);

      const loader = new THREE.TextureLoader();
      const earthTexture = loader.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg");
      earthTexture.colorSpace = THREE.SRGBColorSpace;

      const globeRadius = 65;
      const geometry = new THREE.SphereGeometry(globeRadius, 64, 64);
      const material = new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 10,
      });
      const earth = new THREE.Mesh(geometry, material);
      // Removed previous rotation to allow direct mapping (0,0 is at +Z)
      scene.add(earth);

      const markerGroup = new THREE.Group();
      earth.add(markerGroup);

      const labels: CSS2DObject[] = [];

      locations.forEach((loc) => {
        // Standard Lat/Lon to XYZ for Three.js (0,0 is at +Z)
        const latRad = (loc.lat * Math.PI) / 180;
        const lonRad = (loc.lon * Math.PI) / 180;
        const r = globeRadius + 1.2;

        const x = r * Math.cos(latRad) * Math.sin(lonRad);
        const y = r * Math.sin(latRad);
        const z = r * Math.cos(latRad) * Math.cos(lonRad);

        const dotGeo = new THREE.SphereGeometry(2.2, 16, 16);
        const dotMat = new THREE.MeshBasicMaterial({ color: loc.color });
        const dot = new THREE.Mesh(dotGeo, dotMat);
        dot.position.set(x, y, z);
        markerGroup.add(dot);

        const labelDiv = document.createElement('div');
        labelDiv.className = 'label-node';
        labelDiv.style.color = 'white';
        labelDiv.style.fontFamily = 'Inter, sans-serif';
        labelDiv.style.fontSize = '14px';
        labelDiv.style.fontWeight = '800';
        labelDiv.style.padding = '8px 16px';
        labelDiv.style.background = 'rgba(2, 6, 23, 0.95)';
        labelDiv.style.backdropFilter = 'blur(12px)';
        labelDiv.style.borderRadius = '12px';
        labelDiv.style.border = `2px solid ${loc.color}`;
        labelDiv.style.boxShadow = `0 10px 40px -10px ${loc.color}`;
        labelDiv.style.whiteSpace = 'nowrap';
        labelDiv.style.transition = 'opacity 0.5s ease, visibility 0.5s ease';
        labelDiv.style.pointerEvents = 'none';
        labelDiv.textContent = loc.name;

        const label = new CSS2DObject(labelDiv);
        label.position.set(x, y, z);
        label.position.multiplyScalar(1.03);
        markerGroup.add(label);
        labels.push(label);

        const ringGeo = new THREE.RingGeometry(3.5, 6, 32);
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
      controls.autoRotateSpeed = 0.8;
      // Zoomed out slightly to prevent ANY clipping on any screen size
      camera.position.set(120, 60, 220);
      controls.update();
      controlsRef.current = controls;

      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();

        const cameraPos = new THREE.Vector3();
        camera.getWorldPosition(cameraPos);

        labels.forEach((label) => {
          const labelPos = new THREE.Vector3();
          label.getWorldPosition(labelPos);

          const dist = labelPos.distanceTo(cameraPos);
          const earthPos = new THREE.Vector3();
          earth.getWorldPosition(earthPos);
          const distToCenter = earthPos.distanceTo(cameraPos);

          if (dist > distToCenter + 15) {
            label.element.style.opacity = '0';
            label.element.style.visibility = 'hidden';
            label.element.style.transform = 'scale(0.7)';
          } else {
            label.element.style.opacity = '1';
            label.element.style.visibility = 'visible';
            label.element.style.transform = 'scale(1)';
          }
        });

        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);
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
          labelRenderer.setSize(w, h);
        }
      };
      window.addEventListener("resize", handleResize);

    }, 100);

    return () => {
      clearTimeout(timer);
      if (containerRef.current) containerRef.current.innerHTML = "";
      if (labelContainerRef.current) labelContainerRef.current.innerHTML = "";
    };
  }, [language]);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = !isHovered;
    }
  }, [isHovered]);

  return (
    <section className="py-12 bg-[#020617] relative overflow-hidden" id="strategic-locations">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 font-bold text-xs mb-4 uppercase tracking-[0.2em] border border-blue-500/20"
          >
            <Globe size={14} className="animate-spin-slow" />
            <span>{t.strategicHubs.label}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-white tracking-tight mb-4"
          >
            {t.strategicHubs.title}
          </motion.h2>
          <p className="text-slate-400 text-base max-w-2xl mx-auto font-light leading-relaxed">
            {t.strategicHubs.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

          {/* Globe Container - Shifted upwards for centering */}
          <div
            className="relative w-full aspect-square max-w-[700px] flex items-center justify-center overflow-visible -mt-10 lg:mb-40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing transform-gpu" />
            <div ref={labelContainerRef} className="absolute inset-0 pointer-events-none" />

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none z-[-1]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%]  rounded-full pointer-events-none z-[-1] animate-pulse" />
          </div>

          {/* Cards side */}
          <div className="grid grid-cols-2 ml-25 lg:grid-cols-1 gap-4 mr-20 w-full lg:w-[340px]">
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
