/**
 * Routes that are accessible to the public.
 * They do not require any authentication
 */
export const publicRoutes: string[] = [
  "/",
  "/home",
  "/auth/login",
  "/auth/register",
];

/**
 * Routes that are used for authentication.
 * They are not accessible to logged in users and will redirect to default page
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register"];

/**
 * Prefix for authentication API.
 * Routes with this prefix should always be accessible for auth to work
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after logging in
 */
export const DEFAULT_REDIRECT_ON_LOGIN: string = "/user";

/**
 * The default redirect path after trying to access a protected route
 */
export const DEFAULT_REDIRECT_ON_UNAUTHORIZED: string = "/auth/login";
