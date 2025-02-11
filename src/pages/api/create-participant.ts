import Participants from "../../server_utils/participant";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../server_utils/connectDB";
import Cors from "cors";

interface Participant {
  name: string;
  email: string;
  phone: string;
  year: string;
  branch: string;
  sic: string;
}

// 1. Initialize the CORS middleware
const cors = Cors({
  origin: "https://mun2025.sitwestevents.live", // Replace with your actual domain
  methods: ["POST", "OPTIONS"]
});

// 2. Helper to run middleware (since Next.js API routes don't run middleware by default)
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (
    req: NextApiRequest,
    res: NextApiResponse,
    callback: (result: unknown) => void
  ) => void
) {
  return new Promise<void>((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve();
    });
  });
}

connectDB();

export default async function CreateParticipant(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 3. Run the CORS middleware first
  await runMiddleware(req, res, cors);

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, year, branch, sic }: Participant = req.body;
    if (!name || !email || !phone || !year || !branch || !sic) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const sicPattern = /^\d{2}[a-zA-Z]{4}\d{2}$/;
    if (!sicPattern.test(sic)) {
      return res.status(400).json({ message: "SIC format is invalid" });
    }

    // branch in CSE,ME,EE,ECE,CE
    const branchPattern = /^(CSE|ME|EE|ECE|CE)$/;

    if (!branchPattern.test(branch)) {
      return res.status(400).json({ message: "Branch is invalid" });
    }

    const existingParticipantWithEmail = await Participants.findOne({ email });
    if (existingParticipantWithEmail) {
      return res
        .status(400)
        .json({ message: "Participant with this email already exists" });
    }

    const existingParticipantWithSIC = await Participants.findOne({ sic });
    if (existingParticipantWithSIC) {
      return res
        .status(400)
        .json({ message: "Participant with this SIC already exists" });
    }

    const newParticipant = new Participants({
      name,
      email,
      phone,
      year,
      branch,
      sic
    });

    await newParticipant.save();
    res.status(201).json({ message: "Participant added successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}
