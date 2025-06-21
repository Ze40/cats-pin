import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

// 1. Создаем класс-валидатор
@ValidatorConstraint({ name: 'IsLogin', async: false })
export class IsLoginConstraint implements ValidatorConstraintInterface {
  validate(login: string, args: ValidationArguments) {
    const regex = /^[a-zA-Z0-9]+$/u;
    return regex.test(login);
  }

  defaultMessage(args: ValidationArguments) {
    return 'В логине не должно быть спец символов';
  }
}

export function IsLogin(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsLoginConstraint,
    });
  };
}
