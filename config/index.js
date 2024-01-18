import * as Dotenv from "dotenv";
Dotenv.config();

if (!process.env.DB_URL) {
  throw new Error("Missing DB_URL in .env file.");
}
if (!process.env.SERVER) {
  throw new Error("Missing SERVER in .env file.");
}
if (!process.env.HOST) {
  throw new Error("Missing HOST in .env file.");
}
if (!process.env.PORT) {
  throw new Error("Missing PORT in .env file.");
}
if (!process.env.ACT_CLIENT_ID || !process.env.ACTON_CLIENT_SECRET)
  throw new Error("Missing ActOn Credentails.");

if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_MAIL_FROM)
  throw new Error("Missing Sendgrid credentials");

if (!process.env.FRONTEND_URL) throw new Error("FrontEnd URL is missing");

if (!process.env.ZOHOCRM_CLIENT_ID || !process.env.ZOHOCRM_CLIENT_SECRET)
  throw new Error("Zoho Credentials is missing");

const config = {
  db_url: process.env.DB_URL,
  host: process.env.HOST,
  port: process.env.PORT,
  jwt_secret_key: process.env.JWT_SECRET_KEY,
  server: process.env.SERVER,
  zoho_domain: {
    US: "https://accounts.zoho.com",
    AU: "https://accounts.zoho.com.au",
    EU: "https://accounts.zoho.eu",
    IN: "https://accounts.zoho.in",
    CN: "https://accounts.zoho.com.cn",
  },
  zoho_client_id: process.env.ZOHOCRM_CLIENT_ID,
  zoho_client_secret: process.env.ZOHOCRM_CLIENT_SECRET,
  act_domain: "https://api.actonsoftware.com",
  acton_client_id: process.env.ACT_CLIENT_ID,
  acton_client_secret: process.env.ACTON_CLIENT_SECRET,
  acton_scope: process.env.ACTON_SCOPE || "DEVELOPMENT", // PRODUCTION
  acton_redirect_uri: "auth/acton_code",
  zoho_campaign_domain: "https://campaigns.zoho.in",
  sgKey: process.env.SENDGRID_API_KEY,
  sgMailForm: process.env.SENDGRID_MAIL_FROM,
  frontUrl: process.env.FRONTEND_URL,
  adminEmail: process.env.ADMIN_EMAIL || "admin@thesuccessstars.com",
  adminPassword: process.env.ADMIN_PASSWORD || "Admin@success",
};

export default config;
