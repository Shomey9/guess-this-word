import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import compression from 'compression';
import { Server } from "net";
import { ServerModule } from "./server.module";

async function bootstrap(): Promise<Server> {
  const app = await NestFactory.create<NestExpressApplication>(ServerModule)

  app.use(compression())
  const httpServer = await app.getHttpServer()
  return httpServer
}

export const server = bootstrap().catch((err: Error) => {
  console.log(` [ERROR] ${err.stack}`)
})