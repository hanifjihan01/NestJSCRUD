import { EntityNotFoundError} from "typeorm";
import { ExceptionFilter} from "@nestjs/common";
import { ArgumentsHost} from "@nestjs/common";
import { HttpStatus} from "@nestjs/common";
import { Catch} from "@nestjs/common";

@Catch(EntityNotFoundError)
export class EntityNotFoundExceptionFilter implements ExceptionFilter {
    catch(error: EntityNotFoundError, host: ArgumentsHost){
        const response = host.switchToHttp().getResponse();
        response.status(HttpStatus.NOT_FOUND).json({
            statusCode: HttpStatus.NOT_FOUND,
            message: 'Not found'
        })
    }

}