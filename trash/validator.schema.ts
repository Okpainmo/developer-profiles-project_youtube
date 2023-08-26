import { AnyZodObject } from 'zod';

export type validatorSpecs = {
  body?: AnyZodObject;
  params?: AnyZodObject;
  query?: AnyZodObject;
};
