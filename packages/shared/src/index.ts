export type Capability = 'filesystem' | 'collaboration' | 'execution' | 'network';
export type SystemEvent =
 | { type: 'FILE_CREATED' | 'FILE_UPDATED' | 'FILE_DELETED'; path: string }
 | { type: 'APP_OPENED' | 'APP_CLOSED'; appId: string }
 | { type: 'NETWORK_ONLINE' | 'NETWORK_OFFLINE' | 'SYNC_STARTED' | 'SYNC_COMPLETED' }
 | { type: 'NOTIFICATION_CREATED'; level: 'info'|'success'|'warning'|'error'; message: string };
export class EventBus { private listeners = new Set<(event:SystemEvent)=>void>(); emit(e:SystemEvent){this.listeners.forEach(l=>l(e));} on(l:(e:SystemEvent)=>void){this.listeners.add(l);return()=>this.listeners.delete(l);} }
export interface FileNode { path:string; kind:'file'|'directory'; name:string; parent:string; updatedAt:number; size:number; mime?:string }
export interface SyncOperation { id:string; type:'write'|'delete'|'move'; path:string; revision:number; createdAt:number }
