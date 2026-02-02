<template>
  <section class="page">
    <div class="page__grid" />
    <router-link to="/" class="back-button">
      <span class="back-arrow" />
      <span class="back-text">Home</span>
    </router-link>

    <div class="content-box">
      <div class="title-row">
        <h1 class="page-title">Over Mij</h1>
        <div class="profile-image">
          <img
            src="@/assets/img/DSC_6914-Edit.jpg"
            alt="Portret van Dirk van Gelderen"
          />
        </div>
      </div>
      <div class="intro-row">
        <div class="intro-text">
          <h2>Wie Ben Ik?</h2>
          <p>
            Hallo! Ik ben Dirk van Gelderen, een gepassioneerde developer met een liefde
            voor moderne webtechnologieën en game development. Mijn reis in de programmeerwereld
            begon met nieuwsgierigheid en is uitgegroeid tot een professionele carrière.
          </p>
        </div>
      </div>

      <div class="content-section">
        <h2>Vaardigheden</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>Vue.js & React</li>
              <li>HTML5 & CSS3</li>
              <li>JavaScript/TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express & Fastify</li>
              <li>MongoDB & PostgreSQL</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Game Dev</h3>
            <ul>
              <li>Unity (C#)</li>
              <li>Unreal Engine</li>
              <li>Game Design</li>
              <li>3D Basics</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>CI/CD</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h2>Werkwijze</h2>
        <p>
          Ik ben een groot voorstander van clean code en moderne development practices.
          Mijn focus ligt op het creëren van schaalbare, onderhoudbare applicaties met
          een excellente gebruikerservaring. Ik geloof in continuous learning en blijf
          altijd op de hoogte van de laatste trends en technologieën.
        </p>
      </div>

      <div class="content-section">
        <h2>Interesses</h2>
        <p>
          Naast programmeren ben ik geïnteresseerd in game design, UX/UI design,
          en emerging technologies zoals AI en Web3. In mijn vrije tijd werk ik graag
          aan personal projects en draag ik bij aan open-source communities.
        </p>
      </div>

      <div class="content-section">
        <h2>Contact</h2>
        <p>
          Wil je samenwerken of heb je vragen? Neem gerust contact met me op via
          <a href="https://www.linkedin.com/in/dirk-van-gelderen-48153030b/" target="_blank" rel="noopener noreferrer" class="contact-link">LinkedIn</a>.
          Ik sta altijd open voor interessante projecten en nieuwe mogelijkheden!
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
  overflow: visible;
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

.title-row {
  display: flex;
  gap: 2.5rem;
  align-items: flex-start;
  margin-bottom: 2.5rem;
}

.page-title {
  margin-bottom: 0;
  flex: 1 1 0;
}

.intro-row {
  margin-bottom: 2.5rem;
}

.intro-text {
  max-width: 100%;
}

.intro-text h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #ff9a40;
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.intro-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 241, 230, 0.85);
  margin-bottom: 0;
}

.profile-image {
  flex: 0 0 clamp(180px, 22vw, 260px);
  width: clamp(180px, 22vw, 260px);
  aspect-ratio: 1 / 1;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 170, 92, 0.2);
  background: rgba(10, 10, 10, 0.6);
}

.profile-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center top;
}

@media (max-width: 900px) {
  .content-box {
    padding: 4rem;
  }

  .title-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .profile-image {
    width: min(260px, 70vw);
  }
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
  text-align: left;
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

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.skill-category h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #ffaa5c;
  margin-bottom: 0.8rem;
  letter-spacing: 0.02em;
}

.skill-category ul {
  list-style: none;
  padding-left: 0;
}

.skill-category li {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 241, 230, 0.8);
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.skill-category li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.7em;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #ff7f29, #ffaa5c);
  border-radius: 50%;
}

.contact-link {
  color: #ff9a40;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  border-bottom: 2px solid transparent;
}

.contact-link:hover {
  color: #ffaa5c;
  border-bottom-color: #ffaa5c;
}

</style>
