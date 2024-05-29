import fastify from "fastify";
import clinicsRoutes from "./routes/clinicsRoutes";

const app = fastify();

app.addHook('onRequest', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

app.get("/", async (request, reply) => {
  return { hello: "world" };
});

app.register(clinicsRoutes);

app.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});