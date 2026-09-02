import { describe,it,expect } from 'vitest'; import { EventBus } from './index.js';
describe('EventBus',()=>it('delivers typed system events',()=>{const b=new EventBus();let received='';b.on(e=>received=e.type);b.emit({type:'NETWORK_ONLINE'});expect(received).toBe('NETWORK_ONLINE')}));
