import { sanitize, Trim, ToInt } from 'class-sanitizer';
import { IsNotEmpty, IsString, IsNumberString } from 'class-validator';

export class AppDto {
  @Trim()
  @IsString()
  @IsNotEmpty()
  public readonly string: string;

  @ToInt()
  @IsNumberString()
  @IsNotEmpty()
  public readonly number: number;
}
