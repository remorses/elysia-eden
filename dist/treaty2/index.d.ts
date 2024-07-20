import type { Elysia } from 'elysia';
import type { Treaty } from './types';
interface SSEEvent {
    event: string;
    data: any;
    id?: string;
}
export declare function streamSSEResponse(response: Response): AsyncGenerator<SSEEvent>;
export declare const treaty: <const App extends Elysia<any, any, any, any, any, any, any, any>>(domain: string | App, config?: Treaty.Config) => Treaty.Create<App>;
export type { Treaty };
