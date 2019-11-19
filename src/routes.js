import { Router } from 'express';

import PromotionController from './app/controllers/PromotionController';
import AwardController from './app/controllers/AwardController';
import PromotionAwardController from './app/controllers/PromotionAwardController';

const routes = new Router();

routes.get('/promotions', PromotionController.index);
routes.get('/promotions/:name', PromotionController.show);
routes.post('/promotions', PromotionController.store);
routes.put('/promotions', PromotionController.update);
routes.delete('/promotions/:id', PromotionController.delete);

routes.get('/awards', AwardController.index);
routes.get('/awards/:name', AwardController.show);
routes.post('/awards', AwardController.store);
routes.put('/awards', AwardController.update);
routes.delete('/awards/:id', AwardController.delete);

routes.get('/promotionawards', PromotionAwardController.index);
routes.get('/promotionawards/:name', PromotionAwardController.show);
routes.post('/promotionawards', PromotionAwardController.store);
routes.put('/promotionawards', PromotionAwardController.update);
routes.delete('/promotionawards/:id', PromotionAwardController.delete);

export default routes;

