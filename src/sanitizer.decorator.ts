import { HttpStatus, HttpException } from '@nestjs/common';
import { sanitize } from 'class-sanitizer';

export const SanitizePayload = <T>(payloadIndex: number = 0) => (
  target: any,
  key: string,
  descriptor: PropertyDescriptor,
) => {
  const originalFunction: () => void = descriptor.value;
  // tslint:disable-next-line
  descriptor.value = async function() {
    const payload: T = arguments[payloadIndex];

    sanitize(payload);

    return originalFunction.apply(this, arguments);
  };

  return descriptor;
};
