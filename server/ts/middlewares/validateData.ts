import { Request, Response, NextFunction } from 'express';
import { AnyZodObject } from 'zod';

export type validatorSpecs = {
  body?: AnyZodObject;
  params?: AnyZodObject;
  // query: profileQuerySpecs
};

export const validateData = (dataSchema: validatorSpecs) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (dataSchema.body && req.body) {
        req.body = dataSchema.body.parse(req.body);
        // console.log(req.body);
      }

      if (dataSchema.params && req.body) {
        req.params = dataSchema.params.parse(req.params);
        // console.log(req.params);
      }

      // if (dataSchema.query && req.query) {
      //   req.query = dataSchema.query.parse(req.query);
      // }

      return next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};
