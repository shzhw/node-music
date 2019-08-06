import Koa from 'koa';
import cors from 'koa2-cors';
import router from './router';
import { port } from './utils/config';

const app = new Koa();

app.use(cors());
app.use(router.routes());
app.listen(port);

console.log(`服务器启动 端口：${port}`)