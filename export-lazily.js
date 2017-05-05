import Proxy from 'harmony-proxy';
import Reflect from 'harmony-reflect';

export default (dependencyLoader) => {
  let dependencyLoaded;
  const proxied = () => {};
  const proxy = new Proxy(proxied, {
    apply: (target, thisArg, argumentsList) => {
      if (!dependencyLoaded) {
        dependencyLoaded = dependencyLoader();
      }
      return Reflect.apply(dependencyLoaded, thisArg, argumentsList);
    },
    construct: (target, argumentsList, newTarget) => {
      if (!dependencyLoaded) {
        dependencyLoaded = dependencyLoader();
      }
      return Reflect.construct(dependencyLoaded, argumentsList, newTarget);
    },
    get: (target, property, receiver) => {
      if (!dependencyLoaded) {
        dependencyLoaded = dependencyLoader();
      }
      return Reflect.get(dependencyLoaded, property, receiver);
    },
  });
  return proxy;
};
