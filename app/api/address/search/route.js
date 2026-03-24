import { NextResponse } from 'next/server';
import { getSession } from '../../../../lib/auth';

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search';

export async function GET(request) {
  const session = getSession(request);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q');

  if (!q || q.trim().length < 2) {
    return NextResponse.json({ results: [] });
  }

  try {
    const params = new URLSearchParams({
      q: q.trim(),
      format: 'json',
      addressdetails: '1',
      countrycodes: 'id',
      limit: '8',
      'accept-language': 'id',
    });

    const res = await fetch(`${NOMINATIM_URL}?${params}`, {
      headers: {
        'User-Agent': 'TCGExpressID/1.0 (tcgexpress.id)',
        'Accept-Language': 'id',
      },
      next: { revalidate: 300 },
    });
    const data = await res.json();

    const results = (data || []).slice(0, 8).map(r => {
      const addr = r.address || {};
      const parts = [
        addr.road,
        addr.neighbourhood || addr.suburb,
        addr.city_district || addr.subdistrict,
        addr.city || addr.town || addr.village || addr.county,
        addr.state,
      ].filter(Boolean);

      return {
        address: r.display_name,
        road: addr.road || '',
        district: addr.city_district || addr.subdistrict || addr.neighbourhood || '',
        city: addr.city || addr.town || addr.village || addr.county || '',
        province: addr.state || '',
        postal: addr.postcode || '',
        shortAddress: parts.join(', '),
        lat: r.lat,
        lng: r.lon,
      };
    });

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ results: [] });
  }
}
