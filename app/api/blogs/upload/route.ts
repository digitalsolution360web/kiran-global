import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return Response.json(
        { success: false, error: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Generate unique filename
    const extension = file.name.split(".").pop();
    const filename = `blogs/${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${extension}`;

    await s3.send(
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: filename,
        Body: buffer,
        ContentType: file.type,
      })
    );

    const imageUrl = `${process.env.R2_PUBLIC_URL}/${filename}`;

    return Response.json({
      success: true,
      url: imageUrl,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Image upload failed",
      },
      { status: 500 }
    );
  }
}