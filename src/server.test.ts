import req from 'supertest';
import server from './server';

test('[GET] /', async () => {
  const res = await req(server).get('/');
  expect(JSON.parse(res.text)).toBe({ hello: 'world'})
})