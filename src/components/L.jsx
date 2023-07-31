/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 l.glb --transform 
Files: l.glb [2.27MB] > l-transformed.glb [919.5KB] (60%)
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';

export function L(props) {
  const { nodes, materials } = useGLTF('./models/l-transformed.glb')

  const l = useRef();
  const scroll = useScroll();
  const tl = useRef(0);
  
  gsap.registerEffect({
    name: "fade",
    defaults: {duration: 2}, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity:0});
    }
  });
  gsap.effects.fade(l);

    useFrame((state, delta) => {
      tl.current.seek(scroll.offset * tl.current.duration());
    })
  
    useLayoutEffect(() => {
      tl.current = gsap.timeline({ defaults: { duration: 1, ease: 'power1.inOut' } })
      
      tl.current
        .to(l.current.rotation, { y: 2 }, 2)
        .to(l.current.position, { x: 0 }, 2)
        .to(l.current.position, { y: -2.9 }, 2)

        .to(l.current.rotation, { y: 4 }, 5)
        .to(l.current.position, { x: 0 }, 5)

        .to(l.current.rotation, { y: 6 }, 8)
        .to(l.current.rotation, { x: 0 }, 8)
        .to(l.current.position, { x: 0 }, 8)
        .to(l.current.position, { z: 0 }, 8)

        .to(l.current.rotation, { y: 8 }, 11)
        .to(l.current.rotation, { x: 0 }, 11)
        .to(l.current.position, { x: 0 }, 11)
        .to(l.current.position, { z: 0.1 }, 11)

        .to(l.current.rotation, { y: 10 }, 14)
        .to(l.current.rotation, { x: 0 }, 14)
        .to(l.current.position, { x: 0 }, 14)

        .to(l.current.rotation, { y: 13 }, 17)
        .to(l.current.rotation, { x: 0 }, 17)
        .to(l.current.position, { x: 0 }, 17)
    }, [])

  return (
    <group {...props} dispose={null} ref={l}>
      <mesh geometry={nodes.Cloth.geometry} material={materials['FABRIC 1_FRONT_1988']} />
      <primitive object={nodes.BSurfaceMesh} />
    </group>
  )
}

useGLTF.preload('./models/l-transformed.glb')
