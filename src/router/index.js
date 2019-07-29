import Vue from 'vue';
import Router from 'vue-router';
import Backlog from '@/components/Backlog';
import KanbanBoard from '@/components/KanbanBoard';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/backlog',
      component: Backlog,
      
    },
// Add in a route to our new KanbanBoard component here
      {
        path: '/board',
        component: KanbanBoard,
      },
    {
	path:'*',
	redirect: '/backlog',
    },	
  ],
});
