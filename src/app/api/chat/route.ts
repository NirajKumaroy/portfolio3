import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const client = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    const chatCompletion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile", // Example Groq model
      messages,
    });

    return NextResponse.json({
      reply: chatCompletion.choices[0]?.message?.content || "No reply",

    });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
