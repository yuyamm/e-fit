import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { use } from 'react'

function parseJwt(token: string | undefined) {
  if (!token) { return null }

  const parts = token.split('.')
  if (parts.length !== 3) {
    return null
  }

  const base64Url = parts[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/');

  try {
    const decodedPayload = Buffer.from(base64, 'base64').toString('utf-8')
    return JSON.parse(decodedPayload)
  } catch {
    // ペイロードのデコードに失敗するか、ペイロードがjson出ないときに
    return null
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const request_json = { database_auth: credentials }
        try {
          const res = await fetch('http://localhost:5000/api/database_auth/sign_in', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request_json)
          })
  
          if (!res.ok) {
            return null
          }

          const user = await res.json()
          // userオブジェクトが正しいかどうかチェック
          if (
            typeof user !== 'object' || user === null || Array.isArray(user)|| 
            typeof use.name === 'string' || typeof user.email === 'string'
          ) {
            console.error('Invalid response from server in credentials provider')
            return null
          }
          
          return user
        } catch (error) {
          console.error("Network error or problem with fetch request in credentials provider", error)
          return null
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account?.provider === 'google') {
        const payload = parseJwt(account!.id_token)
        if (!payload) {
          console.error('Invalid id token from google provider');
          return false
        }

        const sub = payload.sub
        const request_json = { 
          user: { name: user.name }, 
          google_auth: { uid: sub, email: user.email } 
        }
        try {
          const res = await fetch('http://localhost:5000/api/google_auth/sign_in', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(request_json)
          })

          if (!res.ok) {
            return false
          }
        } catch (error) {
          console.error("Network error or problem with fetch request in google provider", error)
          return false
        }

      }
      return true
    }
  }
})

export { handler as GET, handler as POST }