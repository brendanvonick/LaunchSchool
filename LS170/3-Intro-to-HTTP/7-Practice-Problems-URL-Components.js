// 1. Given the following URL:
// https://amazon.com/Double-Stainless-Commercial-Refrigerator/B60HON32?ie=UTF8&
// qid=142952676&sr=93&keywords=commercial+fridge
//
//  a. Identify the host:
//    - amazon.com
//  b. Identify the names of the query parameters:
//    - ie, qid, sr, keywords
//  c.  Identify the values of the query parameters:
//    - UTF8, 142952676, 93, commercial+fridge
//  d. Identify the scheme:
//    - https
//  e. Identify the path:
//    - Double-Stainless-Commercial-Refrigerator/B60HON32
//  f. Identify the port:
//    - The port is not specified within the URL, however, because it's https,
//      the port is 443.
//
// 2. Add the port 3000 to the following URL:
// http://amazon.com/products/B60HON32?qid=142952676&sr=93
//    - http://amazon.com:3000/products/B60HON32?qid=142952676&sr=93
//
// 3. Given the following URL: http://localhost:4567/todos/15
//  a. Identify the query parameters:
//    - None are specified, it has none.
//  b. Identify the scheme:
//    - http
//  c. Identify the path:
//    - todos/15
//  d. Identify the host:
//    - localhost
//  e. Identify the port:
//    - 4567
//
// 4. What are two different ways to encode a space in a query parameter? We
//    didn't cover this in the lectures, so feel free to search online for
//    the answer.
//    - %20 and +
//
// 5. What character indicates the beginning of a URL's query parameters?
//    - ?
//
// 6. What character is used between the name and value of a query parameter?
//    - =
//
// 7. What character is used between multiple query parameters?
//    - &
//
