export interface TokenPayloadDTO {
    sub: string; // Subject (e.g., user ID)
    username?: string;
    email: string;
    roles: string[] | string; // User roles (e.g., 'admin', 'user')
    permissions: string[]; // User permissions (e.g., 'read', 'write')
    fullName?: string; // User's full name
    iat: number; // Issued At (timestamp)
    exp: number; // Expiration (timestamp)
    iss: string; // Issuer (e.g., your app name)
    aud: string; // Audience (e.g., your app audience)
    ipAddress?: string; // User's IP address
    device?: string; // User's device information
    location?: string; // User's location (e.g., 'New York, USA')
    userAgent?: string; // User's user agent (e.g., browser, version)
    utmSource?: string; // UTM source for tracking (e.g., 'google')
    utmMedium?: string; // UTM medium for tracking (e.g., 'cpc')
    utmCampaign?: string; // UTM campaign for tracking (e.g., 'summer-sale')
    // if is needed add more claims
    // I already left some optional because don't need to apply on MVP
  }