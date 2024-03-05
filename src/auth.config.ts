/*
  Add separate auth configuration file for edge compatibility
  Do NOT merge this with the main auth file
*/

import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export default {
  providers: [Credentials],
} satisfies NextAuthConfig;
