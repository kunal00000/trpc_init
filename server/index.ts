import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { publicProcedure, router } from "./trpc";
import z from "zod";

const todoInputSchema = z.object({
  title: z.string(),
  description: z.string(),
  done: z.boolean().optional()
});

const appRouter = router({
  createTodo: publicProcedure.input(todoInputSchema).mutation(async (opts) => {
    console.log("hellow orld");
    const title = opts.input.title;
    const description = opts.input.description;

    // Do db stuff here

    return {
      id: "1",
      title,
      description
    };
  })
});

// Export type router type signature,
// NOT the router itself.

const server = createHTTPServer({
  router: appRouter
});

server.listen(3000);

export type AppRouter = typeof appRouter;
