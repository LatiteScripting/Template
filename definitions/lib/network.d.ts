declare namespace include {
    export interface HttpResponse {
        /**
         * The body, if the status code is 200 (OK)
         */ 
        body: Buffer,
        statusCode: number,

        /**
         * The http client error message
         */
        error?: string,
    }

    interface GetData {
        contentType?: string,
        content?: Buffer,
    }

    interface PostData {
        contentType?: string,
        content: Buffer,
    }

    interface Network {
        /**
         * Sends a basic GET request to a URL.
         * @param url The URL to send the request.
         * @param data 
         */
        getSync(url: string, data?: GetData): HttpResponse;

        /**
         * Sends an async GET request to a URL.
         * @param url The URL to send the request.
         * @param data 
         * @param callback 
         */
        get(url: string, data: GetData, callback: (resp: HttpResponse) => void): void;
        
        /**
         * Sends a basic POST request to a URL.
         * @param url The URL to send a POST request.
         * @param data 
         */
        postSync(url: string, data?: PostData): HttpResponse;

        /**
         * Sends an async POST request to a URL.
         * @param url The URL to send the request.
         * @param data 
         * @param callback 
         */
        //post(url: string, data: GetData, callback: (err: number, resp: HttpResponse) => void): void;
    }
}
