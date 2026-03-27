import { Router } from 'express';
import { heartBeatController } from './heartbeat.controller';

const router = Router();

router.get('/', heartBeatController);

export default router;
