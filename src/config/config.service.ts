import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class ConfigService {
  private envConfig: Record<string, any> = {
    database: {
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '5432', 10),
      username: process.env.DATABASE_USER || 'myuser',
      password: process.env.DATABASE_PASSWORD || 'mypassword',
      database: process.env.DATABASE_NAME || 'mydb',
    },
    port: parseInt(process.env.PORT || '3000', 10),
    environment: process.env.NODE_ENV || 'development',
  };

  get(key: string): any {
    return this.envConfig[key];
  }

  getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.envConfig.database.host,
      port: this.envConfig.database.port,
      username: this.envConfig.database.username,
      password: this.envConfig.database.password,
      database: this.envConfig.database.database,
      entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
      synchronize: this.envConfig.environment === 'development',
      logging: this.envConfig.environment === 'development',
      dropSchema: false,
    };
  }
}
