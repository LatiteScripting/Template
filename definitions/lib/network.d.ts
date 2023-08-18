declare namespace include {
    interface HttpResponse {
        /**
         * The body, if the status code is 200 (OK)
         */ 
        body: Uint8Array,
<<<<<<< HEAD
        statusCode: number
=======
        statusCode: number,

        /**
         * A WinRT error. Undefined if no error
         */
        error: string,
>>>>>>> 4450da648b444dd69f9648e8728a6cb7702074b8
    }

    interface GetData {
        contentType?: string,
        content?: Uint8Array,
    }

    interface PostData {
        contentType?: string,
        content: Uint8Array,
    }

    interface Network {
        /**
         * Sends a basic GET request to a URL.
         * @param url The URL to send the request.
         * @param data 
         */
        getSync(url: string, data?: GetData): HttpResponse;
<<<<<<< HEAD
=======

        /**
         * Sends an async GET request to a URL.
         * @param url The URL to send the request.
         * @param data 
         * @param callback 
         */
        get(url: string, data: GetData, callback: (err: number, resp: HttpResponse) => void): void;
>>>>>>> 4450da648b444dd69f9648e8728a6cb7702074b8
        
        /**
         * Sends a basic POST request to a URL.
         * @param url The URL to send a POST request.
         * @param data 
         */
        postSync(url: string, data?: PostData): HttpResponse;
<<<<<<< HEAD
=======

        /**
         * Sends an async POST request to a URL.
         * @param url The URL to send the request.
         * @param data 
         * @param callback 
         */
        //post(url: string, data: GetData, callback: (err: number, resp: HttpResponse) => void): void;
>>>>>>> 4450da648b444dd69f9648e8728a6cb7702074b8
    }
}
