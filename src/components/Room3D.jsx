import { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

const COLORS = [
  { name: "RAL 1001", hex: "#C9AE73" },
  { name: "RAL 1013", hex: "#E8E1CF" },
  { name: "RAL 5015", hex: "#0076D6" },
  { name: "RAL 6019", hex: "#B8D7A3" },
  { name: "RAL 9016", hex: "#F1F0E8" },
  { name: "RAL 9017", hex: "#111111" },
];

function RoomModel({ onSelect, selectedObject }) {
const { scene } = useGLTF("/models/RTP_Sports_Court.glb");
  // Clone scene once so this component can safely edit materials.
  const model = useMemo(() => scene.clone(true), [scene]);

  // Make every mesh use its own material.
  useEffect(() => {
    model.traverse((child) => {
      if (!child.isMesh) return;

      if (Array.isArray(child.material)) {
        child.material = child.material.map((mat) => mat.clone());
      } else if (child.material) {
        child.material = child.material.clone();
      }

      child.castShadow = true;
      child.receiveShadow = true;
    });
  }, [model]);

  // Highlight selected object with emissive tint when supported.
  useEffect(() => {
    model.traverse((child) => {
      if (!child.isMesh) return;

      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];

      materials.forEach((mat) => {
        if (!mat) return;

        if ("emissive" in mat) {
          if (selectedObject === child) {
            mat.emissive = new THREE.Color("#ff6a00");
            mat.emissiveIntensity = 0.12;
          } else {
            mat.emissive = new THREE.Color("#000000");
            mat.emissiveIntensity = 0;
          }

          mat.needsUpdate = true;
        }
      });
    });
  }, [model, selectedObject]);

  return (
    <primitive
      object={model}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(e.object);
      }}
    />
  );
}

export default function Room3D() {
  const [selectedObject, setSelectedObject] = useState(null);
  const [selectedColor, setSelectedColor] = useState(COLORS[2]);

  const changeColor = (color) => {
    setSelectedColor(color);

    if (!selectedObject?.material) return;

    const materials = Array.isArray(selectedObject.material)
      ? selectedObject.material
      : [selectedObject.material];

    materials.forEach((mat) => {
      if (!mat?.color) return;

      mat.color.set(color.hex);
      mat.needsUpdate = true;
    });
  };

  return (
    <div className="grid xl:grid-cols-[minmax(0,1fr)_360px] gap-6">
      {/* 3D VIEW */}
      <div className="relative min-h-[650px] overflow-hidden rounded-3xl border border-white/10 bg-[#111]">
        <div className="pointer-events-none absolute left-5 top-5 z-10">
          <p className="text-xs uppercase tracking-[4px] text-orange-500">
            Richtech Paint
          </p>

          <h2 className="mt-2 text-2xl font-black text-white">
            3D Color Configurator
          </h2>

          <p className="mt-1 text-sm text-neutral-400">
            คลิกวัตถุ แล้วเลือกสีด้านขวา
          </p>
        </div>

        <Canvas
          shadows
          camera={{
            position: [8, 6, 8],
            fov: 42,
            near: 0.1,
            far: 1000,
          }}
          onPointerMissed={() => setSelectedObject(null)}
        >
          <color attach="background" args={["#111111"]} />

          <ambientLight intensity={1.4} />

          <directionalLight
            castShadow
            position={[5, 10, 7]}
            intensity={2.2}
          />

          <RoomModel
            onSelect={setSelectedObject}
            selectedObject={selectedObject}
          />

          <ContactShadows
            position={[0, -0.06, 0]}
            opacity={0.35}
            scale={20}
            blur={2.5}
            far={12}
          />

          <Environment preset="warehouse" />

          <OrbitControls
            makeDefault
            enablePan
            enableZoom
            enableRotate
            minDistance={2}
            maxDistance={24}
            target={[0, 1, 0]}
          />
        </Canvas>

        <div className="pointer-events-none absolute bottom-5 left-5 z-10 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/10 bg-black/60 px-3 py-2 text-xs text-neutral-300 backdrop-blur">
            ลากเมาส์ = หมุน
          </span>

          <span className="rounded-full border border-white/10 bg-black/60 px-3 py-2 text-xs text-neutral-300 backdrop-blur">
            Scroll = ซูม
          </span>
        </div>
      </div>

      {/* CONTROL PANEL */}
      <aside className="h-fit rounded-3xl border border-white/10 bg-[#111] p-6 text-white">
        <p className="text-xs uppercase tracking-[3px] text-neutral-500">
          Selected Surface
        </p>

        <div className="mt-3 rounded-2xl border border-white/10 bg-[#181818] p-4">
          <p className="text-xs text-neutral-500">วัตถุที่เลือก</p>

          <p className="mt-1 break-all font-bold">
            {selectedObject?.name || "ยังไม่ได้เลือก"}
          </p>
        </div>

        <div className="mt-7">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs text-neutral-500">Color Collection</p>
              <h3 className="mt-1 text-xl font-black">เลือกสี</h3>
            </div>

            <span className="text-xs text-neutral-500">
              {COLORS.length} สี
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {COLORS.map((color) => {
              const active = selectedColor.hex === color.hex;

              return (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => changeColor(color)}
                  disabled={!selectedObject}
                  className={`rounded-2xl border p-2 text-left transition ${
                    active
                      ? "border-orange-500 bg-orange-500/5"
                      : "border-white/10 hover:border-white/30"
                  } disabled:cursor-not-allowed disabled:opacity-40`}
                >
                  <div
                    className="h-16 rounded-xl border border-white/10"
                    style={{ backgroundColor: color.hex }}
                  />

                  <div className="mt-2 flex items-center justify-between gap-2 px-1">
                    <span className="text-xs text-neutral-300">
                      {color.name}
                    </span>

                    {active && (
                      <span className="text-sm text-orange-500">✓</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-6">
          <p className="text-xs text-neutral-500">สีที่เลือก</p>

          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#181818] p-4">
            <div
              className="h-11 w-11 shrink-0 rounded-xl border border-white/10"
              style={{ backgroundColor: selectedColor.hex }}
            />

            <div className="min-w-0">
              <p className="font-bold">{selectedColor.name}</p>
              <p className="text-xs uppercase text-neutral-500">
                {selectedColor.hex}
              </p>
            </div>
          </div>
        </div>

        {!selectedObject && (
          <p className="mt-5 text-sm leading-6 text-neutral-500">
            คลิก Floor, Wall หรือวัตถุในโมเดลก่อน แล้วจึงเลือกสี
          </p>
        )}
      </aside>
    </div>
  );
}

useGLTF.preload("/models/RTP_Sports_Court.glb");