export const errorHandler =(statusCode,message)=>{
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}



// function errorHandler(statusCode, message) {
//     const error = new Error();
//     error.statusCode = statusCode;
//     error.message = message;
//     return error;
// }

// export { errorHandler };