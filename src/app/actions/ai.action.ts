'use server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { ENV } from '@config/index'
const AI = new GoogleGenerativeAI(ENV.API_KEY)

const model = AI.getGenerativeModel({ model: 'gemini-pro' })

interface GenerateResponse {
  prompt: string
}

export async function generateResponse ({
  prompt
}: GenerateResponse): Promise<string> {
  const response = await model
    .generateContent(prompt)
    .then(async ({ response }) => response.text())

  return response
}
