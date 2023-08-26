import { ObjectId } from 'mongodb';
import * as z from 'zod';

export const paramsSchema = z.object({
  id: z
    .string()
    .min(1)
    .refine(
      (val) => {
        try {
          //   console.log(new ObjectId(val));
          return new ObjectId(val);
        } catch (error) {
          return false;
        }
      },
      {
        message: 'Invalid ObjectId',
      }
    ),
});

export type ParamsSpecs = z.infer<typeof paramsSchema>;
