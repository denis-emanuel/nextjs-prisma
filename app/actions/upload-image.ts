"use server";

import { Storage } from "@google-cloud/storage";

async function uploadImage(imageName: string, image: string | Blob) {
  const storage = new Storage({
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
    credentials: {
      client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY,
    },
  });
  const bucket = storage.bucket(process.env.GOOGLE_CLOUD_BUCKET_NAME!);

  const file = bucket.file(imageName);

  const [response] = await file.generateSignedPostPolicyV4({
    expires: Date.now() + 1000 * 60 * 60,
    fields: {
      "x-goog-meta-test": "nextjs-project",
    },
  });
  const { url, fields } = response;
  const formDataGoogle = new FormData();
  Object.entries({ ...fields, file: image }).forEach(([key, value]) => {
    formDataGoogle.append(key, value as string | Blob);
  });
  const upload = await fetch(url, {
    method: "POST",
    body: formDataGoogle,
  });

  return upload;
}

export default uploadImage;
