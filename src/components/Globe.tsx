import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { useSpring } from 'framer-motion';

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  
  const springConfig = {
    stiffness: 280,
    damping: 40,
    mass: 1,
  };
  
  const rState = useSpring(0, springConfig);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    
    if (!canvasRef.current) return;

    const onResize = () => {
        if(canvasRef.current) {
            width = canvasRef.current.offsetWidth;
        }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2, // slightly tilted
      dark: 1,
      diffuse: 2, // increased diffuse for better lighting
      mapSamples: 16000,
      mapBrightness: 8, // brightened the dots
      baseColor: [0.2, 0.2, 0.2], // much lighter base instead of dark void
      markerColor: [0.1, 0.8, 0.8], 
      glowColor: [0.11, 0.48, 0.49], 
      markers: [
        // Tocantins (Maior densidade)
        { location: [-10.1689, -48.3317], size: 0.1 },  // Palmas
        { location: [-7.1911, -48.2072], size: 0.08 },  // Araguaína
        { location: [-11.7292, -49.0673], size: 0.06 }, // Gurupi
        
        // Norte
        { location: [-3.1190, -60.0217], size: 0.05 },  // Manaus
        { location: [-1.4550, -48.4902], size: 0.07 },  // Belém
        
        // Nordeste
        { location: [-3.7319, -38.5267], size: 0.06 },  // Fortaleza
        { location: [-8.0476, -34.8770], size: 0.07 },  // Recife
        { location: [-12.9714, -38.5014], size: 0.08 }, // Salvador
        
        // Outros pontos chave no Brasil
        { location: [-15.7975, -47.8919], size: 0.06 }, // Brasília
        { location: [-23.5505, -46.6333], size: 0.05 }, // São Paulo
      ],
      onRender: (state) => {
        // Auto rotate phi unless interacting, then use spring
        if (!pointerInteracting.current) {
          phi += 0.003;
        }
        state.phi = phi + rState.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="w-full h-full max-w-[500px] max-h-[500px] flex items-center justify-center relative cursor-grab active:cursor-grabbing mx-auto drop-shadow-[0_0_80px_rgba(28,124,125,0.2)]">
        <div className="absolute inset-0 bg-transparent z-10"
          onPointerDown={(e) => {
            pointerInteracting.current =
              e.clientX - pointerInteractionMovement.current;
            canvasRef.current!.style.cursor = 'grabbing';
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            canvasRef.current!.style.cursor = 'grab';
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            canvasRef.current!.style.cursor = 'grab';
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              rState.set(delta / 200);
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              rState.set(delta / 100);
            }
          }}
        ></div>
        <canvas
            ref={canvasRef}
            className="w-full h-full contain-layout"
        />
    </div>
  );
}
