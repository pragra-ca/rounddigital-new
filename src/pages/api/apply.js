import formidable from 'formidable';

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
    const [fields] = await form.parse(req);
    const applicationData = JSON.parse(fields.data[0]);

    if (!applicationData.fullName || !applicationData.email || !applicationData.jobPosition) {
      return res.status(400).json({ message: 'Missing required application fields' });
    }

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({ message: 'Error processing application' });
  }
}
