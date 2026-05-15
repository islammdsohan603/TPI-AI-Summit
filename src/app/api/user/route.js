import { auth } from '@/lib/auth';
import { MongoClient } from 'mongodb';
import { headers } from 'next/headers';

const client = new MongoClient(process.env.MONGO_DB_URI);

export async function GET(request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = client.db('signup');
    const usersCollection = db.collection('user');

    const user = await usersCollection.findOne({ id: session.user.id });

    const profileData = {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      emailVerified: session.user.emailVerified,
      createdAt: user?.createdAt ?? session.user.createdAt,
    };

    return Response.json({ user: profileData });
  } catch (error) {
    console.error('Profile API error:', error);
    return Response.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
