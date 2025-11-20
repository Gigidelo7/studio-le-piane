import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

let aiClient: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: API_KEY });
  }
  return aiClient;
};

const SYSTEM_INSTRUCTION = `
Sei l'assistente virtuale dello Studio Dentistico Le Piane del Dr. Luca Le Piane a Verona.
Il tuo compito è fornire informazioni gentili e professionali sui servizi offerti.

Dettagli Studio:
- Dentista: Dr. Luca Le Piane
- Sede: Verona
- Servizi: Odontoiatria generale, protesi su impianti, riabilitazioni, gnatologia e posturologia.
- Appuntamenti: Riceve solo su appuntamento.

Linee guida:
1. Rispondi in italiano in modo formale ma accogliente.
2. Se l'utente chiede diagnosi mediche specifiche o ha dolore acuto, consiglia FORTEMENTE di prenotare una visita e NON dare consigli medici fai-da-te.
3. Spiega i servizi (es. cos'è la gnatologia) in termini semplici se richiesto.
4. Per prenotare, invita l'utente a chiamare lo studio o usare il modulo di contatto sul sito.
5. Sii conciso.
`;

export const createChatSession = (): Chat => {
  const ai = getClient();
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "Mi dispiace, non ho capito. Potresti riformulare?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Scusa, al momento non riesco a connettermi al servizio di assistenza. Per favore riprova più tardi o chiama lo studio.";
  }
};