function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

/*  The only difference here is that the original buffer value will be mutated
    when using the first function, addToRollingBuffer1 because push mutates the
    caller. However, the effects of this are negated by adding in 'buffer =' to
    the 2nd function. The variable buffer is assigned a new value from the
    result of the concat method, but that is a reference to the actual array.
*/
