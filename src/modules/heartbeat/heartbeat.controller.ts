import type { Request, Response } from 'express';

export const heartBeatController = ( _: Request, res: Response) => {
    return res.json({
        message: 'Hello World'
    });
};