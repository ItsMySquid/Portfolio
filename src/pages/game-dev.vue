<template>
  <section class="page">
    <div class="page__grid" />
    <router-link to="/" class="back-button">
      <span class="back-arrow" />
      <span class="back-text">Home</span>
    </router-link>

    <div class="content-box">
      <h1 class="page-title">Game Development</h1>
      <div class="content-section">
        <h2>Passie voor Games</h2>
        <p>
          Game development combineert creativiteit, technische vaardigheden en storytelling.
          Mijn focus ligt op het creëren van immersieve experiences die spelers blijven boeien.
        </p>
      </div>

      <div class="content-section">
        <h2>Technische Expertise</h2>
        <ul>
          <li>Unity Game Engine (C#)</li>
          <li>Unreal Engine (Blueprints & C++)</li>
          <li>3D Modeling & Animation basics</li>
          <li>Game physics & mechanics</li>
          <li>Multiplayer networking</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>Project Highlights</h2>
        <ul>
          <li>2D Platformer met custom physics engine</li>
          <li>First-person puzzle game met innovatieve mechanics</li>
          <li>Multiplayer battle arena prototype</li>
          <li>VR escape room experience</li>
          <li>Mobile casual game met 10K+ downloads</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>Design Filosofie</h2>
        <p>
          Ik geloof in het belang van tight game mechanics en responsive controls.
          Een game moet aanvoelen als een natuurlijke extensie van de speler's intenties.
          Door continue playtesting en iteratie streef ik naar perfectie in gameplay feel.
        </p>
      </div>

      <div class="content-section">
        <h2>Toekomstige Ambities</h2>
        <p>
          Momenteel werk ik aan een ambitieus indie project dat procedural generation
          combineert met narrative design. Het doel is om een unieke ervaring te creëren
          waarbij elke playthrough anders is, maar het verhaal consistent blijft.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* stylelint-disable */
.page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: #0a0a0a;
  color: #f8f3ee;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
}

.page__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255, 193, 119, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 193, 119, 0.07) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.9), transparent 80%);
  pointer-events: none;
  z-index: 1;
}

.back-button {
  position: fixed;
  left: 2.5rem;
  top: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.9rem 1.8rem;
  border-radius: 14px;
  color: rgba(255, 241, 230, 0.9);
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 0.04em;
  transition: all 0.3s ease;
  z-index: 100;
  background: transparent;
}

.back-button:hover {
  color: #ff7f29;
}

.back-button:hover .back-arrow {
  transform: translateX(-4px);
  border-color: #ff7f29;
}

.back-arrow {
  width: 40px;
  height: 36px;
  background: linear-gradient(90deg, rgba(255, 127, 41, 0.9), rgba(255, 170, 92, 0.65));
  clip-path: polygon(100% 0, 0 50%, 100% 100%, 65% 50%);
  transition: all 0.3s ease;
}

.back-text {
  font-size: 1rem;
}

.content-box {
  position: relative;
  width: 75%;
  max-width: 1200px;
  background: rgba(10, 10, 10, 0.95);
  border-radius: 24px;
  padding: 4rem;
  animation: borderAnimation 3s ease-in-out infinite;
  z-index: 10;
}

@keyframes borderAnimation {
  0%, 100% {
    box-shadow:
      0 0 0 2px #ff7f29,
      0 0 20px rgba(255, 127, 41, 0.4),
      0 0 40px rgba(255, 127, 41, 0.2);
  }
  50% {
    box-shadow:
      0 0 0 2px #ffaa5c,
      0 0 30px rgba(255, 170, 92, 0.6),
      0 0 60px rgba(255, 170, 92, 0.3);
  }
}

.page-title {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: linear-gradient(120deg, #fff4e6 0%, #ff9a40 45%, #ff6b1f 85%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 3rem;
  text-align: center;
}

.content-section {
  margin-bottom: 2.5rem;
}

.content-section:last-child {
  margin-bottom: 0;
}

.content-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #ff9a40;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.content-section p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 241, 230, 0.85);
  margin-bottom: 1rem;
}

.content-section ul {
  list-style: none;
  padding-left: 0;
}

.content-section li {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 241, 230, 0.8);
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.content-section li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #ff7f29, #ffaa5c);
  border-radius: 50%;
}

</style>
