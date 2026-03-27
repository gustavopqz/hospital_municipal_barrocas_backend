import { describe, expect, it, vi } from 'vitest';
import { heartBeatController } from './heartbeat.controller';

describe('heartBeatController', () => {
  it('should return Hello World message', () => {
    // mock response
    const json = vi.fn();
    const res = {
      json,
    // biome-ignore lint/suspicious/noExplicitAny: <Heatbeat don't need a huge data validation>
    } as any;

    // mock request (not used here)
    // biome-ignore lint/suspicious/noExplicitAny: <Heatbeat don't need a huge data validation>
        const req = {} as any;

    // call controller
    heartBeatController(req, res);

    // assertions
    expect(json).toHaveBeenCalledWith({
      message: 'Hello World',
    });
  });
});