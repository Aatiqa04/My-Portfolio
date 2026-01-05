export async function POST(request) {
  try {
    const body = await request.json();

    const accessKey = process.env.WEB3FORMS_KEY;

    if (!accessKey) {
      console.error('WEB3FORMS_KEY environment variable is not set');
      return Response.json({ success: false, message: 'Server configuration error' }, { status: 500 });
    }

    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('name', body.name);
    formData.append('email', body.email);
    formData.append('subject', `Portfolio Contact: ${body.subject}`);
    formData.append('message', body.message);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const responseText = await response.text();

    let result;
    try {
      result = JSON.parse(responseText);
    } catch {
      console.error('Web3Forms returned non-JSON:', responseText.substring(0, 200));
      return Response.json({ success: false, message: 'Email service error' }, { status: 500 });
    }

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
