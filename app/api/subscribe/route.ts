import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, firstName } = await req.json()

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
  }

  const token = process.env.HUBSPOT_ACCESS_TOKEN

  if (token) {
    try {
      const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          properties: {
            email,
            firstname: firstName ?? '',
            lead_source: 'book_sample_download',
            hs_lead_status: 'NEW',
          },
        }),
      })

      // 409 = contact already exists — still grant access
      if (!res.ok && res.status !== 409) {
        console.error('HubSpot error', res.status, await res.text())
      }
    } catch (err) {
      console.error('HubSpot request failed', err)
    }
  }

  // Always succeed — never block the user due to CRM errors
  return NextResponse.json({ success: true })
}
