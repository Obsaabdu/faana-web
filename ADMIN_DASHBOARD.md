# Faana Admin Dashboard

A comprehensive admin dashboard for managing all content on the Faana Advocacy website.

## Features

### 🏠 Dashboard Overview

- Real-time statistics and metrics
- Recent activity feed
- Quick action buttons
- Performance overview

### 👥 Team Management

- Add, edit, and delete team members
- Manage member profiles with detailed information
- Track expertise, education, and publications
- View contact information and social links

### 🏢 Practice Areas Management

- Manage legal practice areas
- Set featured areas for homepage display
- Track services and team assignments
- Monitor blog posts per area

### 📝 Blog Management

- Create and edit blog posts
- Manage categories and tags
- Set featured posts
- Track views and engagement
- Draft, publish, and archive posts

### 💼 Careers Management

- Post and manage job openings
- Track applications
- Set employment types and experience levels
- Manage salary information and benefits

### 🖼️ Gallery Management

- Organize photo collections
- Categorize by events, office, team, etc.
- Set featured galleries
- Manage photo uploads and descriptions

### 📧 Contact Forms Management

- View all incoming contact form submissions
- Categorize by inquiry type
- Assign to team members
- Track response status
- Set priority levels

### 📚 Legal Insights Management

- Create expert analysis articles
- Manage categories and tags
- Track readership metrics
- Set featured insights

### 📰 Newsletter Management

- Create and manage newsletters
- Set publication frequency
- Track subscriber counts
- Schedule and send newsletters

## Authentication

### Demo Credentials

- **Email**: admin@faana.com
- **Password**: admin123

### Security Features

- Simple authentication system
- Session management with localStorage
- Protected routes
- Logout functionality

## Technical Implementation

### Architecture

- Built with Next.js 14 and React
- TypeScript for type safety
- Tailwind CSS for styling
- Lucide React for icons
- Framer Motion for animations

### Key Components

- `AdminAuth`: Authentication wrapper
- `AdminProvider`: Context for admin state
- `AdminSidebar`: Navigation sidebar
- `AdminHeader`: Top navigation bar
- Content management pages for each section

### Data Management

- Mock data with realistic content
- State management with React hooks
- CRUD operations for all content types
- Search and filtering capabilities

## File Structure

```
src/app/[locale]/admin/
├── layout.tsx                 # Main admin layout
├── page.tsx                   # Dashboard overview
├── login/page.tsx            # Login page
├── team/page.tsx             # Team management
├── practice-areas/page.tsx   # Practice areas management
├── blogs/page.tsx            # Blog management
├── careers/page.tsx          # Careers management
├── gallery/page.tsx          # Gallery management
├── contacts/page.tsx         # Contact forms management
├── legal-insights/page.tsx   # Legal insights management
└── newsletters/page.tsx      # Newsletter management

src/components/admin/
├── admin-auth.tsx            # Authentication system
├── admin-provider.tsx        # Admin context provider
├── admin-sidebar.tsx         # Navigation sidebar
└── admin-header.tsx          # Top header bar
```

## Usage

### Accessing the Dashboard

1. Navigate to `/admin/login`
2. Enter demo credentials
3. Access the main dashboard at `/admin`

### Managing Content

1. Use the sidebar navigation to access different sections
2. Each section provides CRUD operations for content
3. Use search and filters to find specific items
4. Click on items to view detailed information
5. Use action buttons to edit, delete, or modify content

### Key Features

- **Search**: Find content across all sections
- **Filtering**: Filter by status, category, or other criteria
- **Bulk Actions**: Select multiple items for batch operations
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Changes reflect immediately

## Content Types

### Team Members

- Personal information (name, position, bio)
- Contact details (email, LinkedIn)
- Expertise areas and specializations
- Education and qualifications
- Publications and achievements
- Languages and bar admissions

### Practice Areas

- Area name and description
- Services offered
- Associated team members
- Statistics and metrics
- Featured status for homepage

### Blog Posts

- Title, excerpt, and full content
- Author and publication date
- Categories and tags
- Read time and view count
- Featured status and SEO settings

### Job Positions

- Job title and description
- Department and location
- Employment type and level
- Salary range and benefits
- Application deadline and requirements

### Gallery Items

- Collection title and description
- Category and location
- Photo count and featured images
- Tags and metadata
- Event date and details

### Contact Forms

- Contact information
- Inquiry type and subject
- Message content and attachments
- Status and priority
- Assignment and response tracking

### Legal Insights

- Article title and content
- Category and author
- Tags and metadata
- Publication status
- Analytics and engagement

### Newsletters

- Newsletter title and description
- Content and frequency
- Subscriber count and metrics
- Publication schedule
- Type and categorization

## Future Enhancements

### Planned Features

- Real backend integration
- Advanced analytics dashboard
- Bulk content operations
- Content scheduling
- Advanced search and filtering
- User role management
- API documentation
- Content versioning
- Media library management
- SEO optimization tools

### Technical Improvements

- Database integration
- File upload system
- Email notification system
- Advanced authentication
- Audit logging
- Performance optimization
- Error handling
- Testing suite
- Documentation

## Support

For technical support or feature requests, please contact the development team.

## License

This admin dashboard is part of the Faana Advocacy website project.
