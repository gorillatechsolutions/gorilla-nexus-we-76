// Project Model for Gorilla Tech Solution
// Defines project data structure and validation

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  priority: ProjectPriority;
  clientId: string;
  managerId: string;
  teamMembers: string[];
  technologies: string[];
  budget: number;
  estimatedHours: number;
  actualHours?: number;
  startDate: Date;
  endDate: Date;
  deliveryDate?: Date;
  attachments: ProjectAttachment[];
  milestones: ProjectMilestone[];
  createdAt: Date;
  updatedAt: Date;
}

export enum ProjectCategory {
  WEB_DEVELOPMENT = 'web-development',
  MOBILE_DEVELOPMENT = 'mobile-development',
  DIGITAL_MARKETING = 'digital-marketing',
  UI_UX_DESIGN = 'ui-ux-design',
  ECOMMERCE = 'ecommerce',
  CUSTOM_SOFTWARE = 'custom-software',
  MAINTENANCE = 'maintenance'
}

export enum ProjectStatus {
  DRAFT = 'draft',
  PLANNING = 'planning',
  IN_PROGRESS = 'in-progress',
  REVIEW = 'review',
  TESTING = 'testing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  ON_HOLD = 'on-hold'
}

export enum ProjectPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

export interface ProjectAttachment {
  id: string;
  fileName: string;
  filePath: string;
  fileSize: number;
  mimeType: string;
  uploadedAt: Date;
  uploadedBy: string;
}

export interface ProjectMilestone {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  isCompleted: boolean;
  completedAt?: Date;
  deliverables: string[];
}

export interface CreateProjectDto {
  title: string;
  description: string;
  category: ProjectCategory;
  priority: ProjectPriority;
  clientId: string;
  budget: number;
  estimatedHours: number;
  startDate: string;
  endDate: string;
  technologies: string[];
  milestones?: Omit<ProjectMilestone, 'id' | 'isCompleted' | 'completedAt'>[];
}

export interface UpdateProjectDto {
  title?: string;
  description?: string;
  category?: ProjectCategory;
  status?: ProjectStatus;
  priority?: ProjectPriority;
  budget?: number;
  estimatedHours?: number;
  actualHours?: number;
  endDate?: string;
  deliveryDate?: string;
  technologies?: string[];
}

export class ProjectModel {
  static validateTitle(title: string): boolean {
    return title && title.trim().length >= 5 && title.trim().length <= 100;
  }

  static validateDescription(description: string): boolean {
    return description && description.trim().length >= 20 && description.trim().length <= 1000;
  }

  static validateBudget(budget: number): boolean {
    return budget > 0 && budget <= 10000000; // Max 1 crore
  }

  static validateDateRange(startDate: string, endDate: string): boolean {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return start < end && start >= new Date();
  }

  static validateCreateProject(projectData: CreateProjectDto): string[] {
    const errors: string[] = [];

    if (!this.validateTitle(projectData.title)) {
      errors.push('Title must be between 5 and 100 characters');
    }

    if (!this.validateDescription(projectData.description)) {
      errors.push('Description must be between 20 and 1000 characters');
    }

    if (!this.validateBudget(projectData.budget)) {
      errors.push('Budget must be greater than 0 and less than 1 crore');
    }

    if (projectData.estimatedHours <= 0) {
      errors.push('Estimated hours must be greater than 0');
    }

    if (!this.validateDateRange(projectData.startDate, projectData.endDate)) {
      errors.push('End date must be after start date and start date must be in future');
    }

    if (!projectData.technologies || projectData.technologies.length === 0) {
      errors.push('At least one technology must be specified');
    }

    return errors;
  }
}