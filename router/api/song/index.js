import http from '../../../utils/http';

export default { 
  async getSongUrl(ctx) {
    let res = await http.get(`http://www.kuwo.cn/url?format=mp3&rid=${ctx.query.mid}&response=url&type=convert_url3&br=128kmp3&from=web&t=${new Date().getTime()}`);
    ctx.body = res;
  },
  async getSongInfo(ctx) {
    let res = await http.get(`http://m.kuwo.cn/newh5/singles/songinfoandlrc?musicId=${ctx.query.mid}`);
    ctx.body = res;
  }
}