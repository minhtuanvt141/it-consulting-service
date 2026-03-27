import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const API_KEY = "sk-4bd27113b7dc78d1-lh6jld-f4f9c69f";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Read chatbot data
    const dataPath = path.join(process.cwd(), 'public', 'chatbot_data.txt');
    let chatbotData = '';
    if (fs.existsSync(dataPath)) {
        chatbotData = fs.readFileSync(dataPath, 'utf-8');
    }

    const systemPrompt = `
Vai trò: Bạn là AI trợ lý độc quyền cho chuyên gia.
Chỉ được trả lời dựa trên thông tin sau (Knowledge Base):
${chatbotData}

Yêu cầu BẮT BUỘC:
- Trả lời bằng Markdown đẹp
- Luôn chào thân thiện ở đầu câu
- Trả lời rõ ràng, súc tích
- Kết thúc bằng lời mời hỏi thêm
- Nếu câu hỏi ngoài phạm vi thông tin trên, hãy từ chối nhẹ nhàng và hướng dẫn liên hệ trực tiếp qua email hoặc Zalo.
`;

    const apiMessages = [
      { role: "system", content: systemPrompt },
      ...messages
    ];

    const response = await fetch("https://9router.vuhai.io.vn/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "ces-chatbot-gpt-5.4",
        messages: apiMessages,
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: "Failed to fetch from Custom API: " + errorText }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ reply: data.choices[0].message.content });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
