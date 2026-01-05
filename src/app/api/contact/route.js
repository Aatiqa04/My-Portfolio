export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name: body.name,
        email: body.email,
        replyto: body.email,
        subject: `Portfolio Contact: ${body.subject}`,
        message: body.message,
        from_name: 'Portfolio Contact Form',
      }),
    });

    const result = await response.json();

    if (result.success) {
      return Response.json({ success: true });
    } else {
      return Response.json({ success: false, message: result.message }, { status: 400 });
    }
  } catch (error) {
    console.error('Contact API Error:', error);
    return Response.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
