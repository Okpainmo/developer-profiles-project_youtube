import { z } from 'zod';

export const profileSchema = z.object({
  fullName: z.string({
    required_error: 'fullName is required',
    invalid_type_error: 'fullName must be a string',
  }),
  email: z.string({
    required_error: 'email is required',
    invalid_type_error: 'email must be a string',
  }),
  website: z.string({
    required_error: 'website is required',
    invalid_type_error: 'website must be a string',
  }),
  about: z.string({
    required_error: 'about is required',
    invalid_type_error: 'about must be a string',
  }),
});

export type ProfileSpecs = z.infer<typeof profileSchema>;

export const profileParamsSchema = z.object({
  id: z.string(),
});

export type ProfileParamsSpecs = z.infer<typeof profileSchema>;
