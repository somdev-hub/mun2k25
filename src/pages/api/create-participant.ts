import Participants from "../../server_utils/participant";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../server_utils/connectDB";

interface Participant {
  name: string;
  email: string;
  phone: string;
  year: string;
  branch: string;
  sic: string;
}

connectDB();

export default async function CreateParticipant(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, year, branch, sic }: Participant = req.body;
    if (!name || !email || !phone || !year || !branch || !sic) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const existingParticipant = await Participants.findOne({ email: email });
    if (existingParticipant) {
      return res.status(400).json({ message: "Participant already exists" });
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
