import {
  users,
  adminUsers,
  newsArticles,
  events,
  projects,
  contacts,
  volunteers,
  type User,
  type InsertUser,
  type AdminUser,
  type InsertAdminUser,
  type NewsArticle,
  type InsertNewsArticle,
  type Event,
  type InsertEvent,
  type Project,
  type InsertProject,
  type Contact,
  type InsertContact,
  type Volunteer,
  type InsertVolunteer,
} from "@shared/schema";

import { eq, desc, count } from "drizzle-orm";
import { db } from "./db";

interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Admin operations
  getAdminUser(id: string): Promise<AdminUser | undefined>;
  getAdminUserByEmail(email: string): Promise<AdminUser | undefined>;
  createAdminUser(user: InsertAdminUser): Promise<AdminUser>;
  
  // Content management
  getAllNewsArticles(): Promise<NewsArticle[]>;
  getNewsArticle(id: string): Promise<NewsArticle | undefined>;
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
  updateNewsArticle(id: string, article: Partial<InsertNewsArticle>): Promise<NewsArticle>;
  deleteNewsArticle(id: string): Promise<void>;
  
  getAllEvents(): Promise<Event[]>;
  getEvent(id: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  updateEvent(id: string, event: Partial<InsertEvent>): Promise<Event>;
  deleteEvent(id: string): Promise<void>;
  
  getAllProjects(): Promise<Project[]>;
  getProject(id: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: string, project: Partial<InsertProject>): Promise<Project>;
  deleteProject(id: string): Promise<void>;
  
  getAllContacts(): Promise<Contact[]>;
  getContact(id: string): Promise<Contact | undefined>;
  updateContact(id: string, contact: Partial<Contact>): Promise<Contact>;
  deleteContact(id: string): Promise<void>;
  
  getAllVolunteers(): Promise<Volunteer[]>;
  getVolunteer(id: string): Promise<Volunteer | undefined>;
  updateVolunteer(id: string, volunteer: Partial<Volunteer>): Promise<Volunteer>;
  deleteVolunteer(id: string): Promise<void>;
  
  // Analytics
  getDashboardStats(): Promise<{
    totalContacts: number;
    totalVolunteers: number;
    totalEvents: number;
    totalProjects: number;
    totalNewsArticles: number;
    unreadContacts: number;
    pendingVolunteers: number;
  }>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(user: InsertUser): Promise<User> {
    const [newUser] = await db.insert(users).values(user).returning();
    return newUser;
  }

  // Admin operations
  async getAdminUser(id: string): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.id, id));
    return user;
  }

  async getAdminUserByEmail(email: string): Promise<AdminUser | undefined> {
    const [user] = await db.select().from(adminUsers).where(eq(adminUsers.email, email));
    return user;
  }

  async createAdminUser(user: InsertAdminUser): Promise<AdminUser> {
    const [newUser] = await db.insert(adminUsers).values(user).returning();
    return newUser;
  }

  // News articles
  async getAllNewsArticles(): Promise<NewsArticle[]> {
    return await db.select().from(newsArticles).orderBy(desc(newsArticles.createdAt));
  }

  async getNewsArticle(id: string): Promise<NewsArticle | undefined> {
    const [article] = await db.select().from(newsArticles).where(eq(newsArticles.id, id));
    return article;
  }

  async createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle> {
    const [newArticle] = await db.insert(newsArticles).values(article).returning();
    return newArticle;
  }

  async updateNewsArticle(id: string, article: Partial<InsertNewsArticle>): Promise<NewsArticle> {
    const [updatedArticle] = await db
      .update(newsArticles)
      .set({ ...article, updatedAt: new Date() })
      .where(eq(newsArticles.id, id))
      .returning();
    return updatedArticle;
  }

  async deleteNewsArticle(id: string): Promise<void> {
    await db.delete(newsArticles).where(eq(newsArticles.id, id));
  }

  // Events
  async getAllEvents(): Promise<Event[]> {
    return await db.select().from(events).orderBy(desc(events.createdAt));
  }

  async getEvent(id: string): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event;
  }

  async createEvent(event: InsertEvent): Promise<Event> {
    const [newEvent] = await db.insert(events).values(event).returning();
    return newEvent;
  }

  async updateEvent(id: string, event: Partial<InsertEvent>): Promise<Event> {
    const [updatedEvent] = await db
      .update(events)
      .set({ ...event, updatedAt: new Date() })
      .where(eq(events.id, id))
      .returning();
    return updatedEvent;
  }

  async deleteEvent(id: string): Promise<void> {
    await db.delete(events).where(eq(events.id, id));
  }

  // Projects
  async getAllProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(desc(projects.createdAt));
  }

  async getProject(id: string): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async updateProject(id: string, project: Partial<InsertProject>): Promise<Project> {
    const [updatedProject] = await db
      .update(projects)
      .set({ ...project, updatedAt: new Date() })
      .where(eq(projects.id, id))
      .returning();
    return updatedProject;
  }

  async deleteProject(id: string): Promise<void> {
    await db.delete(projects).where(eq(projects.id, id));
  }

  // Contacts
  async getAllContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(desc(contacts.createdAt));
  }

  async getContact(id: string): Promise<Contact | undefined> {
    const [contact] = await db.select().from(contacts).where(eq(contacts.id, id));
    return contact;
  }

  async updateContact(id: string, contact: Partial<Contact>): Promise<Contact> {
    const [updatedContact] = await db
      .update(contacts)
      .set(contact)
      .where(eq(contacts.id, id))
      .returning();
    return updatedContact;
  }

  async deleteContact(id: string): Promise<void> {
    await db.delete(contacts).where(eq(contacts.id, id));
  }

  // Volunteers
  async getAllVolunteers(): Promise<Volunteer[]> {
    return await db.select().from(volunteers).orderBy(desc(volunteers.createdAt));
  }

  async getVolunteer(id: string): Promise<Volunteer | undefined> {
    const [volunteer] = await db.select().from(volunteers).where(eq(volunteers.id, id));
    return volunteer;
  }

  async updateVolunteer(id: string, volunteer: Partial<Volunteer>): Promise<Volunteer> {
    const [updatedVolunteer] = await db
      .update(volunteers)
      .set(volunteer)
      .where(eq(volunteers.id, id))
      .returning();
    return updatedVolunteer;
  }

  async deleteVolunteer(id: string): Promise<void> {
    await db.delete(volunteers).where(eq(volunteers.id, id));
  }

  // Analytics
  async getDashboardStats() {
    const [
      totalContactsResult,
      totalVolunteersResult,
      totalEventsResult,
      totalProjectsResult,
      totalNewsArticlesResult,
      unreadContactsResult,
      pendingVolunteersResult,
    ] = await Promise.all([
      db.select({ count: count() }).from(contacts),
      db.select({ count: count() }).from(volunteers),
      db.select({ count: count() }).from(events),
      db.select({ count: count() }).from(projects),
      db.select({ count: count() }).from(newsArticles),
      db.select({ count: count() }).from(contacts).where(eq(contacts.isRead, false)),
      db.select({ count: count() }).from(volunteers).where(eq(volunteers.status, 'pending')),
    ]);

    return {
      totalContacts: totalContactsResult[0]?.count || 0,
      totalVolunteers: totalVolunteersResult[0]?.count || 0,
      totalEvents: totalEventsResult[0]?.count || 0,
      totalProjects: totalProjectsResult[0]?.count || 0,
      totalNewsArticles: totalNewsArticlesResult[0]?.count || 0,
      unreadContacts: unreadContactsResult[0]?.count || 0,
      pendingVolunteers: pendingVolunteersResult[0]?.count || 0,
    };
  }
}

export const storage = new DatabaseStorage();
