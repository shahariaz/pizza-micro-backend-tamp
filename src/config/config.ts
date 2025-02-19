import dotenvflow from 'dotenv-flow'
dotenvflow.config()
class Config {
    public DATABASE_URL: string | undefined
    public PORT: number | undefined
    public NODE_ENV: string | undefined
    constructor() {
        this.DATABASE_URL = process.env.DATABASE_URL
        this.PORT = parseInt(process.env.PORT as string)
        this.NODE_ENV = process.env.NODE_ENV
    }
    public validateConfig(): void {
        for (const [key, value] of Object.entries(this)) {
            if (value === undefined || value === null) {
                throw new Error(`Environment variable ${key} is missing`)
            }
        }
    }
}
export const config: Config = new Config()
