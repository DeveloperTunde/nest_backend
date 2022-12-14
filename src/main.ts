import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as cookieParser from "cookie-parser";
import * as session from "express-session";
import * as passport from "passport";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

   // app.use(cookieParser());
   app.use(
       session({
           secret:'keyboard cat',
           resave: false,
           saveUninitialized: false,
           cookie: {
               maxAge: 3600000
           }
       })
   )
    app.enableCors({
        origin: 'http://localhost:8080',
        credentials: true
    })

    await app.listen(8000);
}

bootstrap();
