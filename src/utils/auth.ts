import { signMessage } from 'wagmi/actions'
import { config } from '@/config/web3'

interface SignInResult {
  success: boolean
  data?: {
    address: string
    signature: string
    message: string
    nonce: string
    timestamp: string
  }
  error?: string
}

// Generate random nonce
function generateNonce(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// Generate signature message
export function generateSignMessage(address: string, nonce: string): string {
  return `Welcome to DeAgent AI!

Please sign this message to verify your wallet ownership.
This will not trigger a blockchain transaction or cost any gas fees.

Wallet address: ${address}
Nonce: ${nonce}
Timestamp: ${new Date().toISOString()}`
}

// Wallet sign-in
export async function signInWithWallet(address: string): Promise<SignInResult> {
  try {
    const nonce = generateNonce()
    const message = generateSignMessage(address, nonce)

    // Request signature
    const signature = await signMessage(config, {
      message,
    })

    // Return signature result
    return {
      success: true,
      data: {
        address,
        signature,
        message,
        nonce,
        timestamp: new Date().toISOString(),
      },
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

// Verify signature
export function verifySignature(_address: string, _message: string, _signature: string): boolean {
  try {
    // Add signature verification logic here
    // e.g., call backend API for verification
    return true
  } catch (error) {
    console.error('Signature verification failed:', error)
    return false
  }
}
