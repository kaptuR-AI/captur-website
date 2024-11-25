import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    // Get the form data from the request
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');

    // Validate the data
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: 'Name and email are required' },
        { status: 400 }
      );
    }

    // 1.0 check if the email already exists  (if exists - return message else add to database)

    // 1.1 Save to database
  const newdata =  await db.waitlist.create({
        data: {
            name: name,
            email: email
        }
    })

    
 
    // 2. Send confirmation email
    // 3. Add to mailing list
    

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully joined waitlist',
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}