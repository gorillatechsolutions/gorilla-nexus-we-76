// API Routes for Gorilla Tech Solution
// Defines all API endpoints and their handlers

export interface Route {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  handler: string;
  middleware?: string[];
  description: string;
}

export const userRoutes: Route[] = [
  {
    method: 'GET',
    path: '/users',
    handler: 'UserController.getAllUsers',
    middleware: ['auth', 'admin'],
    description: 'Get all users'
  },
  {
    method: 'GET',
    path: '/users/:id',
    handler: 'UserController.getUserById',
    middleware: ['auth'],
    description: 'Get user by ID'
  },
  {
    method: 'POST',
    path: '/users',
    handler: 'UserController.createUser',
    middleware: ['auth', 'admin'],
    description: 'Create new user'
  },
  {
    method: 'PUT',
    path: '/users/:id',
    handler: 'UserController.updateUser',
    middleware: ['auth'],
    description: 'Update user'
  },
  {
    method: 'DELETE',
    path: '/users/:id',
    handler: 'UserController.deleteUser',
    middleware: ['auth', 'admin'],
    description: 'Delete user'
  },
  {
    method: 'POST',
    path: '/auth/login',
    handler: 'UserController.login',
    description: 'User login'
  },
  {
    method: 'POST',
    path: '/auth/register',
    handler: 'UserController.register',
    description: 'User registration'
  }
];

export const projectRoutes: Route[] = [
  {
    method: 'GET',
    path: '/projects',
    handler: 'ProjectController.getAllProjects',
    middleware: ['auth'],
    description: 'Get all projects'
  },
  {
    method: 'GET',
    path: '/projects/:id',
    handler: 'ProjectController.getProjectById',
    middleware: ['auth'],
    description: 'Get project by ID'
  },
  {
    method: 'POST',
    path: '/projects',
    handler: 'ProjectController.createProject',
    middleware: ['auth', 'manager'],
    description: 'Create new project'
  },
  {
    method: 'PUT',
    path: '/projects/:id',
    handler: 'ProjectController.updateProject',
    middleware: ['auth'],
    description: 'Update project'
  },
  {
    method: 'DELETE',
    path: '/projects/:id',
    handler: 'ProjectController.deleteProject',
    middleware: ['auth', 'manager'],
    description: 'Delete project'
  },
  {
    method: 'GET',
    path: '/projects/category/:category',
    handler: 'ProjectController.getProjectsByCategory',
    middleware: ['auth'],
    description: 'Get projects by category'
  }
];

export const publicRoutes: Route[] = [
  {
    method: 'GET',
    path: '/health',
    handler: 'HealthController.check',
    description: 'Health check endpoint'
  },
  {
    method: 'GET',
    path: '/company-info',
    handler: 'PublicController.getCompanyInfo',
    description: 'Get company information'
  },
  {
    method: 'POST',
    path: '/contact',
    handler: 'PublicController.submitContactForm',
    description: 'Submit contact form'
  },
  {
    method: 'GET',
    path: '/services',
    handler: 'PublicController.getServices',
    description: 'Get available services'
  }
];

export const allRoutes = {
  users: userRoutes,
  projects: projectRoutes,
  public: publicRoutes
};

export const generateRouteDocs = () => {
  const docs = {
    title: 'Gorilla Tech Solution API Documentation',
    version: '1.0.0',
    baseUrl: '/api/v1',
    routes: allRoutes
  };

  return docs;
};