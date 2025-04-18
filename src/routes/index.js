// import { Headeronly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import FormDRL from '~/pages/FormDRL';
const publicRoutes = [
  //cấu hình không cần đăng nhập mới vào được
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/formDRL', component: FormDRL },

  // { path: '/upload', component: Upload, Layout: Headeronly },
];

const privateRoutes = [
  //cấu hình cần đăng nhập mới vào được
];

export { publicRoutes, privateRoutes };
