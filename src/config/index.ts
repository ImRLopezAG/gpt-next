interface Env {
  API_KEY: string
}

export const ENV: Env = {
  API_KEY: process.env.API_KEY!
}
