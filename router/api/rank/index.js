import http from '../../../utils/http';

export default { 
  async getList(ctx) {
    let res = await http.get('http://www.kuwo.cn/api/www/bang/bang/bangMenu');
    ctx.body = res;
  },
  async getDetailById(ctx) {
    let params = {
      bangId: ctx.query.rankId,
      pn: ctx.query.current || 1,
      rn: ctx.query.pageSize || 30
    }
    let res = await http.get('http://www.kuwo.cn/api/www/bang/bang/musicList', { params});
    ctx.body = res;
  }
}