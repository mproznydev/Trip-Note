/**
 * Routes that are accessible to the public
 * They do not require any authentication
 */
export const publicRoutes: string[] = ["/", "/home"];

/**
 * Routes that are used for authentication
 * They are not accessible to logged in users and will redirect to default page
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register"];

/**
 * Prefix for authentication API
 * Routes with this prefix should always be accessible for auth to work
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/user";
