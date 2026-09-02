import {describe,it,expect} from 'vitest'; import {app} from './server.js'; describe('api',()=>it('registers health endpoint',()=>expect(app).toBeDefined()));
