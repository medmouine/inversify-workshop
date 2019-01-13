/* tslint:disable:no-unused-expression */

import {CustomerRoute} from "@/routes/customerRoute";
import 'reflect-metadata';

describe('Hello world route test', () => {

  const helloWorldRoute: CustomerRoute = new CustomerRoute();

    it('It should return Hello World !', async () => {
      const res:String = await helloWorldRoute.getHelloWorld();
      expect(res).toBe('Hello World !')
    });
  },
);
