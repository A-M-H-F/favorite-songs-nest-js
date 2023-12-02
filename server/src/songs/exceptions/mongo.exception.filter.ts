import {
  HttpException,
  Catch,
  ArgumentsHost,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    // console.log(exception);

    const exceptionValues = Object.values(exception);
    const errorCode = exceptionValues[0].error
      ? exceptionValues[0].error.code
      : null;

    if (errorCode === 11000) {
      response.status(403).json({
        statusCode: 403,
        error: 'Forbidden',
        message: 'Please choose a unique title.',
      });
    } else {
      // console.log(exceptionValues);
      response.status(status).json({
        statusCode: status,
        error: HttpStatus[status].replace(/_/g, ' '),
        message: exception.message,
      });
    }
  }
}
