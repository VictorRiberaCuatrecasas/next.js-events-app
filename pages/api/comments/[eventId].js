import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const id = req.query.eventId;

  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m2wd64e.mongodb.net/events?retryWrites=true&w=majority`
  );

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (!email.includes("@") || !name || !text) {
      res.status(422).json({ message: "invalid post" });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      id,
    };

    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);

    newComment.id = result.insertedId;

    res.status(201).json({ message: "post submitted" });
  }

  if (req.method === "GET") {
    const db = client.db();

    const documents = await db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: documents });
  }
  client.close();
}
