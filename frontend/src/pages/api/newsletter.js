export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ message: 'Valid email is required' });
  }

  try {
    // Save to Strapi
    const response = await fetch('http://localhost:1337/api/newsletter-subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          email,
          subscribed: true,
        },
      }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ message: 'Successfully subscribed!' });
    } else {
      // Check if email already exists
      if (data.error && data.error.message && data.error.message.includes('unique')) {
        return res.status(400).json({ message: 'Email already subscribed' });
      }
      throw new Error('Failed to subscribe');
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({ message: 'Subscription failed. Please try again.' });
  }
}
