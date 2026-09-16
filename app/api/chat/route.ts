import { NextResponse } from "next/server";

// Placeholder for the future LLM-backed chatbot endpoint.
// This will call an LLM API server-side (key read from env vars, never
// exposed to the client) and stream a response back to the chat widget.
export async function POST() {
  return NextResponse.json(
    { error: "Chat endpoint not implemented yet." },
    { status: 501 }
  );
}
