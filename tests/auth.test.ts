// PowerOffice.test.ts
import PowerOffice, { PlatformConfig } from '../src';

// Polyfill btoa for Node
(global as any).btoa = (str: string) =>
    Buffer.from(str, 'utf8').toString('base64')

describe('PowerOffice.authenticate', () => {
    const cfg: PlatformConfig = {
        appKey: 'A',
        clientKey: 'B',
        subscriptionKey: 'C',
        dev: true,
    }
    let client: PowerOffice

    beforeEach(() => {
        client = new PowerOffice(cfg)
        jest.restoreAllMocks()
    })

    it('resolves with access_token on success', async () => {
        const token = 'TOK'
            ; (global as any).fetch = jest.fn().mockResolvedValue({
                json: () => Promise.resolve({ access_token: token }),
            })

        await expect(client.authenticate()).resolves.toBe(token)
        // ensure it saved the token to config
        expect((client as any).config.accessToken).toBe(token)
    })

    it('rejects if JSON lacks access_token', async () => {
        ; (global as any).fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve({}),
        })

        await expect(client.authenticate())
            .rejects
            .toThrow('Authentication failed: No access token received')
    })

    it('rejects on fetch/network error', async () => {
        ; (global as any).fetch = jest.fn().mockRejectedValue(new Error('no network'))

        await expect(client.authenticate())
            .rejects
            .toThrow('Authentication failed: no network')
    })
})
