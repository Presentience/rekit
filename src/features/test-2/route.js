import {
  DefaultPage,
} from './index';

export default {
  path: 'test-2',
  indexRoute: { component: DefaultPage },
  childRoutes: [
    { path: 'default-page', component: DefaultPage },
  ],
};
