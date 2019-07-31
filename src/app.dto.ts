import { Trim, ToInt } from 'class-sanitizer';
import { IsNotEmpty, IsString, IsNumberString } from 'class-validator';

export class AppDto {
  @Trim() // <--- Trim
  @IsString()
  @IsNotEmpty()
  public readonly string: string; // example: ' value ' to 'value'

  @ToInt()
  @IsNumberString()
  @IsNotEmpty()
  public readonly number: any; // example: '1' to 1
}
