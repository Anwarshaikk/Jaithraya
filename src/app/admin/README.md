# Admin Dashboard

This admin section provides access to view and manage consultation form submissions.

## Accessing the Admin Dashboard

Navigate to `/admin/consultations` to view all consultation form submissions.

## Features

### View Submissions
- See all consultation form submissions in a clean, organized layout
- View contact information, business details, and project requirements
- Sort by submission date (newest first)

### Export Data
- Export all submissions to CSV format
- Includes all form fields and submission timestamps
- Perfect for importing into CRM systems or spreadsheets

### Data Collected

Each consultation submission includes:
- **Contact Information**: Name, email, phone, company
- **Business Details**: Business type, current challenges
- **Project Information**: Budget range, timeline, preferred contact method
- **Additional Information**: Any extra details provided by the customer
- **Metadata**: Submission timestamp and unique ID

## Data Storage

- **API Endpoint**: `/api/consultation` (POST for new submissions, GET for retrieving all)
- **Local Storage**: Data is also stored in browser's localStorage for immediate access
- **Server Storage**: Currently stored in memory (resets on server restart)

## Next Steps for Production

1. **Database Integration**: Replace in-memory storage with a proper database (PostgreSQL, MongoDB, etc.)
2. **Authentication**: Add admin authentication to protect the admin dashboard
3. **Email Notifications**: Send email alerts when new consultations are submitted
4. **CRM Integration**: Connect with HubSpot, Salesforce, or other CRM systems
5. **Analytics**: Add tracking for conversion rates and form completion rates

## Security Considerations

- The admin page is currently accessible to anyone with the URL
- In production, implement proper authentication and authorization
- Consider rate limiting for the API endpoints
- Add input validation and sanitization for all form data
