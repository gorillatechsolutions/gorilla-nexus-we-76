// Application configuration for Gorilla Tech Solution

export interface AppConfig {
  name: string;
  version: string;
  description: string;
  port: number;
  environment: 'development' | 'production' | 'test';
  apiPrefix: string;
  corsOrigins: string[];
  jwtSecret: string;
  jwtExpiresIn: string;
}

export const appConfig: AppConfig = {
  name: 'Gorilla Tech Solution API',
  version: '1.0.0',
  description: 'Digital Media Solutions API',
  port: parseInt(process.env.PORT || '3000'),
  environment: (process.env.NODE_ENV as AppConfig['environment']) || 'development',
  apiPrefix: '/api/v1',
  corsOrigins: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3000'],
  jwtSecret: process.env.JWT_SECRET || 'gorilla-tech-secret-key',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '24h',
};

export const constants = {
  COMPANY: {
    NAME: 'Gorilla Tech Solution',
    EMAIL: 'Business@GorillaTechSolution.com',
    PHONE: '0381 359 9517',
    ADDRESS: 'Agartala, Tripura (w) India, pin 799006',
    DOMAIN: 'GorillaTechSolution.com'
  },
  PAGINATION: {
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100
  },
  FILE_UPLOAD: {
    MAX_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_EXTENSIONS: ['jpg', 'jpeg', 'png', 'gif', 'webp']
  }
};