<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const heroRef = ref(null);
const cursorDotRef = ref(null);
const cursorGlowRef = ref(null);

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let trailX = mouseX;
let trailY = mouseY;
let rafId;

const setCursorVars = (x, y) => {
  if (!heroRef.value) return;
  heroRef.value.style.setProperty('--cursor-x', `${x}px`);
  heroRef.value.style.setProperty('--cursor-y', `${y}px`);
};

const tick = () => {
  trailX += (mouseX - trailX) * 0.08;
  trailY += (mouseY - trailY) * 0.08;

  if (cursorDotRef.value) {
    cursorDotRef.value.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  }

  if (cursorGlowRef.value) {
    cursorGlowRef.value.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;
  }

  setCursorVars(trailX, trailY);
  rafId = requestAnimationFrame(tick);
};

onMounted(() => {
  const handleMove = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  };

  window.addEventListener('mousemove', handleMove, { passive: true });
  setCursorVars(mouseX, mouseY);
  rafId = requestAnimationFrame(tick);

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMove);
    if (rafId) cancelAnimationFrame(rafId);
  });
});
</script>

<template>
  <section
                ref="heroRef"
                class="hero"
              >
                <div class="hero__grid" />

                <aside class="hero__menu">
                  <nav>
                    <ul class="hero__menu-list">
                      <li>
                        <router-link class="menu-item" to="/project-a">
                          <span>PLE Project</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link class="menu-item" to="/game-dev">
                          <span>Game Development</span>
                        </router-link>
                      </li>
                      <li>
                        <router-link class="menu-item" to="/about">
                          <span>Over mij</span>
                        </router-link>
                      </li>
                      <li>
                        <a class="menu-item" href="https://www.linkedin.com/in/dirk-van-gelderen-48153030b/" target="_blank" rel="noopener noreferrer">
                          <span>LinkedIn</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </aside>

                <main class="hero__content">
                  <div class="hero__tag">DIRK VAN GELDEREN</div>
                  <h1 class="hero__title">Portfolio</h1>
                  <p class="hero__subtitle">
                    Moderne, minimalistische portfolio showcase met vloeiende animaties en
                    een interactieve cursor beleving.
                  </p>
                </main>

                <div ref="cursorGlowRef" class="cursor-glow" />
                <div ref="cursorDotRef" class="cursor-dot" />
              </section>
            </template>

            <style scoped>
            /* stylelint-disable */
            .hero {
              position: relative;
              min-height: 100vh;
              overflow: hidden;
              background: #0a0a0a;
              color: #f8f3ee;
              font-family: 'InterVariable', 'Inter', 'Sora', 'Manrope', system-ui, -apple-system, sans-serif;
            }

            .hero::before {
              content: '';
              position: absolute;
              inset: 0;
              background: radial-gradient(400px circle at var(--cursor-x) var(--cursor-y), rgba(255, 149, 74, 0.08), transparent 70%);
              opacity: 0.5;
              transition: opacity 0.2s ease;
              pointer-events: none;
            }

            .hero__grid {
              position: absolute;
              inset: 0;
              background-image:
                linear-gradient(rgba(255, 193, 119, 0.07) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 193, 119, 0.07) 1px, transparent 1px);
              background-size: 60px 60px;
              mask-image: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.9), transparent 80%);
              pointer-events: none;
            }

            .hero__menu {
              position: absolute;
              left: 0;
              top: 2.5rem;
              padding-left: 2.5rem;
              display: flex;
              flex-direction: column;
              gap: 1rem;
              z-index: 10;
            }

            .hero__menu-list {
              display: flex;
              flex-direction: column;
              gap: 0.8rem;
              list-style: none;
              padding: 0;
              margin: 0;
            }

            .menu-item {
              position: relative;
              display: flex;
              align-items: center;
              padding: 0.9rem 4.2rem 0.9rem 1.8rem;
              border-radius: 14px;
              color: rgba(255, 241, 230, 0.9);
              text-decoration: none;
              font-weight: 500;
              letter-spacing: 0.04em;
              transition: color 0.3s ease;
              overflow: visible;
            }

            .menu-item::before {
              content: '';
              position: absolute;
              top: 0;
              bottom: 0;
              left: -140vw;
              right: 40px;
              background: linear-gradient(90deg, rgba(255, 127, 41, 0.9), rgba(255, 170, 92, 0.65));
              opacity: 0;
              transform: translateX(-10%);
              transition: opacity 0.35s ease, transform 0.35s ease;
              z-index: -1;
            }

            .menu-item::after {
              content: '';
              position: absolute;
              right: -52px;
              top: 50%;
              width: 40px;
              height: 36px;
              background: linear-gradient(90deg, rgba(255, 127, 41, 0.9), rgba(255, 170, 92, 0.65));
              clip-path: polygon(0 0, 100% 50%, 0 100%, 35% 50%);
              transform: translateY(-50%) translateX(-12px);
              opacity: 0;
              transition: opacity 0.35s ease, transform 0.35s ease;
              z-index: -2;
            }

            .menu-item:hover {
              color: #1a0f0a;
            }

            .menu-item:hover::before {
              opacity: 1;
              transform: translateX(0);
            }

            .menu-item:hover::after {
              opacity: 1;
              transform: translateY(-50%) translateX(0);
            }

            .hero__content {
              position: relative;
              z-index: 5;
              min-height: 100vh;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              padding: 4rem 2rem;
            }

            .hero__tag {
              font-size: 0.75rem;
              letter-spacing: 0.4em;
              text-transform: uppercase;
              color: rgba(255, 206, 160, 0.7);
              margin-bottom: 1.5rem;
            }

            .hero__title {
              font-size: clamp(3.5rem, 12vw, 9rem);
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              background: linear-gradient(120deg, #fff4e6 0%, #ff9a40 45%, #ff6b1f 85%);
              -webkit-background-clip: text;
              color: transparent;
              text-shadow: 0 30px 80px rgba(255, 118, 32, 0.35);
            }

            .hero__subtitle {
              max-width: 36rem;
              color: rgba(255, 227, 201, 0.8);
              font-size: 1.1rem;
              line-height: 1.7;
              margin: 1.5rem 0 2.5rem;
            }

            .cursor-dot,
            .cursor-glow {
              position: fixed;
              top: 0;
              left: 0;
              pointer-events: none;
              z-index: 20;
            }

            .cursor-dot {
              width: 10px;
              height: 10px;
              border-radius: 999px;
              background: #ffd1a6;
              box-shadow: 0 0 20px rgba(255, 177, 102, 0.8);
            }

            .cursor-glow {
              width: 120px;
              height: 120px;
              border-radius: 50%;
              background: radial-gradient(circle, rgba(255, 132, 48, 0.15), rgba(255, 196, 126, 0.08), transparent 70%);
              filter: blur(12px);
              mix-blend-mode: screen;
            }

            @media (max-width: 900px) {
              .hero__menu {
                position: static;
                align-items: center;
                margin-top: 2rem;
              }

              .hero__menu-list {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
              }

              .hero__content {
                padding-top: 7rem;
              }
            }
            /* stylelint-enable */
                </style>
