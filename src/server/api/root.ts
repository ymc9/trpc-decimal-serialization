import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createRouter as createZenStackRouter } from "~/server/api/routers/generated/routers";

/**
 * This is the primary router for your server.
 */
export const appRouter = createZenStackRouter(
  createTRPCRouter,
  publicProcedure,
);

// export type definition of API
export type AppRouter = typeof appRouter;
