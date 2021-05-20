
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods'
import { MetadataKeys } from './Metadatakeys';

export function controller(routePrefix: string) {
  return function(target: Function) {
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('Metadatakeys.path', 
      target.prototype, key);
      const method: Methods = Reflect.getMetadata('Metadatakeys.method',
       target.prototype, key)
      if (path) {
        router[method](`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}