import type { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
import fs from 'fs'

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, _fields, files) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      try {
        const file = files.file as unknown as formidable.File;
        const newPath = `public/uploads/${file.originalFilename}`;
        fs.renameSync(file.filepath, newPath);

        return res.status(200).json({ message: 'File uploaded successfully' });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return res.status(500).json({ error: 'Error uploading file' });
      }
    });
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}