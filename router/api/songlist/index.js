import http from '../../../utils/http';

export default {
  async getTagList(ctx) {
    let res = await http.get('http://www.kuwo.cn/api/www/playlist/getTagList');
    ctx.body = res;
  },
  async getChoiceness(ctx) {
    let params = {
      order: ctx.query.order || 'new',
      pn: ctx.query.current || 1,
      rn: ctx.query.pageSize || 30
    }
    let res = await http.get('http://www.kuwo.cn/api/pc/classify/playlist/getRcmPlayList', { params });
    ctx.body = res;
  },
  async getSongListById(ctx) {
    let params = {
      id: ctx.query.id,
      pn: ctx.query.current || 1,
      rn: ctx.query.pageSize || 30
    }
    let res = await http.get('http://www.kuwo.cn/api/pc/classify/playlist/getTagPlayList', { params });
    ctx.body = res;
  }
}