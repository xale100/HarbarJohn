import { authOk } from "@/lib/mugclub";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

export async function GET(request: Request) {
  if (!authOk(request))
    return Response.json({ error: "Unauthorized" }, { status: 401 });

  const url = new URL(request.url);
  const filename = url.searchParams.get("filename");
  if (!filename)
    return Response.json({ error: "filename required" }, { status: 400 });

  const contentType = filename.endsWith(".png") ? "image/png" : "image/jpeg";

  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME!,
    Key: filename,
    ContentType: contentType,
  });

  const uploadUrl = await getSignedUrl(s3, command, { expiresIn: 300 });

  // Return the R2 key as the stored value — photos are private, served via /api/mugclub/photo
  return Response.json({ uploadUrl, photoKey: filename });
}
