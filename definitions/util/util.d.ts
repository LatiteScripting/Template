interface IUtil {
<<<<<<< HEAD
    bufferToString(buf: Uint8Array): string;
=======
    /**
     * Converts a buffer into a UTF-8 string.
     * @param buf 
     */
    bufferToString(buf: Uint8Array): string;
    /**
     * Converts a string to a UTF-8 buffer.
     * @param str 
     */
>>>>>>> 4450da648b444dd69f9648e8728a6cb7702074b8
    stringToBuffer(str: string): Uint8Array;
}

declare var util: IUtil;