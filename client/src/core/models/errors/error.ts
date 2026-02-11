export interface APIError {
    message: string;
    statusCode: number;
    details?: string;
}