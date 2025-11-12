import formidable from 'formidable';
import fs from 'fs';
import FormData from 'form-data';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const form = formidable({});
    
    const [fields, files] = await form.parse(req);
    
    // Parse the data field which contains the form data
    const applicationData = JSON.parse(fields.data[0]);
    
    // For now, save without file upload to Strapi
    // You can add file upload functionality later
    const response = await fetch('http://localhost:1337/api/job-applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          fullName: applicationData.fullName,
          email: applicationData.email,
          phone: applicationData.phone,
          linkedIn: applicationData.linkedIn || '',
          portfolio: applicationData.portfolio || '',
          coverLetter: applicationData.coverLetter || '',
          jobPosition: applicationData.jobPosition,
          status: 'new',
        },
      }),
    });

    if (response.ok) {
      res.status(200).json({ message: 'Application submitted successfully' });
    } else {
      throw new Error('Failed to save application');
    }
  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({ message: 'Error processing application' });
  }
}
