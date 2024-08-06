import { z } from 'zod';

export const emailValidator = z.string().email({ message: 'Invalid email' });
export const urlValidator = z.string().url({ message: 'Invalid URL' });
export const emptyValidator = z
  .string()
  .min(1, { message: 'Field cannot be empty' });
