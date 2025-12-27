import { createHash } from "node:crypto";
import { NextResponse } from "next/server";

function sha1(input: string) {
  return createHash("sha1").update(input).digest("hex");
}

export async function POST(req: Request) {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    const folder = process.env.CLOUDINARY_FOLDER || "kura-house/events";

    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json(
        { error: "Cloudinary env vars missing" },
        { status: 500 }
      );
    }

    const form = await req.formData();
    const file = form.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const signatureBase = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
    const signature = sha1(signatureBase);

    const cloudinaryForm = new FormData();
    cloudinaryForm.append("file", file);
    cloudinaryForm.append("api_key", apiKey);
    cloudinaryForm.append("timestamp", String(timestamp));
    cloudinaryForm.append("folder", folder);
    cloudinaryForm.append("signature", signature);

    const uploadRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: cloudinaryForm,
      }
    );

    const uploadJson = (await uploadRes.json()) as
      | { secure_url?: string; error?: { message?: string } }
      | undefined;

    if (!uploadRes.ok || !uploadJson?.secure_url) {
      return NextResponse.json(
        {
          error:
            uploadJson?.error?.message ||
            `Cloudinary upload failed (${uploadRes.status})`,
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: uploadJson.secure_url }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Upload failed" },
      { status: 500 }
    );
  }
}
