import { z } from "zod";

export const signupInput = z.object({
  username: z.string(),
  password: z.string(),
});
export type SignupInput = z.infer<typeof signupInput>;
