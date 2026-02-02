import Index from '@/pages/index.vue';
import ProjectA from '@/pages/project-a.vue';
import GameDev from '@/pages/game-dev.vue';
import About from '@/pages/about.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  { path: '/', component: Index },
  { path: '/project-a', component: ProjectA },
  { path: '/game-dev', component: GameDev },
  { path: '/about', component: About },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
