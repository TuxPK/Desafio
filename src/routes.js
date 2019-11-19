import { Router } from 'express';

import PromotionController from './app/controllers/PromotionController';

const routes = new Router();

routes.get('/promotions', PromotionController.index);
routes.get('/promotions/:name', PromotionController.show);
routes.post('/promotions', PromotionController.store);
routes.put('/promotions', PromotionController.update);
routes.delete('/promotions/:id', PromotionController.delete);

export default routes;

