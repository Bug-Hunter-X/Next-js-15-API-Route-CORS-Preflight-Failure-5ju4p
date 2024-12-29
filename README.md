# Next.js 15 API Route CORS Preflight Failure

This repository demonstrates a common issue encountered when working with API routes in Next.js 15:  failure to handle preflight OPTIONS requests, resulting in CORS errors.  The problem is frequently caused by a missing response to OPTIONS requests.  This repo contains both the problematic code and the corrected version.

## Problem

When a client makes a request to an API route with certain headers (e.g., custom headers), the browser performs a preflight OPTIONS request to check if the server allows the actual request.  If the server doesn't respond correctly to the OPTIONS request, the browser will block the actual request, leading to a CORS error.

## Solution

The solution involves explicitly handling the OPTIONS request in the API route handler, setting the appropriate `Allow` header and returning a 200 status code.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Make a request to the API route (e.g., using a browser's developer tools or a tool like Postman) with a custom header to trigger the CORS preflight request.
5. Observe the error in the original `hello.js` and successful response with the corrected file `helloSolution.js`.

## Files

* `hello.js`: Contains the code with the bug.
* `helloSolution.js`: Contains the corrected code that successfully handles preflight requests.