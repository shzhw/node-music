import Router from 'koa-router';
import http from '../utils/http';
import rankModule from './api/rank';
import classModule from './api/songlist';

const router = new Router();

router
  // 首页
  .get('/api/banners', ctx => {
    let res = http.get('http://www.kuwo.cn/api/www/banner/index/bannerList')
    ctx.body = res;
  })
  .get('/api/recommend/songs', ctx => {
    let res = http.get('http://www.kuwo.cn/api/www/rcm/index/playlist');
    ctx.body = res;
  })
  // 排行榜
  .get('/api/rank', rankModule.getList)
  .get('/api/rank/detail', rankModule.getDetailById)
  // 分类歌单
  .get('/api/classify/tag', classModule.getTagList)
  .get('/api/classify/choiceness', classModule.getChoiceness)
  .get('/api/classify/listbyid', classModule.getSongListById)
  // 歌手

export default router;