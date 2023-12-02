import { Module } from '@nestjs/common';
import { SongsModule } from './songs/songs.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { RouterModule } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      // isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test')
          .default('development'),
        SERVER_PORT: Joi.number().valid(3000, 4000, 5000).default(4000),
        MONGO_URI: Joi.string(),
      }),
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    SongsModule,
    RouterModule.register([
      {
        path: 'api/v1',
        module: SongsModule,
      },
    ]),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'src', 'views'),
      renderPath: '/*',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
