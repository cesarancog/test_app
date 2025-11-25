import { CanActivateFn } from '@angular/router';


//basta
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
