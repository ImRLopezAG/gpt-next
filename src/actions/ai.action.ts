'use server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { env } from 'node:process'

const AI = new GoogleGenerativeAI(env.GOOGLE_API_KEY ?? '')

const model = AI.getGenerativeModel({ model: 'gemini-1.5-pro' })

interface GenerateResponse {
  prompt: string
}

export const generateResponse = async ({
  prompt
}: GenerateResponse): Promise<string> => {
  const response = await model
    .generateContent(prompt)
    .then(async ({ response }) => response)
  return response.text()
}

export const getNameFromResponse = async ({
  prompt
}: GenerateResponse): Promise<string> => {
  const response = await generateResponse({
    prompt: `Generate a title for a this topic: it should as max 4 words. \n\n${prompt}`
  })
  return response
}

export const generateStreaming = async ({
  prompt
}: GenerateResponse): Promise<ReadableStream<string>> => {
  const stream = await model
    .generateContentStream(prompt)
    .then(({ stream }) => stream)

  function iteratorToStream(iterator: any) {
    return new ReadableStream({
      async pull(controller) {
        const { value, done } = await iterator.next()
        if (done) {
          controller.close()
        } else {
          controller.enqueue(
            value
              .text()
              .replace(/(?:__|[*#])+/g, '')
              .replace(/#+\s/g, '')
              .replace(/(\*{1,2}|_{1,2})(.*?)\1/g, '$2')
              .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1 ($2)')
              .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '')
              .replace(/`([^`]+)`/g, '$1')
              .trim()
          )
        }
      }
    })
  }

  return iteratorToStream(stream)
}
