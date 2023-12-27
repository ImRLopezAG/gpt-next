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
    .then(async ({ response }) => response)
  return response.text()
}

export async function getNameFromResponse ({ prompt }: GenerateResponse): Promise<string> {
  const response = await generateResponse({
    prompt: `Generate a title for a this topic: it should as max 20 words. \n\n${prompt}`
  })
  return response
}
