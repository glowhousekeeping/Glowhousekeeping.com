-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  last_login TIMESTAMPTZ
);

-- Create website content table
CREATE TABLE IF NOT EXISTS website_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section TEXT UNIQUE NOT NULL,
  content JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  updated_by UUID REFERENCES admin_users(id)
);

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  price TEXT,
  features JSONB,
  icon TEXT,
  is_active BOOLEAN DEFAULT true,
  display_order INT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create gallery images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  image_url TEXT NOT NULL,
  image_type TEXT NOT NULL, -- 'before', 'after', 'transition'
  pair_id UUID, -- Links before/after pairs
  display_order INT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  service TEXT,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create analytics table
CREATE TABLE IF NOT EXISTS page_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_path TEXT NOT NULL,
  visit_count INT DEFAULT 0,
  date DATE NOT NULL,
  UNIQUE(page_path, date)
);

-- Insert default admin user (password: Admin123!)
-- Password hash for 'Admin123!' using bcrypt
INSERT INTO admin_users (email, password_hash) 
VALUES ('admin@glowhousekeeping.com', '$2a$10$XOPbrlUPQdwdJUpSrIF6X.LbE6kCOMqy7VgUQMl9HMQKlOHLq8C/W')
ON CONFLICT (email) DO NOTHING;

-- Insert default website content
INSERT INTO website_content (section, content) VALUES
('hero', '{"title": "Professional Cleaning Services", "subtitle": "Making Your Space Shine", "cta": "Book Now"}'),
('about', '{"title": "About Glow Housekeeping", "description": "We provide top-quality cleaning services..."}'),
('contact', '{"email": "info@glowhousekeeping.com", "phone": "+31 6 10756699", "address": "Netherlands"}')
ON CONFLICT (section) DO NOTHING;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_messages_created ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_gallery_type ON gallery_images(image_type);
CREATE INDEX IF NOT EXISTS idx_services_active ON services(is_active, display_order);
CREATE INDEX IF NOT EXISTS idx_analytics_date ON page_analytics(date DESC);
